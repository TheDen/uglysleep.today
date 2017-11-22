const express = require('express');
const app = express();
const request = require('request');
app.set('view engine', 'ejs')

app.use(express.static('public'))

apikey = process.env.APIKEY

sdata = []

var sleepdata = function() {
  request('https://api.health.nokia.com/v2/sleep?action=getsummary&lastupdate=0' + apikey, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    var idx = body.body.series.length-1 
    var lightsleep = body.body.series[idx].data.lightsleepduration;
    var deepsleep = body.body.series[idx].data.deepsleepduration;
    var waketimes = body.body.series[idx].data.wakeupcount;
    var sleepdate = body.body.series[idx].date;
    sdata = [((lightsleep+deepsleep)/60/60).toFixed(1).toString(), waketimes.toString(), sleepdate.toString()];
    //  console.log(sdata)
  });
}

sleepdata();

var CronJob = require('cron').CronJob;
new CronJob('0 */6 * * *', function() {
  sleepdata();
}, null, true, 'Australia/Sydney');

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(process.env.PORT || 5000)
