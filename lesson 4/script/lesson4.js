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


if (day == 4 || day == 5){
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