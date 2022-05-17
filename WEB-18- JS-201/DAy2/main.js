


function Product(name,brand,price) {
    this.name= name;
    this.brand= brand;
    this.price = price;
}


let arr=[];

function submitProduct(e) {
    e.preventDefault();

    let form = document.getElementById("products");
    let name = form.name.value;
    let brand = form.brand.value;
    let price = form.price.value;

    let p = new Product (name, brand, price);
    arr.push(p);
    console.log(arr);
}


// let bedroom={
//     name : "bedroom",
//      purpose : "sleep",
// }

// function food(food) {
//     console.log("Serving ${food} in ${this.name}");
// }

// // bedroom.food("pizza")
// food.call(bedroom,"pizza");