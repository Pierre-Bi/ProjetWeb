
$(document).ready(function(){ 
  $.getJSON("http://ip-api.com/json",function(loc){//Je localise la ville via l’IP
    var city = loc.city;
    var lat = loc.lat;
    var lon = loc.lon;
    
    $("#city").html(city);
    
     var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon +'&appid=a2800d6c20560903e41b03882735c588' ; //J’enregistre les données de l’API grâce aux les latitudes et les longueurs.

    $.getJSON(url, function(data){// J'appelle le json de l'API
      var temp = data.main.temp;
      var cTemp = Math.floor(temp - 273);

    
      $("#temp").html("Temperature: "+cTemp+" C");    
       
      
    })
 }) 
});