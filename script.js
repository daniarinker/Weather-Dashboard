let cityName = $(".cityName");
let MainTemp = $(".MainTemp");
let WeatherMain = $(".WeatherMain");
let WeatherDescription = $(".WeatherDescription");
let MainHumidity = $(".MainHumidity");
let WindSpeeed = $(".WindSpeed");
let forecast = $(".forecast");
let API_KEY = "0e182e88128e4b132fbd898043dbf07e";

$(document).onLoad(function () {
  $("#searchCity").onClick(function () {
    let city = $("#yourCity").val();

    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial" +
        "&APPID=" +
        API_KEY,
      method: "GET",
    }).then(function (response) {
      console.log(response);

      cityName.text("Current Weather In: " + response.name);
      MainTemp.text(response.main.temp + "F");
      WeatherMain.text("Condition: " + response.weather[0].main);
      WeatherDescription.text(
        "Description: " + response.weather[0].description
      );
      MainHumidity.text("Humidity: " + response.main.humidity + "%");
      WindSpeeed.text("Wind Speed: " + response.wind.speed + " m/hr");

      let iconcode = response.weather[0].icon;

      $(".listWeatherIcon").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconcode +
          ".png' alt='Icon depicting current weather.'>"
      );
    });

    setSearchHistory = localStorage.setItem("savedCity", city);
    function setSearchHistory() {
      localStorage.setItem("savedCity", city);
    }

    setSearchHistory = localStorage.getItem("savedCity", city);
    console.log(city);
    console.log(setSearchHistory);
  });

  let oneCard = $(".oneCard");
  let twoCard = $(".twoCard");
  let threeCard = $(".threeCard");
  let fourCard = $(".fourCard");
  let fiveCard = $(".fiveCard");

  $("#searchCity").onClick(function () {
    let city = $("#yourCity").val();

    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=imperial" +
        "&APPID=" +
        API_KEY,
      method: "GET",
    }).then(function (response) {
      console.log(response);

      let iconOne = response.list[0].weather[0].icon;
      let iconTwo = response.list[8].weather[0].icon;
      let iconThree = response.list[16].weather[0].icon;
      let iconFour = response.list[24].weather[0].icon;
      let iconFive = response.list[32].weather[0].icon;

      $(".iconOne").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconOne +
          ".png' alt='Icon depicting current weather.'>"
      );
      $(".iconTwo").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconTwo +
          ".png' alt='Icon depicting current weather.'>"
      );
      $(".iconThree").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconThree +
          ".png' alt='Icon depicting current weather.'>"
      );
      $(".iconFour").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconFour +
          ".png' alt='Icon depicting current weather.'>"
      );
      $(".iconFive").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconFive +
          ".png' alt='Icon depicting current weather.'>"
      );

      oneCard.text(
        "Date: " +
          response.list[0].dt_txt +
          " " +
          "Condition: " +
          response.list[0].weather[0].main
      );
      twoCard.text(
        "Date: " +
          response.list[8].dt_txt +
          " " +
          "Condition: " +
          response.list[8].weather[0].main
      );
      threeCard.text(
        "Date: " +
          response.list[16].dt_txt +
          " " +
          "Condition: " +
          response.list[16].weather[0].main
      );
      fourCard.text(
        "Date: " +
          response.list[24].dt_txt +
          " " +
          "Condition: " +
          response.list[24].weather[0].main
      );
      fiveCard.text(
        "Date: " +
          response.list[32].dt_txt +
          " " +
          "Condition: " +
          response.list[32].weather[0].main
      );

      let latUv = response.city.coord.lat;
      let lonUv = response.city.coord.lon;
      let uvIndex = $(".uvIndex");

      console.log(lonUv);
      console.log(latUv);

      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" +
          latUv +
          "&lon=" +
          lonUv +
          "&APPID=" +
          API_KEY,
        method: "GET",
      }).then(function (response) {
        console.log(response[0].value);
        uvIndex.text("UV Index: " + response[0].value);
      });

      function setSearchHistory() {
        localStorage.setItem("savedCity", city);
      }
      setSearchHistory = localStorage.getItem("savedCity", city);
      console.log(city);
      console.log(setSearchHistory);
    });
  });
});
