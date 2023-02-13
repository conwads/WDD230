const temp = document.querySelector('.t').textContent;
const ws = document.querySelector('.ws').textContent;

let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(ws,0.16)) + (0.4275*temp*Math.pow(ws,0.16)));
console.log(chill);


let windchill = document.querySelector('.wc');
if (temp <= 50 && ws >= 3) {
    
    windchill.textContent = chill;
}


