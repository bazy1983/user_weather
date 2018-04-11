
module.exports = function() {
    this.newUserSearch = function (user, location) {


        fs.appendFile('./log.txt', tempArr + "\n", function (err) {
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