# [uglysleep.today](http://uglysleep.today/)
WebApp that tracks my daily sleeping habits 💤 

Hosted on Heroku.

## Requirements

* Withings activité (my device, any Withings or Nokia connected device will work)
* API Key from Nokia Health — [https://developer.health.nokia.com/api](https://developer.health.nokia.com/api)

## Build

```
npm install
```

## Run

Export the suffix of the API URL with the parameters

```
oauth_nonce
oauth_signature
oauth_signature_method
oauth_timestamp
oauth_token
oauth_version
userid
```

as the environment variable `APIKEY`

For example,
```
&oauth_consumer_key=1234&oauth_nonce=1234&oauth_signature=1234&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1234&oauth_token=1234&oauth_version=1.0&userid=1223
```

Then run `npm start`.
