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
        })
}

button.addEventListener("click", fetchData)