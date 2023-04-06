const url = "https://andejuli.github.io/wdd230/fruit.json";

async function getFruitData() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    for (i = 0; i < data.length; i++) {
        var sel = document.createElement("option");
        sel.innerHTML = data[i].name;
        sel.value = data[i].name;
        document.getElementById("fruitone").appendChild(sel);
    }

    for (i = 0; i < data.length; i++) {
        var sel = document.createElement("option");
        sel.innerHTML = data[i].name;
        sel.value = data[i].name;
        document.getElementById("fruittwo").appendChild(sel);
    }

    for (i = 0; i < data.length; i++) {
        var sel = document.createElement("option");
        sel.innerHTML = data[i].name;
        sel.value = data[i].name;
        document.getElementById("fruitthree").appendChild(sel);
    }


    // Order message
    const freshElement = document.getElementById("fresh_content");
    const formElement = document.forms[0];
    formElement.addEventListener("submit", function (e) {
        e.preventDefault();
        freshElement.innerHTML =
            "Hi " +
            formElement.firstname.value +
            "! You ordered: a " +
            formElement.message.value + " " +
            formElement.fruitone.value +
            ", " +
            formElement.fruittwo.value +
            ", " +
            formElement.fruitthree.value +
            " Drink ";
        freshElement.style.display = "block";

        let info = {
            firstname: formElement.firstname.value,
            email: formElement.email.value,
            phone: formElement.phone.value,
            fruitone: formElement.fruitone.value,
            fruittwo: formElement.fruittwo.value,
            fruitthree: formElement.fruitthree.value,
    
        };

        console.log(formElement.fruitone.value);
            
        let ordersarray = [];

        if (localStorage.getItem('orders')){
            let orders = JSON.parse(localStorage.getItem('orders'));
            orders.push(info);
            localStorage.setItem('orders', JSON.stringify(orders));
        } else {
            ordersarray.push(info)
            localStorage.setItem('orders', JSON.stringify(ordersarray));
        }


        let nutritions1;
        let nutritions2;
        let nutritions3;
        let calories1;
        let calories2;
        let calories3;
        let carbohydrates1;
        let carbohydrates2;
        let carbohydrates3;
        let fat1;
        let fat2;
        let fat3;
        let protein1;
        let protein2;
        let protein3;
        let sugar1;
        let sugar2;
        let sugar3;
        let date = new Date();


        data.forEach(showFruit);
        function showFruit(item) {
            console.log(item.name);


            if (item.name == formElement.fruitone.value) {
                nutritions1 = item.nutritions;
                calories1 = item.nutritions.calories;
                carbohydrates1 = item.nutritions.carbohydrates;
                fat1 = item.nutritions.fat;
                protein1 = item.nutritions.protein;
                sugar1 = item.nutritions.sugar;
            }

            if (item.name == formElement.fruittwo.value) {
                nutritions2 = item.nutritions;
                calories2 = item.nutritions.calories;
                carbohydrates2 = item.nutritions.carbohydrates;
                fat2 = item.nutritions.fat;
                protein2 = item.nutritions.protein;
                sugar2 = item.nutritions.sugar;
            }

            if (item.name == formElement.fruitthree.value) {
                nutritions3 = item.nutritions;
                calories3 = item.nutritions.calories;
                carbohydrates3 = item.nutritions.carbohydrates;
                fat3 = item.nutritions.fat;
                protein3 = item.nutritions.protein;
                sugar3 = item.nutritions.sugar;
            }



        }
        let cal_calc = Number(calories1) + Number(calories2) + Number(calories3);
        console.log(cal_calc);
        let carb_calc = Number(carbohydrates1) + Number(carbohydrates2) + Number(carbohydrates3);
        let fat_calc = Number(fat1) + Number(fat2) + Number(fat3);
        let protein_calc = Number(protein1) + Number(protein2) + Number(protein3);
        let sugar_calc = Number(sugar1) + Number(sugar2) + Number(sugar3);

        freshElement.append("Calorie sum: " + cal_calc.toFixed(2) + " ") + "<br>";
        freshElement.append("Carb sum: " + carb_calc.toFixed(2) + " \n") + "<br>";
        freshElement.append("fat total: " + fat_calc.toFixed(2) + " \n") + "<br>";
        freshElement.append("protein total: " + protein_calc.toFixed(2) + " \n") + "<br>";
        freshElement.append("sugar total: " + sugar_calc.toFixed(2) + " \n") + "<br>";
        freshElement.append(date);


    });



}

getFruitData();