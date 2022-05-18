
function CustomArray(){
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
let array1= new CustomArray(1,2,3,4,5,6,8)
console.log(Object.values(array1))

CustomArray.prototype.custpush= function(value){
    this[this.length]=value;
    this.length++;
}
CustomArray.prototype.custpop= function(){
delete this[this.length-1];
this.length--;
}
CustomArray.prototype.custtop= function(){
     console.log(this[this.length-1]);
    // this.length--;
    }

CustomArray.prototype.custprint= function(){
     console.log(Object.values(this));
    // this.length--;
    }



CustomArray.prototype.custsize= function(){
     console.log(this.length);
    // this.length--;
    }


    CustomArray.prototype.custreverse= function(){
        let str=[]
        for(let i=this.length-1; i>=0; i--){
           
               str.push( this[i]);
             
        }  console.log (str);
          }





array1.custpush(1)
array1.custpush(4)
array1.custpush(3)
console.log(Object.values(array1))
array1.custpop();

console.log(Object.values(array1))
array1.custtop();
array1.custprint();
array1.custreverse();
array1.custsize();
