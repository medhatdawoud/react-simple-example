# React Simple Example

## How to run the App
* make sure to have `node` and `npm` installed or `yarn`
* get into the project folder and run `npm install` or `yarn install`
* Now you can run the app by running this command `npm start`

## Online version 
- I've deployed the app into a free dyno host on heroku and you can check it out from [here](https://ebay-buy-car.herokuapp.com) (keep in mind that it might take longer for the first load)
- this would be a good solution to checkout the task in action faster.

## App Technical Details
* The application is created using the `create-react-app` tool
* I've used mocked data from a json file in the src folder `api.json` that loads some brands and some equevelant models for testing purposes, and it can be replaced by a real API easily.

## Testing Details
* used `jest` and `enzyme` for rendering
* you can run unit testing using `npm test`
* you can also run unit testing coverage using `npm run test:coverage`

---
_Created by:_ Medhat Dawoud ([@med7atdawoud](https://twitter.com/Med7atDawoud))