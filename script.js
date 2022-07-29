let weather = {
    "apiKey" : "57c25ab6bcd9f54db52db04dee1f2aab",
    fetchWaether : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&appid=" 
        + this.apiKey
        )
        .then( (response) => response.json())
        .then( (data) => this.displayWeather(data))
    },
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".temp").innerHTML = `${temp}°C`;
        document.querySelector(".description").innerText = `${description}`;
        document.querySelector(".humidity").innerText = `Humidity : ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind Speed : ${speed} Km/h`;

        //after load detail of weather city display them
        document.querySelector(".weather").classList.remove("loading");
    },
    search : function(){
        const inputValue = document.querySelector(".search-bar").value;
        this.fetchWaether(inputValue);
    }
}

// Work Search Button for weather of cities
let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function(){
    weather.search();
})

// Work Enter Key on Keyboard as Search Button
let searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

// initial Weather as default value on load the page
weather.fetchWaether("Tehran");