const btn = document.getElementById("button1");
const searchInput = document.getElementById("search");
const apiKey = "3749334cbea6c45376f910df4e0371b9";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

btn.addEventListener("click", () => {
    const cityName = searchInput.value.trim();


    fetch(url + cityName + `&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);  
            document.getElementById("Feel").innerHTML = "Feel like : " + data.main.feels_like +" deg";
            document.getElementById("Humid").innerHTML ="Humidity : " + data.main.humidity + " %";
            document.getElementById("Temp").innerHTML ="Current Temperature " + data.main.temp + " deg";
            document.getElementById("Max").innerHTML ="Maximum Temperature : "+ data.main.temp_max + " deg";
            document.getElementById("Min").innerHTML ="Minimum Temperature : " + data.main.temp_min + " deg";
            document.getElementById("WindSpeed").innerHTML ="Wind Speed : " + data.wind.speed + " km/h";
            document.getElementById("WindDegree").innerHTML ="Wind Degree : " + data.wind.deg + " deg";
            document.getElementById("SunRise").innerHTML ="Sunrise time : " + data.sys.sunrise.toString().substring(0, 2) + " Hr";
            document.getElementById("SunSet").innerHTML ="Sunset time : " + data.sys.sunset.toString().substring(0, 2) + " Hr";
            console.log(data);
        })
        .catch(() => {
            console.log("Data not found or API request failed.");
        });
});


