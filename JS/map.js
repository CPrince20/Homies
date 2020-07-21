var url = "./Resources/city_join.json"

var myMap = L.map("map-id", {
    center: [39.833333, -98.583333],
    zoom: 4
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

d3.json(url).then((jsonData) => {
    var city = jsonData.map(row => row.city)
    var lat = jsonData.map(row => row.lat)
    var long = jsonData.map(row => row.long)
    var state = jsonData.map(row => row.state)
    var crime = jsonData.map(row => row.crime_index)
    console.log(lat)
    console.log(long)

    for (var d=0; d<city.length; d++) {
        L.marker([lat[d], long[d]], {
            fillOpacity: 0.75,
            color: "blue"
        }).bindPopup(city[d] + ", " + state[d] + "<hr>" + "Crime Index: " + crime[d]).addTo(myMap)
    }
});

// var data = []

// d3.json(url, function(response){
//     console.log(response[0])
//     // Create a new marker cluster group
//     var markers = L.markerClusterGroup()
//     // Loop through data
//     for (var i=0; i<response.length; i++) {
//       // Set the data location property to a variable
//       var location = response[i].location
//       // Check for location property
//       if(location) {
//         // Add a new marker to the cluster group and bind a pop-up
//         markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]]))
        
//     // Add our marker cluster layer to the map
//         .addTo(myMap);
//       }
//     }
// })