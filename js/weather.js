const API_KEY = ""

function onGeoOK(position) {
    const lat = position.coords.latitude;   //위도
    const lng = position.coords.longitude;  //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:last-child");
            const weather = document.querySelector("#weather span:first-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
