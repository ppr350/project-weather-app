# Project Weather App
## Version 1.0

## The Project 
This project is a part of The Odin Project’s JavaScript course. It is aimed at use everything I have learned so far to create a weather forecast site using info from Weather API.

## Module bundler and linting utility 
Webpack is used in this project to help manage my code and assets.

Combination of ESLint and Prettier is used in this project to help format the code. In order to avoid possible conflicts between these two, prettier-eslint is also used. 

Babel might be added in the future update.

## Functionality 
The weather forecast web app uses Weather API free tier api key to receive weather information.

Async Await is used to fetch the Weather API weather forecast in this project, however I intent to create a new branch and use Promise instead in that branch in the future. 

The Await operators lives inside the Async function’s try block. The first await operator fetches the api, and the second await operator takes the response stream and reads it to completion, the outcome of which is parsing the response to produce a JavaScript object.

When the response is obtained successfully, a correspond callback function that is designed to tailor the code further to suit the project needs will take control from here.

The error handler lives inside the Async function’s catch block. If the web app fails to fetch information from the Weather API site, a callback function to handle the error will run to do the damage control.

The app contains a search bar for users to search for cities. Which will then be saved to localStorage.

If user enters the site for the first time, the weather app displays Dublin’s weather forecast by default.

When a city is found, three-days forecast will be displayed with the following information:

- Weather Condition
- Maximum Temperature 
- Minimum Temperature 
- Precipitation 
- Sunrise
- Sunset
- UV Index

Background colour of each day changes to reflect the weather condition, for example it displays yellow background on a sunny day.

If no city is found, the page displays an error page with a “City Not Found” message.


## Special Thanks
The Odin Project for providing such an amazing free course

Weather API

Sekolan from The Odin Project Discord for helping me solved api link not working