# Ebay - FE assessment

## How to run the App
* make sure to have `node` and `npm` installed or `yarn`
* get into the project folder and run `npm install` or `yarn install`
* Now you can run the app by running this command `npm start`

## Online version 
- I've deployed the app into a free dyno host on heroku and you can check it out from [here](https://ebay-buy-car.herokuapp.com) (keep in mind that it might take longer for the first load)
- this would be a good solution to checkout the task in action faster.

## App Technical Details
* About styling as it's not required to spend a lot of time styling I decided to rely on `twitter-bootstrap 4` so this exercise is fully bootstrap style without any written css from my end.
* Picked `react` to create this simple application
* The application is created using the `create-react-app` tool
* React was the obvious tool to pick since the requirements are pretty simple and it only require some view rendering.
* I've used mocked data from a json file in the src folder `api.json` that loads some brands and some equevelant models for testing purposes, and it can be replaced by a real API easily.
* Created 3 components:
  * _Dropdown Component_ : to generate a dropdownlist with attached label to it, and this component is getting the following list of properties:
    - `label`: which is obviously the label attached to the dropdown list
    - `onChange`: a function to handle the onChange event in the child component.
    - `placeholder`: to be passed as default value to the dropdown list
    - `options`: which is list of options to fill the fropdownlist with.
    - `selectedOption`: which is the selected option to be sent from the parent component.
    - `testHook`: is a property hold the id for the integration testing
  * _InputText Component_ : to generate a textbox with attached label to it, and this component is getting the following list of properties:
    - `label`: which is obviously the label attached to the input control.
    - `value`: which is the value that should be in the input text box
    - `onChange`: a function to handle the onChange event in the child component.
    - `testHook`: is a property hold the id for the integration testing
  * _BuyCarForm Component_ : and this component contains the whole form called the other components to generate controls, and add action to them, and also I handle almost everything in this parent component so it's the single source of truth.

## Testing Details
* used `jest` and `enzyme` for rendering
* you can run unit testing using `npm test`
* you can also run unit testing coverage using `npm run test:coverage`
* test coverage is 100% for the component, and you can find that in the terminal after running the above command.

---
_Created by:_ Medhat Dawoud ([@med7atdawoud](https://twitter.com/Med7atDawoud))