// Scope

//globle and local scope


                //var a = 4;

                // function hello ()
                // {
                //      var a = 4;
                //     return a ;

                // }
                // console.log(hello ())

                //console.log(a)

//block scope

// for( let i=1; i<4; i++)
// {
//     console.log(i)
// }

// Primitive Immutable Data-types

// var str = "Dheeraj";

// str[0] = "N";

// console.log(str);




//Non-Primitive mutable Data-types

// var arr = [5,6,7,8,9];

// arr[0]=1

// console.log(arr)







// var obj = 
// {
//      name: "Sharad",
//      age: 25
// }

// Object.freeze(obj)

// obj.name = "Varad";


// console.log(obj);


// var arr = [5,6,7,8,9];

// Object.freeze(arr)
// arr[0]=1

// console.log(arr)

// function test ()
// {
//     console.log(this)
// }

// test();

function create (n,p)
{
  this.name = n
  this.price = p
    
}

var nike = new create ("shoe",200)
console.log(nike)

