var fs = require("fs");


var tempArr = ["Rohan", "Housotn", "4/10/18"];


fs.appendFile('./log.txt', tempArr + "\n", function (err) {
  if (err) throw err;
  console.log('Saved!');
});


fs.readFile('./log.txt', "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

var inquirer = require("inquirer");
var request = require("request");
var weather = require('weather-js');

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


function dbstuff() {
  var user
}

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
    city = answer.city;
    var search = {
      search: city,
      degreeType: 'F'
    }
    weather.find(search, function (err, result) {
      if (err) console.log(err);
      console.log(JSON.stringify(result, null, 2));
    });
  });

}
