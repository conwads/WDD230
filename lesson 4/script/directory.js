const url = "https://adelynsmith.github.io/wdd230/chamber/data.json"

async function getBusinessData() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.table(data.business); // note that we
    // reference the prophet array of the data
    // object given the structure of the json file
    displayBusinesses(data.businesses);
    displayTable(data.businesses);
  }
  
  getBusinessData();
  
  const displayBusinesses = (businesses) => {
    const cards = document.querySelector("div.cards"); // select the output container element
  
    businesses.forEach(
      (business) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let logo = document.createElement("img");
  
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${business.name} `;
        p.textContent = `${business.address} ${business.phone} ${business.membership}`
  
        // Build the image portrait by setting all the relevant attribute
        logo.setAttribute("src", business.image);
        logo.setAttribute(
          "alt",
          `Logo of ${business.name}`
        );
  
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(p);
  
        cards.appendChild(card);
      } // end of forEach loop
    );
  }; // end of function expression
  
  function displayTable(businesses) {
    // let row = document.querySelectorAll("row");
    // row.forEach((item) => {
    //   item.remove();
    // });
  
    // let section = document.querySelectorAll("section");
    // section.forEach((item) => {
    //   item.remove();
    // });
  
    businesses.forEach((business) => {
      let tr = document.createElement("tr");
      let td_name = document.createElement("td");
      let td_address = document.createElement("td");
      let td_phone = document.createElement("td");
      let td_website = document.createElement("td");
      let td_membership = document.createElement("td");
  
      td_name.textContent = `${business.name}`;
      td_address.textContent = business.address;
      td_phone.textContent = business.phone;
      td_website.textContent = business.website;
      td_membership.textContent = business.membership;

  
      tr.appendChild(td_name);
      tr.appendChild(td_address);
      tr.appendChild(td_website);
      tr.appendChild(td_phone);
      tr.appendChild(td_membership);
  
      document.querySelector("table").appendChild(tr);
    });
  }

  table_class = document.querySelector(".table")
  card_class = document.querySelector(".cards")
  table_button = document.querySelector("#list")
  card_button = document.querySelector("#cards")
  
  card_button.addEventListener('click', () => {
    card_class.style.display = "flex";
    table_class.style.display = "none";
  });
  
  table_button.addEventListener('click', () => {
    card_class.style.display = "none";
    table_class.style.display = "block";
    console.log
  });

