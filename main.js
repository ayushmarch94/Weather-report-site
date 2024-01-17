const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6db9daa17msh107d70f18efdec5p1734b4jsn399a3df2ecf1',   // API key
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
        let Pct =document.getElementById('Pct');
        let Feel =document.getElementById('Feel');
        let Humid =document.getElementById('Humid');
        let Temp =document.getElementById('Temp');
        let Max =document.getElementById('Max');
        let Min =document.getElementById('Min');
        let WindSpeed =document.getElementById('WindSpeed');
        let WindDegree =document.getElementById('WindDegree');
        let SunRise =document.getElementById('SunRise');
        let SunSet =document.getElementById('SunSet');

        //Displayed data
        Pct.innerHTML=`Cloud precipitation : ${data.cloud_pct}`;
        Feel.innerHTML=`Feels like : ${data.feels_like}°C`;
        Humid.innerHTML=`Humidity : ${data.humidity}%`;
        Temp.innerHTML=` ${data.temp}°C`;
        Max.innerHTML=`Maximum Temperature : ${data.max_temp}°C`;
        Min.innerHTML=`Minimum Temperature : ${data.min_temp}°C`;
        WindSpeed.innerHTML=`Wind Speed : ${data.wind_speed}Km/h`;
        WindDegree.innerHTML=`Wind Degree : ${data.wind_degrees}`;
        SunRise.innerHTML=`Sunrise time : ${data.sunrise}`;
        SunSet.innerHTML=`Sunset time : ${data.sunset}`;


    } catch (error) {
        console.error(error);
    }
}

let button=document.getElementById('button1');
let inputCity=document.getElementById('search')
button.addEventListener('click', async ()=>{
    var city=inputCity.value.trim();        // city name from input field
    console.log(city);
    var obj=fetchData(city);    // we fetch data from api for specific city
    getData(obj);               // HTML content manipulation
})





