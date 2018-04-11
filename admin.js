var UserC = require('./user.js')

module.exports = function() {
    this.newUserSearch = function (user, location) {

        var  userSearch = new UserC(user, location);
        userSearch.weatherSearch();

        var logArray = [userSearch.name, userSearch.location, userSearch.date];
        fs.appendFile('./log.txt', logArray,  function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

    }

    this.getData = function () {


        fs.readFile('./log.txt', "utf-8", function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    }
}