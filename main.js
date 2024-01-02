const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6db9daa17msh107d70f18efdec5p1734b4jsn399a3df2ecf1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'     //API end point
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
        changePct.innerHTML=`Cloud percipitation : ${data.cloud_pct}`;
        changeFeel.innerHTML=`Feeld like : ${data.feels_like}°C`;
        changeHumid.innerHTML=`Humidity : ${data.humidity}`;
        changeTemp.innerHTML=`Temprature : ${data.temp}°C`;
        changeMax.innerHTML=`Maximum Temprature : ${data.max_temp}°C`;
        changeMin.innerHTML=`Minimum Temprature : ${data.min_temp}°C`;
        changeWindSpeed.innerHTML=`Wind Speed : ${data.wind_speed}`;
        changeWindDegree.innerHTML=`Wind Degree : ${data.wind_degrees}`;
        changeSunRise.innerHTML=`Sunrise time : ${data.sunrise}`;
        changeSunSet.innerHTML=`Sunset time : ${data.sunset}`;


    } catch (error) {
        console.error(error);
    }
}

let button=document.getElementById('button1');
let inputCity=document.getElementById('search')
button.addEventListener('click', async ()=>{
    var city=inputCity.value.trim();        // city name from input field
    var obj=fetchData(city);    // we fetch data from api for specific city
    getData(obj);               // HTML content manipulation
})





