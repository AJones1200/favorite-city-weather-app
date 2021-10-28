// link js to html

// get access to button 

// get access to input field

// create function to fetch api data when button is clicked

// 
var inputField = document.querySelector("#city")
var button = document.querySelector("#get-weather")
// var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

function fetchData(){
    var cityName = inputField.value
    var apiKey = "2eee9c3f6b64ba32b5110b438933027a"
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    // console.log(requestUrl)

    fetch(requestUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(weatherData){
            console.log(weatherData)
            console.log(weatherData.main.temp)
            var KtempMin = weatherData.main.temp_min
            var FtempMin = (KtempMin-273.15)*9/5 + 32
            console.log(typeof FtempMin)
            var KtempMax = weatherData.main.temp_max
            var FtempMax = (KtempMax-273.15)*9/5 + 32
            console.log(FtempMax)

            var maxTempTitle = document.createElement('h2');
            var minTempTitle = document.createElement('h2');
            var baromTitle = document.createElement('h2');
            var descrTitle = document.createElement('h2');

            maxTempTitle.textContent = "Max Temperature"
            minTempTitle.textContent = "Min Temperature"
            baromTitle.textContent = "Barometric Pressure"
            descrTitle.textContent = "Description"
            
            var maxTemp = document.createElement("p");
            var minTemp = document.createElement("p");
            var barPress = document.createElement("p");
            var descr = document.createElement("p");

            maxTemp.textContent = (KtempMax-273.15)*9/5 + 32
            minTemp.textContent = (KtempMin-273.15)*9/5 + 32
            barPress.textContent = weatherData.main.pressure
            descr.textContent = weatherData.weather[0].description

            document.body.append(maxTempTitle);
            document.body.append(minTempTitle);
            document.body.append(baromTitle);
            document.body.append(descrTitle);

            maxTempTitle.append(maxTemp);
            minTempTitle.append(minTemp);
            baromTitle.append(barPress);
            descrTitle.append(descr);


           

        })
}

button.addEventListener("click", fetchData)