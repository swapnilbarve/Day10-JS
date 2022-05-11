//objects are collection of properties and methods

var name= "ribhu";
console.log("my name is",name);

let mobile = {

    brand : "Samsung",
    weight : 200,
    isWorking: true,
    11 : "Android Version",
    displayInfo : function(){
        console.log(`The brand of my phone is ${mobile.brand} , the weight is ${mobile.weight} which is working condition ${mobile.isWorking} and android version ${mobile[11]}`)
    }
}

console.log(mobile);

mobile.camera = "32";

console.log(mobile);
console.log(mobile.displayInfo());

let mobile1 = {};

mobile1.brand = "OnePlus";
mobile1.weight = 19;
mobile1.isWorking = true;

console.log(mobile1);

function Mobile(brand,weight,camera){
    this.brand= brand;
    this.weight = weight;
    this.camera = camera;
}

let apple = new Mobile("Apple",190,"13px");
let vivo = new Mobile("Vivo",210,"108px");

console.log(apple);
console.log(vivo);

console.log(apple.brand);

console.log(Object.keys(apple));
console.log(Object.values(apple));

for(const [key,value] of Object.entries(apple)){
    console.log(value);
}

value=23;
console.log(value);
console.log(this);

let arr1=[1,2,3,4];
let arr2=[7,8,9,10];

let arr3=[...arr1,...arr2];
console.log(arr3);
