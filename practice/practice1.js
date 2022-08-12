// var obj = {
//     name: "bike"
    
// }
// console.log("obj:",obj)

// obj2 = Object.create(obj)
// //console.log("obj2:",obj2)

// var family = 
// {
//     father: "krishna",
//     myFather: function ()
//             {
//                 console.log(this.father)
//             }
// }

//  var son = Object.create(family)
//  son.myFather ();
 //console.log("obj2:",son.father);













// function person (n,a)
// {
//     this.name = n,
//     this.age = a 
// }



// person.prototype.setCity = function (c){
//     this.setcity = c
// }

// var p1 = new person ("rohit",33)
// //person.prototype.city = "pune"
// p1.setCity("Mumbai")

// console.log(p1)

// var a ={
//     name: "smr"
// }

// var b = Object.create(a);

// console.log(b.__proto__);











// var student1 = 
// {
//     sub1: "coding",
//     sub2: "DSA",
//     sub3: "skillethon"
// }

// var student2 = Object.create(student1)

// student2.sub4 = "Elective-1"


// var student3 = Object.create(student1)
// student3.sub4 = "Elective-2"


// console.log("student1:", student1)
// console.log("student2:", student2)
// console.log("student3:", student3)










// function shoes (b,p) 
// {
//     this.brand = b,
//     this.price = p
// }

// shoes.prototype.coupon = function (){
//     console.log("20 percent discount")
// }
// var s1 = new shoes("reebok",200)

// s1.coupon()

// let a1 = new array ("x","y","z","w")

// function myArr ()
// {
//     this.length = arguments.length

//     for(let i=0; i<this.length; i++)
//     {
//         this[i] = arguments[i]
//     }
// }

// let a2 = new myArr ("x", "y", "z", "w")
// console.log(Object.values(a2));





//a: "Prototype is nothing but the kind of blueprint, an original object from which a new object is created.",
// b: "It is the mechanism by which JavaScript objects inherit features from one another.
// Every object in JavaScript has a built-in property, which is called its prototype.",
// c: "The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.",
// d: "When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property.",
// e: "If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned."







// var ram = 
// {
//     name: "ram",
//     place: "Mumbai",
//     age: 33
// }

// var a = Object.create(ram)
// console.log(a)











// function Obj (n,p,s,)
// {
//     this.name = n
//     this.place = p
//     this.age = s

// };
// var manoj = new Obj("manoj", "Nashik", 23)
// console.log(manoj)

















// var ram = new Obj("ram", "Mumbai", 33)
// var sham = new Obj("sham", "pune",20)

// console.log(ram)
// console.log(sham)






let m1 = 1 
let m2 = 2 
let m3 = 3 

var arr = [];

arr.push(m1,m2,m3)

console.log(arr)
