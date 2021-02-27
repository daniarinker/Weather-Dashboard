//user types in city city variable
let searchCity = "";
console.log("message");
//results bring back city
//api call of city

//stick function below into greater function of preloaded results//
$(document).ready(function () {
  // searchEvent();

  $("#searchButton").click(function (e) {
    e.preventDefault();
    searchCity = $("searchForm").val();
    console.log(searchCity);
  });
});
//calls city result
//brings data back

//make a function that creates a function that lets the API call join and use the result from the search
function gettingCity() {
  let getCityLink = "api.openweathermap.org/data/2.5/weather?";
  let cityParams = {
    q: searchCity,
    appid: "fe3927b3cbd4b44ed5e9051cb4eb4b8a",
  };
}
