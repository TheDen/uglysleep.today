# [uglysleep.today](http://uglysleep.today/) 
![Sleep](public/favicon.ico)  WebApp that tracks my daily sleeping habits 💤

Hosted on Heroku.

## Requirements

* Withings activité (my device, any Withings or Nokia connected device will work)
* OAuth 2.0 code from [Nokia](https://developer.health.nokia.com/oauth2)

## Build

```bash
npm install
```

## Run

* Generate an OAuth 2.0 Access/Refresh Token, following [Nokia's guide](https://developer.health.nokia.com/oauth2)

* Export your `client_id`, `client_secret`, and `refresh_token`, i.e,

```bash
export CLIENT_ID=XXX
export CLIENT_SECRET=XXX
export REFRESH_TOKEN=XXX
```

* Then run `npm start` or `node server.js`
* Locally the website will run on port `5000`

