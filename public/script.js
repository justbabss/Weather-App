let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


//Function to fetch the weather details from api and display them

let getWeather = () => {
    let cityValue = cityRef.value;

    //if input field is empty
    if(cityValue.length == 0) {
        result.innerHTML = `<h3 class="msg"> Please enter a city name</h3>`;
    }

    //if input field is not empty
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=157ed8a12ce4fa5b3cd0bfaa69dda132&units=metric`;
        cityRef.value = "";
        fetch(url)
        .then((resp) => resp.json())

        //if city name is valid
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;</h1>
            <div class="temp-container">
            <div>
                <h4 class="title">Min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">Max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
            `;
        }) 
        .catch(() => {
            result.innerHTML = `<h3 class="msg">City not found</h3>`;
        });
    }
    
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);

