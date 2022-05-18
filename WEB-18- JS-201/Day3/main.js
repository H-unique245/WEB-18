


// function Product(type){
//     this.type= type;
//     this.brand= "nike",
//     this.logo ="url",
//     this.seller ="flipkart"
// }
// Product.prototype.discount=function(){
//     console.log("50% discount")
// }
// Product.prototype.changeType= function(type){
//     this.type =type;
// }
// // Product.prototype.price=1000;
// let p1 = new Product("Shoe")
// // p1.price= price;
// let p2 = new Product ("Sneakers")

// console.log(p1)
// p1.changeType("T-shirt")
// console.log(p1)
// console.log(p2)



// let arr =[1,2,3];
// let arr2= new Array[1,2,3];

// function myArray (){
//     this[0]=a;
//     this[1]=b;
//     this[2]=c;
// }

// let arr3 = myArray[1,2,3];

function myArray(){
    // arguments;
    Object.defineProperty(this,"length",{
        value: 0,
        writable: true,
        enumerable: false,
    });
    this.length=arguments.length;
    for(let i=0; i<arguments.length; i++){
      this[i]= arguments[i];
    }
}

let arr3= new myArray(1,2,3,4,5,6);
console.log(arr3)