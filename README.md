# [uglysleep.today](http://uglysleep.today/)
WebApp that tracks my daily sleeping habits 💤

Hosted on Heroku.

## Requirements

* Withings activité (my device, any Withings or Nokia connected device will work)
* OAuth 2.0 code from [Nokia](https://developer.health.nokia.com/oauth2)

## Build

```bash
npm install
```

## Run

1. Generate an OAuth 2.0 Access Token, follwing [Nokia's guide](https://developer.health.nokia.com/oauth2)
2. Export the token as the environment variable `ACCESS_TOKEN`
3. Then run `npm start` or `node server.js`.
4. Locally the website will run on port `5000`
