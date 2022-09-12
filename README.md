# About 
A Nestjs App that communicates with Hackernews' public API

## Description

A Nestjs APP that calls Hackernews' API to provide the following endpoings:
1. Top 10 most occurring words in the titles of the last 25 stories
2. Top 10 most occurring words in the titles of the post of exactly the last week
3. Top 10 most occurring words in titles of the last 600 stories of users with at least 10.000 karma

## Endpoints


1. Top 10 most occurring words in the titles of the last 25 stories - `http://[::1]:3000/v1/top-ten-most-occuring-words-in-last255-stories`

2. Top 10 most occurring words in the titles of the post of exactly the last week - `http://[::1]:3000/v1/top-words-in-last600-stories-of-users`

3.  Top 10 most occurring words in titles of the last 600 stories of users with at least 10.000 karma - `http://[::1]:3000v1/top-words-in-story-of-last-week31934135`

# Tools

- NodeJS
- Express
- Nestjs



## Getting Started

The easiest way to get started is to clone the repository:

- clone the repository


- CD into the project's directory


- Install all dependencies by running npm install


- Run the app by running npm run start:dev


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


Nest is [MIT licensed](LICENSE).
