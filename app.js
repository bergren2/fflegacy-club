const express = require('express');
const passport = require('passport');
const yaml = require('js-yaml');
const fs = require('fs');

const OAuth2Strategy = require('passport-oauth2');

const app = express();

let config;
try {
  config = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
} catch (e) {
  process.stdout.write(e);
}

passport.use(new OAuth2Strategy({
  authorizationURL: 'https://www.example.com/oauth2/authorize',
  tokenURL: 'https://www.example.com/oauth2/token',
  clientID: config.yapi.client_id,
  clientSecret: config.yapi.client_secret,
  callbackURL: 'http://localhost:3000/auth/example/callback',
},
(accessToken, refreshToken, profile, cb) => {
  // callback
}));

const port = 8080;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => process.stdout.write(`Listening on port ${port}`));
