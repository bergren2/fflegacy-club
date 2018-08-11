# fflegacy.club

## Setup

    $ yarn install
    $ cp config.yml.example config.yml

Get OAuth2 credentials by [creating a Yahoo project](https://developer.yahoo.com/oauth2/guide/flows_authcode/#step-1-sign-in-and-get-credentials)
and add them to `config.yml`.

## Development

    $ yarn start

## ngrok

    $ ngrok http 8080

or if you're fancy

    $ ngrok http -subdomain=bass 8080
