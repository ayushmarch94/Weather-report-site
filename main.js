const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6db9daa17msh107d70f18efdec5p1734b4jsn399a3df2ecf1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchData(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}


async function getData(obj) {
    try {
        // Fetch data
        const data = await obj

        // Access weather details
        let pct = data.cloud_pct;
        let feels = data.feels_like;
        let humidity = data.humidity;
        let temp = data.temp;
        let min_temp = data.min_temp;
        let max_temp = data.max_temp;
        let wind_speed = data.wind_speed;
        let wind_degrees = data.wind_degrees;
        let sunrise = data.sunrise;
        let sunset = data.sunset;

        //Access html content
        let changePct =document.getElementById('changePct');
        let changeFeel =document.getElementById('changeFeel');
        let changeHumid =document.getElementById('changeHumid');
        let changeTemp =document.getElementById('changeTemp');
        let changeMax =document.getElementById('changeMax');
        let changeMin =document.getElementById('changeMin');
        let changeWindSpeed =document.getElementById('changeWindSpeed');
        let changeWindDegree =document.getElementById('changeWindDegree');
        let changeSunRise =document.getElementById('changeSunRise');
        let changeSunSet =document.getElementById('changeSunSet');

        //Displayed data
        changePct.innerHTML=`Cloud percipitation : ${pct}`;
        changeFeel.innerHTML=`Feeld like : ${feels} degree celcius`;
        changeHumid.innerHTML=`Humidity : ${humidity}`;
        changeTemp.innerHTML=`Temprature : ${temp} degree celcius`;
        changeMax.innerHTML=`Maximum Temprature : ${max_temp} degree celcius`;
        changeMin.innerHTML=`Minimum Temprature : ${min_temp} degree celcius`;
        changeWindSpeed.innerHTML=`Wind Speed : ${wind_speed}`;
        changeWindDegree.innerHTML=`Wind Degree : ${wind_degrees}`;
        changeSunRise.innerHTML=`Sunrise time : ${sunrise}`;
        changeSunSet.innerHTML=`Sunset time : ${sunset}`;


    } catch (error) {
        console.error(error);
    }
}

let button=document.getElementById('button1');
let inputCity=document.getElementById('search')
button.addEventListener('click', async ()=>{
    var city=inputCity.value.trim();
    var obj=fetchData(city);
    getData(obj);
})





