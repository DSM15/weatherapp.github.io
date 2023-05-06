const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '36117ee4c7mshb3e30a894f2d3bep16a198jsn1f2e52212eb8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
cityName.innerHTML = city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
            temp.innerHTML = response.temp
            feels_like.innerHTML =  response.feels_like
            humidity.innerHTML = "" + "" + response.humidity
            humidity1.innerHTML = "" + "" + response.humidity
            humidity2.innerHTML =  response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            console.log(response)
    })
    .catch(err => console.error(err));
}
submit.addEventListener('click',(e)=>{
e.preventDefault();
getWeather(city.value)
});
getWeather("Udaipur");
var btn = document.getElementById('btn-link');
btn.addEventListener("click", function (){
 window.location.href = "https://creativestudio.infinityfreeapp.com/";
})

