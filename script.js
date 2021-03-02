let cityName = $(".cityName");
let MainTemp = $(".MainTemp");
let WeatherMain = $(".WeatherMain");
let WeatherDescription = $(".WeatherDescription");
let MainHumidity = $(".MainHumidity");
let WindSpeeed = $(".WindSpeed");
let forecast = $(".forecast");
let key = "63d898fccb40c6189c8cd5093662abf9";

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

  let dayOneCard = $(".dayOneCard");
  let dayTwoCard = $(".dayTwoCard");
  let dayThreeCard = $(".dayThreeCard");
  let dayFourCard = $(".dayFourCard");
  let dayFiveCard = $(".dayFiveCard");

  $("#searchCity").onClick(function () {
    let city = $("#yourCity").val();

    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=imperial" +
        "&APPID=" +
        key,
      method: "GET",
    }).then(function (response) {
      console.log(response);

      let iconCodeOne = response.list[0].weather[0].icon;
      let iconCodeTwo = response.list[8].weather[0].icon;
      let iconCodeThree = response.list[16].weather[0].icon;
      let iconCodeFour = response.list[24].weather[0].icon;
      let iconCodeFive = response.list[32].weather[0].icon;

      $(".iconCodeOne").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconCodeOne +
          ".png' alt='Icon depicting current weather.'>"
      );
      $(".iconCodeTwo").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconCodeTwo +
          ".png' alt='Icon depicting current weather.'>"
      );
      $(".iconCodeThree").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconCodeThree +
          ".png' alt='Icon depicting current weather.'>"
      );
      $(".iconCodeFour").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconCodeFour +
          ".png' alt='Icon depicting current weather.'>"
      );
      $(".iconCodeFive").html(
        "<img src='http://openweathermap.org/img/w/" +
          iconCodeFive +
          ".png' alt='Icon depicting current weather.'>"
      );

      dayOneCard.text(
        "Date: " +
          response.list[0].dt_txt +
          " " +
          "Condition: " +
          response.list[0].weather[0].main
      );
      dayTwoCard.text(
        "Date: " +
          response.list[8].dt_txt +
          " " +
          "Condition: " +
          response.list[8].weather[0].main
      );
      dayThreeCard.text(
        "Date: " +
          response.list[16].dt_txt +
          " " +
          "Condition: " +
          response.list[16].weather[0].main
      );
      dayFourCard.text(
        "Date: " +
          response.list[24].dt_txt +
          " " +
          "Condition: " +
          response.list[24].weather[0].main
      );
      dayFiveCard.text(
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
          "&APPID=0e182e88128e4b132fbd898043dbf07e",
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
