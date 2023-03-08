const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Augusta%20Georgia?unitGroup=us&key=Z8ZX6JBPMWA5KK83T2AHVFWE6&contentType=json";
const getweather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = t;
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    document.querySelector('#condition').textContent = data.currentConditions.conditions;
    document.querySelector('#weatherimg').src = image;
    document.querySelector('#weatherimg').alt = data.currentConditions.conditions + ' icon';


    const temp = document.querySelector('#t').textContent;
    const ws = document.querySelector('#ws').textContent;

    let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * temp * Math.pow(ws, 0.16)));
    console.log(chill);


    let windchill = document.querySelector('#wc');
    if (temp <= 50 && ws >= 3) {

        windchill.textContent = chill;
    };


};
getweather();





