function UserSearch(){
    this.name = name;
    this.location= location;
    this.date = Date.now();
    this.weatherSearch = function(){
        

            var search = {
              search: 'San Francisco, CA',
              degreeType: 'F'
            }
              weather.find(search, function (err, result) {
                if (err) console.log(err);
                console.log(JSON.stringify(result, null, 2));
              });
            }
            
}