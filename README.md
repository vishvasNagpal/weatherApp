# The 5-day weather forecast.

This app fetches data from https://openweathermap.org/forecast5 5day/3hr api for Delhi, India.
The data is printed in day/slot format for each day which has upto 8 slots of 3hrs each.
This app uses create-react-app boilerplate. See https://github.com/facebook/create-react-app
## For devs

### Pre-requisites:
* Node JS stable -- see .nvmrc
* Install all dependencies `npm install`

### Running the App
`npm start` and see http://localhost:3000

### Production Build
`npm run build` and serve the 'build' folder

### Testing
`npm run test` to run test cases.
Jest and Enzyme are used for testing see: https://github.com/facebook/jest and http://airbnb.io/enzyme/
