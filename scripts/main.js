
let date = new Date();
let year = date.getFullYear();

document.querySelector('h4').innerHTML = '&copy;' + year;

let currentdate = document.lastModified

document.querySelector('div').textContent = 'Last Updated: ' + currentdate;

function lastUpdated() {
    let a = document.lastModified;
    document.getElementById("lastModified").innerHTML = a;
}

