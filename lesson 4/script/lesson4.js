function toggleMenu() {console.log("inside");
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

let date = new Date();
let year = date.getFullYear();
let day = date.getDay();

document.querySelector('#copyright').innerHTML = '&copy;' + year + "| Augusta Georgia Travel Chamber of Commerce";

let currentdate = document.lastModified;

document.querySelector('#year').textContent = `Last Updated: ${currentdate}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


if (day == 1 || day == 2){
    document.querySelector('#banner').innerHTML = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}





/* storage and local session */

localStorage.setItem('name', 'conner wadsworth - Permanent');
sessionStorage.setItem('class', 'WDD230- not Permanent');

// if(!localStorage.getItem('lastvisit')) {
//     localStorage.getItem('lastvisit', Date.now())

// } else {
//     let currentdate = Date.now(),
//     let lastdate = 
// }


// const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Augusta%20Georgia?unitGroup=us&key=Z8ZX6JBPMWA5KK83T2AHVFWE6&contentType=json";
// const getWeather = async () => {
//     const response = await fetch(apiURL);
//     const jsObject = await response.json();
//     console.log(jsObject);
  
//     document.querySelector('#tempNumbers').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);
//     document.querySelector('#ws').textContent = jsObject.wind.speed;
//     document.querySelector('#weatherCondition').textContent = jsObject.weather[0].description;

//     const iconsrc= `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@2x.png`;
  
//     document.querySelector('#weatherPic').textContent = iconsrc;
//     document.querySelector('#weatherPic').setAttribute('src', iconsrc)
//     document.querySelector('#weatherPic').setAttribute('alt', sunny);
//   };
// getWeather();
