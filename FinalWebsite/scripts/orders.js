// drinkCount();
function drinkCount() {
    console.log(JSON.parse(localStorage.getItem('orders')));
    let counter = 0;
    if (localStorage.getItem('orders')) {
      let orders = JSON.parse(localStorage.getItem('orders')); 
      orders.forEach(element => {
        counter += 1; 
        console.log(counter);
      });
    } 
    document.querySelector("#test").textContent = counter;
  }
  
  drinkCount();
  

  