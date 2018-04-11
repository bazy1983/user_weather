module.exports = function (user, name, city){
    this.name = name;
    this.city = city;
    this.isAdmin = false;
    this.checkAdmin = function (user){
        if (user = "Admin"){
            this.isAdmin = true;
        }
    }
}