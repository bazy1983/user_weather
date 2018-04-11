var fs = require("fs");
var inquirer = require("inquirer");
var request = require("request");
var weather = require('weather-js');
var UserSearch = require("./user.js");
var WeatherAdmin = require("./admin.js")



var city;


inquirer.prompt([
  {
    name: "user",
    type: "list",
    message: "Enter your name!",
    choices: [
      "admin",
      "user"
    ]
  }
]).then(function (answer) {
  if (answer.user === "user") {
    searcher();
  } else {
    // readfile
  }
});


function searcher() {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter your UserName"
    },
    {
      name: "city",
      type: "input",
      message: "Enter your city to search."
    }
  ]).then(function (answer) {

    var wAdmin = new WeatherAdmin();
    wAdmin.newUserSearch(answer.name, answer.city);
      
  });

}
