const API_KEY = `34170a54f60e4ee32edef4cfaa9060aa`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = temperature => {
    // console.log(temperature);
    document.getElementById('headerL').innerText = temperature.name;
    document.getElementById('headerM').innerText = temperature.main.temp;
    document.getElementById('weather').innerText = temperature.weather[0].main;
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    document.getElementById('img').setAttribute('src', url);

}