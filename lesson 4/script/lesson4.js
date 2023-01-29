// FOR GET YEAR
function getyear() {
    let myDate = new Date();

    document.getElementById('currentyear').textContent = myDate.getFullYear();
    document.getElementById('lastmodified').textContent = document.lastModified;
}


// FOR MENU TOGGLE
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;