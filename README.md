# react-redux-mobile-catalog

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## API Server

The API server has been developed in NodeJS with [`Express`](http://expressjs.com/) infrastructure . It's serves on port [3001](http://localhost:3001/phones). To start the API, execute the following command from the root of the project:

npm run start-api

Or go to the /api directory and execute the following command:

npm start

_Note: A 5 second timeout has been added to test spinner functionality_

## Web Server

The front part has been developed in React with [`Redux`](https://redux.js.org/) for the management of the states of the application. It is in port [3000](http://localhost:3000). To raise the front, execute the following command from the root of the project:

npm start

## Test Web App

Tests has been developed using [`Jest`](https://jestjs.io/), a Javascript library for easy testing. To execute the test suite:

npm test
