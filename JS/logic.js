// var apiKey = API_KEY;

var url = "./Resources/city_join.json"
// var proxy_url = "https://cors-anywhere.herokuapp.com/";
// var heroku_url = "https://duong-homies.herokuapp.com/";
// var url = proxy_url + heroku_url

// Fetch the JSON data and console log it
d3.json(url).then((jsonData) => {
  console.log(jsonData)

  var city = jsonData.map(row => row.city)
  var city_sorted = city.sort();
  console.log(city_sorted)

  d3.select("#selDataset")
    .selectAll("option")
    .data(city)
    .enter().append("option")
    .classed("cities", true)
    .text(function(i){return i;})
    .exit().remove()

})

// var gapi_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + {city} + "," + {state} + "&key=" + {g_key}
// console.log(gapi_url)



// d3.json(url, function(data) {
//   L.geoJson(data).addTo(myMap)
// })

// var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "light-v10",
//   accessToken: API_KEY
// });

// lightmap.addTo(myMap)
// d3.json(url).then((jsonData) => {
//   // var dropdownMenu = d3.select("#selDataset")
//   // var dataset = dropdownMenu.property("value")
//   // d3.event.preventDefault();

// d3.selectAll("#selDataset").on("change", optionChanged);

// function optionChanged() {
//   d3.json(url).then((jsonData) => {
//     var dropdownMenu = d3.select("#selDataset")
//     var dataset = dropdownMenu.property("value")

//   })
// }