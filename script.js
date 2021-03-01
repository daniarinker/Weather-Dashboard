const button = document.querySelector("#button");
const cityValue = document.querySelector(".cityValue");
const city = document.querySelector(".city");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const uvindex = document.querySelector(".uvindex");

// //user types in city city variable

//search button below with event listener for grabbing city
button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityValue.value +
      "&units=imperial&appid=668cd875e55a27681d21ea983911b3b3"
  )
    //putting response into json response with name, main temp, weather, description, humidity and wind
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var cityValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descriptionValue = data["weather"][0]["description"];
      var humidityValue = data["main"]["humidity"];
      var windValue = data["wind"].speed;

      city.innerHTML = cityValue;
      description.innerHTML = descriptionValue;
      temp.innerHTML = tempValue + "°F";
      humidity.innerHTML = humidityValue + "% Humidity";
      wind.innerHTML = windValue + " mph";
    });
});

// let searchCity = "";
// console.log("message");
// //results bring back city
// //api call of city

// //stick function below into greater function of preloaded results//
// $(document).ready(function () {
//   // searchEvent();

//   //calls city result
//   //brings data back
//   $("#searchButton").click(function (e) {
//     e.preventDefault();
//     searchCity = $("searchForm").val();
//     console.log(searchCity);
//   });
// });

// //make a function that creates a function that lets the API call join and use the result from the search
// function gettingCity() {
//   let getCityLink = "api.openweathermap.org/data/2.5/weather?";
//   let cityParams = {
//     q: searchCity,
//     appid: "fe3927b3cbd4b44ed5e9051cb4eb4b8a",
//   };
// }
