# react-redux-mobile-catalog

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Requirements

The only thing you need to run the application is to have a [Docker](https://www.docker.com) instance raised

## Docker

To run the application and services, run the following docker-compose command:

```shell
docker-compose -f docker-compose.yml up -d --build
```

When the services are up and running, open [http://localhost:3000](http://localhost:3000) in your browser.

To stop the services, run the following docker-compose command:

```shell
docker-compose stop
```

## API Server

The API server has been developed in NodeJS with [`Express`](http://expressjs.com/) infrastructure . It's serves on port [3001](http://localhost:3001/phones). To start the API, execute the following command from the /api directory:

```shell
npm install && npm start
```

_Note: A 5 second timeout has been added to test spinner functionality_

## Web Server

The front part has been developed in React with [`Redux`](https://redux.js.org/) for the management of the states of the application. It is in port [3000](http://localhost:3000). To raise the front, execute the following command from the /app directory:

```shell
npm install && npm start
```

## Test Web App

Tests has been developed using [`Jest`](https://jestjs.io/), a Javascript library for easy testing. To execute the test suite:

```shell
npm test
```
