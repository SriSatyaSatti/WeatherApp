let weather = {
    apiKey: "2f5d771b0fbcc13cfdf428d0c03f2b39",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
  
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900?" + description + "')";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-box").value);
    }

};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document.querySelector(".search-box").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
weather.fetchWeather('Visakhapatnam');
