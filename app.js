var inquirer = require("inquirer");
var request = require("request");
var weather = require('weather-js');

inquirer.prompt([
  {
    name: "user",
    type: "input",
    message: "Enter your name!",
  },
  {
    name: "name",
    type: "input",
    message: "Enter your gender!"
  },
  {
    name: "city",
    type: "input",
    message: "Enter your strength!"
  }
]).then(function (answer) {
console.log(answer);
});




function searcher() {

var search = {
  search: 'San Francisco, CA',
  degreeType: 'F'
}
  weather.find(search, function (err, result) {
    if (err) console.log(err);
    console.log(JSON.stringify(result, null, 2));
  });
}