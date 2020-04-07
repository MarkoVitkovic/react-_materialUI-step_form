# Multi step form
> Project made with react and material UI. Multi step form. 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This is multi step form, for subscribe or something else, so you can see this, feel free to clone. This app si a 3-way auth.  

## Screenshots
![](https://github.com/MarkoVitkovic/react_materialUI-step_form/blob/master/img.png)
![](https://github.com/MarkoVitkovic/react_materialUI-step_form/blob/master/img1.png)
![](https://github.com/MarkoVitkovic/react_materialUI-step_form/blob/master/img2.png)
![](https://github.com/MarkoVitkovic/react_materialUI-step_form/blob/master/img3.png)

## Technologies
* [React](https://reactjs.org/docs/getting-started.html) - version 16.13.1
* [Node.js](https://nodejs.org/en/docs/) - version 13
* [Material UI] (https://material-ui.com/)
* [React-dom](https://github.com/facebook/react) - version 16.13.1



## Setup
Open terminal(cmd) and navigate:</br>
`npx create-react-app my-app`</br>
`cd my-app`</br>
`npm start`</br>
Open source in Visual Studio Code.

## Available Scripts

In the project directory, you can run:

npm start</br>
npm test</br>
npm run build</br>
npm run eject</br>
npm run build

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code Examples
Code:</br>
`nextStep = () => {`</br>
        `const {step} = this.state`</br>
        `this.setState({`</br>
           ` step: step + 1`</br>
        `})`</br>
   ` }`</br>
     `//Go back`</br>
     `prevStep = () => {`</br>
        `const {step} = this.state`</br>
       `this.setState({`</br>
           ` step: step - 1`</br>
        `})`</br>
  `  }`</br>
   ` //Handle change`</br>
    `handleChange = input => e =>{`</br>
       ` this.setState({`</br>
           ` [input]: e.target.value`</br>
      ` })`</br>
    `}`</br>

## Features
List of features ready and TODOs for future development
* First and last name
* Email
* Bio
* Occupation
* City

To-do list:
* Extract in bigger project

## Status
Project is: _finished_

## Inspiration
Credits: [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA) 

## Contact
Created by [Marko Vitkovic](https://github.com/MarkoVitkovic) - feel free to contact me!
