let temperatur = document.querySelector(".temperature");
let lcntn = document.querySelector(".location");
let cndn = document.querySelector(".condition");
let btn = document.querySelector(".search_btn");
let date_time = document.querySelector(".date_time");
let img = document.querySelector("img");
let form = document.querySelector("form");

let Location = 'Hyderabad';



form.addEventListener('click',searchforlocation);

// https://api.weatherapi.com/v1/current.json?key=f9fdf6925871479fa11174511260202&q=London&aqi=no
// http://api.weatherapi.com/v1/current.json?key=f9fdf6925871479fa11174511260202&q=${Location}&aqi=no

const fetchdata = async(Location) =>{
    let url = `https://api.weatherapi.com/v1/current.json?key=f9fdf6925871479fa11174511260202&q=${Location}&aqi=no`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    lcntn.innerText = data.location.name;
    date_time.innerText = data.location.localtime;
    temperatur.innerText = data.current.temp_c + " °C";
    cndn.innerText = data.current.condition.text;
    img.src = data.current.condition.icon;

 
}

function searchforlocation(e){
    e.preventDefault();
    let TargetLocation = document.querySelector(".search_box").value;
    fetchdata(TargetLocation);
}



fetchdata(Location);
