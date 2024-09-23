products = [
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Apple",
    },
    {
      category: "Vegetables",
      price: "$1",
      stocked: true,
      name: "Peas",
    },
    {
      category: "Fruits",
      price: "$1",
      stocked: true,
      name: "Dragonfruit",
    },
    {
      category: "Fruits",
      price: "$2",
      stocked: false,
      name: "Passionfruit",
    },
    {
      category: "Vegetables",
      price: "$2",
      stocked: true,
      name: "Spinach",
    },
    {
      category: "Vegetables",
      price: "$4",
      stocked: true,
      name: "Pumpkin",
    },
];
const displayZone = document.getElementById("results");
function displayData(data){
    vegetables = data.filter((item) => item.category === "Vegetables");
    fruits = data.filter((item) => item.category === "Fruits");
    if (vegetables.length > 0){
        displayZone.innerHTML += "<p>Vegetables</p>";
        vegetables.forEach((item) => {
            if (item.stocked === false){
                displayZone.insertAdjacentHTML("beforeend", `<tr><td id = "notInStock" scope = "row">${item.name}</td><td>${item.price}</td></tr>`)
            }
            else{
                displayZone.insertAdjacentHTML("beforeend", `<tr><td scope = "row">${item.name}</td><td>${item.price}</td></tr>`); 
            }
        });
    }
    if (fruits.length > 0){
        displayZone.innerHTML += "<p>Fruits</p>";
        fruits.forEach((item) => {
        if (item.stocked === false){
            displayZone.insertAdjacentHTML("beforeend", `<tr><td id = "notInStock" scope = "row">${item.name}</td><td>${item.price}</td></tr>`)
        }
        else{
            displayZone.insertAdjacentHTML("beforeend", `<tr><td scope = "row">${item.name}</td><td>${item.price}</td></tr>`); 
        }
        });
    }
}

displayData(products);

const onlyStockCheckbox = document.getElementById("onlyStock");

onlyStockCheckbox.addEventListener("change", (event) => {
    if (event.target.checked){
        displayZone.innerHTML = "";
        displayData(products.filter((item) => item.stocked === true));
    } else {
        displayZone.innerHTML = "";
        displayData(products);
    }
});

const searchInput = document.getElementById("searchBar");

searchInput.addEventListener("input", (event) => {
    displayZone.innerHTML = "";
    displayData(products.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase())));
});


