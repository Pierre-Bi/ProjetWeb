

//J'appelle les fonctions setTime() et getWeather() dès le chargement de la page
getWeather();

//obtenir la météo
function getWeather() {
    //Objet AJAX
    let xmlhttp = new XMLHttpRequest();

    // Quand l'objet AJAX est prêt
    xmlhttp.onreadystatechange = function () {
        //Si les données renvoyées sont corrects
        if (this.readyState == 4 && this.status == 200) {
            //responseText = Données retournées par l'API
            let weatherData = JSON.parse(this.responseText)
            if (weatherData) {
                document.getElementById("weather").innerText = weatherData.main.temp + "°C"
            }

        }
    };

    //Envoi de la requête AJAX (call API)
    xmlhttp.open("GET", 'https://api.openweathermap.org/data/2.5/weather?lat=48.5839200&lon=7.7455300&units=metric&APPID=5cb51ce8b8a0b840ba9c6b64206801e1', true);
    xmlhttp.send();
}