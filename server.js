const express = require('express')
const app = express()
const request = require('request')
app.set('view engine', 'ejs')

app.use(express.static('public'))

clientid = process.env.CLIENT_ID
clientsecret = process.env.CLIENT_SECRET
refreshtoken = process.env.REFRESH_TOKEN

sdata = []
function sleepdata(accesstoken) {
  request('https://api.health.nokia.com/v2/sleep?action=getsummary&lastupdate=0&access_token=' + accesstoken, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    var idx = body.body.series.length-1
    var lightsleep = body.body.series[idx].data.lightsleepduration
    var deepsleep = body.body.series[idx].data.deepsleepduration
    var waketimes = body.body.series[idx].data.wakeupcount
    var sleepdate = body.body.series[idx].date
    sdata = [((lightsleep+deepsleep)/60/60).toFixed(1).toString(), waketimes.toString(), sleepdate.toString()]
  })
}

function gettoken() {
  request.post(
    {
      headers: {'content-type' : 'application/x-www-form-urlencoded'},
      url: 'https://account.health.nokia.com/oauth2/token',
      form:
      {
        'grant_type': 'refresh_token',
        'client_id': clientid,
        'client_secret': clientsecret,
        'refresh_token': refreshtoken,
      },
      json: true,
    },
    (err, response, body) => {
      if (err) { return console.log(err); }
      sleepdata(body.access_token)
      refreshtoken = body.refresh_token
    })
}

gettoken()

var CronJob = require('cron').CronJob
new CronJob('*/30 * * * *', function() {
  gettoken()
}, null, true, 'Australia/Sydney')

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(process.env.PORT || 5000)
