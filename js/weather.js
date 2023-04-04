const API_KEY = "";

function onGeoOK(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weatherContainer = document.querySelector("#weather span:first-child");
    const cityContainer = document.querySelector("#weather span:last-child");

    const name = data.name;
    const weather = data.weather[0].main;

    weatherContainer.innerText = weather + ` / ${data.main.temp}`;
    cityContainer.innerText = name;
    });

}

function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);