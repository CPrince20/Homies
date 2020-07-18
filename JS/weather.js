
var url = ''

const fetchWeather = () => {
    axios.get(url)
        .then(function (response){
            //const cityWeather = response;
            console.log(response.data.main.temp);
        })
        .catch(error => console.log(error));
};

d3.select("#selDataset").on("change", function(d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).node().value

    url = 'http://api.openweathermap.org/data/2.5/weather?q=' + selectedOption + ',US&units=imperial&appid=' + weather_key;
    
    fetchWeather();
    
});





