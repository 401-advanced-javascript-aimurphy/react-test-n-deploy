# LAB - 27

## React Testing and Deployment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Author: Ai

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-aimurphy/react-test-n-deploy/pull/1)
* [travis](http://xyz.com)
* [back-end](http://xyz.com) (when applicable)
* [front-end: netlify](https://elated-jennings-85ced8.netlify.com/)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `header.js`  `footer.js`
##### Exported Values and Methods

* `header` is a simple h1 tag
* `footer` renders the codefellows copyright

###### `class Counter extends React.Component`
This is the star of our show. It is written within the app.js file and contains a state with two methods:

###### `handleButtonClickUp = e =>`
This updates the state to reflect increaseson our counter
###### `handleButtonClickDown = e =>`
This updates state to reflect decreases
### Setup
#### `.env` requirements
* `PORT` - 3000

### Running the app
#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
#### Tests
* How do you run tests? `npm test`
* This will run tests verifying the counter begins at zero, responds to up and down click events and renders correctly.

#### UML
Link to an image of the UML for your application and response to events.