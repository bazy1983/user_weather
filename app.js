var fs = require("fs");


var tempArr= ["Rohan", "Housotn", "4/10/18"];


fs.appendFile('./log.txt', tempArr+"\n", function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


  fs.readFile('./log.txt', "utf-8", function(err, data){
    if (err) throw err;
    console.log(data);
  });
  