function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}


const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

let date = new Date();
let year = date.getFullYear();
let day = date.getDay();

document.querySelector('#copyright').innerHTML = '&copy;' + year ;

let currentdate = document.lastModified;

document.querySelector('#year').textContent = `Last Updated: ${currentdate}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// Number of Drinks Ordered

// drinkCount();
let drinkcount = 0
function drinkCount() {
    console.log(localStorage.getItem('drinkcount'))
  if (localStorage.getItem('drinkcount')) {
    drinkcount = Number(localStorage.getItem('drinkcount'))+1;
    localStorage.setItem('drinkcount', drinkcount);
  } else {
    localStorage.setItem('drinkcount', 1);
  }
  console.log(localStorage.getItem('drinkcount'));
}
document.querySelector("#drinkCount").addEventListener("click", drinkCount)

// Fruit options
const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'X';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });


      // Order message
const feedbackElement = document.getElementById("fresh_content");
const formElement = document.forms[0];
// add a 'listener' to wait for a submission of our form. When that happens run the code below.
formElement.addEventListener("submit", function (e) {
  // stop the form from doing the default action.
  e.preventDefault();
  feedbackElement.innerHTML =
    "Hello " +
    formElement.firstname.value +
    "! You ordered: ";
  feedbackElement.style.display = "block";
  // document.body.classList.toggle("moveDown");
});

function getLastModified() {
  let modified = document.querySelector('#modified');
  modified.textContent = document.lastModified;
}


getLastModified();


