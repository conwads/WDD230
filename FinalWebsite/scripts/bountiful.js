const lastModDate = new Date(document.lastModified);
const formattedDate = `${lastModDate.getMonth() + 1}/${lastModDate.getDate()}/${lastModDate.getFullYear()}`;
const formattedTime = `${lastModDate.getHours()}:${lastModDate.getMinutes().toString().padStart(2, '0')}:${lastModDate.getSeconds().toString().padStart(2, '0')}`;

document.getElementById("lastModified").textContent = `${formattedDate} ${formattedTime}`;

// last updated
let date = new Date();
let year = date.getFullYear();
let day = date.getDay();

document.querySelector('#copyright').innerHTML = '&copy;' + year + "Last Modified";

let currentdate = document.lastModified;

document.querySelector('#year').textContent = `Last Updated: ${currentdate}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

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

function getLastModified() {
  let modified = document.querySelector('#modified');
  modified.textContent = document.lastModified;
}


getLastModified();



