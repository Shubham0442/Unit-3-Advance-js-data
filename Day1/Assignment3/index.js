//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.


    var scopeObj = {
        a: "Scope is nothing but the visibility or accessiability of the variables. There are three kind of scopes which are Globle, local and Block.",
        b: "In globle scope, 'var' is used generally for pointing any value and the value can be assessible anywhere in the program.",
        c: "Local scope is generally associated with the functions. the values assigned inside the function can be assessible inside that perticular function only.",
        d: "If we wanrt to get the value outside the function, we need to return it to the function and then by calling the function we can get it.",
        e: "In block scope, generally 'let' and 'const' are used for pointing any value and the value can be accessable only inside that perticular block where the value was assigned."
    };
   var hoistObj = {
        a:"Hoisting is default behaviour of JS, for finding variables and function declearation before actually executing thar program.",
        b: "It is the process of knowing what variables are present in the program, so JS can manage the the space in memory.",
        c: "Hoisting does not care about the values pointed by variables.It wants to know only what variables present in the program",
        d: "When JS know about the variables present in the program, it manages the memory for the variables.",
        e: "For Js, it's just the knowing the variables."
    };
    var cfObj = {
        a: "The constructor function creates an objects because to create multiple objects, the conventional literl method is inefficient.",
        b: "There are two keywords used for creating the objects-this and new.",
        c: "The value of this is determined by how/where the function was executed, 'this' represents the owner object and all the properties it owns at any time.",
        d: "Alone 'this' referes to the globle object",
        e: "the 'new' keyword points 'this' to the the object which we are creating. It similar to the return in a normal function" 
    };
    var protoObj = {
        a: "Prototype is nothing but the kind of blueprint, an original object from which a new object is created.",
        b: "It is the mechanism by which JavaScript objects inherit features from one another. Every object in JavaScript has a built-in property, which is called its prototype.",
        c: "The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.",
        d: "When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property.",
        e: "If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned."
    }
    

 
 
  
function myScope () {
   
    //box1.innerText = "";

    document.querySelector("#out").innerHTML = "";

    var scope = JSON.parse(localStorage.getItem("scope")) || [];
    
        var box1 = document.createElement("div")

        var v1 = document.createElement("video")
          v1.src = "Scope.mp4"
          v1.controls = true
          v1.setAttribute("id","video")

        var Ul  = document.createElement("ul")
        
        var l1 = document.createElement("li")
        l1.innerText = scopeObj.a

        var l2 = document.createElement("li")
        l2.innerText = scopeObj.b

        var l3 = document.createElement("li")
        l3.innerText = scopeObj.c

        var l4 = document.createElement("li")
        l4.innerText = scopeObj.d

        var l5 = document.createElement("li")
        l5.innerText = scopeObj.e

        Ul.append(l1,l2,l3,l4,l5)
        box1.append(v1,Ul)

        // var box = document.createElement("div")

        // box.append(box1)

        document.querySelector("#out").append(box1)

        localStorage.setItem("scope", JSON.stringify(scope))

        // document.querySelector("#out").innerHTML = "";
}


function myhoist()
{
     //box1.innerText = "";
     document.querySelector("#out").innerHTML = "";
    var hoist = JSON.parse(localStorage.getItem("hoisting")) || [];
    var box1 = document.createElement("div")
     
        var v1 = document.createElement("video")
          v1.src = "hoisting.mp4"
          v1.controls = true
          v1.setAttribute("id","video")

        var Ul  = document.createElement("ul")
        
        var l1 = document.createElement("li")
        l1.innerText = hoistObj.a

        var l2 = document.createElement("li")
        l2.innerText = hoistObj.b

        var l3 = document.createElement("li")
        l3.innerText = hoistObj.c

        var l4 = document.createElement("li")
        l4.innerText = hoistObj.d

        var l5 = document.createElement("li")
        l5.innerText = hoistObj.e

        Ul.append(l1,l2,l3,l4,l5)
        box1.append(v1,Ul)

        // var box = document.createElement("div")

        // box.append(box1)

        document.querySelector("#out").append(box1)
        

        localStorage.setItem("hoisting", JSON.stringify(hoist))

       
}


// data.push(scopeObj, hoistObj, cfObj, protoObj)


function myCf ()
{
    //box1.innerText = "";
    document.querySelector("#out").innerHTML = "";
    var constructor = JSON.parse(localStorage.getItem("constructor_function")) || [];
    var box1 = document.createElement("div")
     
        var v1 = document.createElement("video")
          v1.src = "Constructor function.mp4"
          v1.controls = true
          v1.setAttribute("id","video")

        var Ul  = document.createElement("ul")
        
        var l1 = document.createElement("li")
        l1.innerText = cfObj.a

        var l2 = document.createElement("li")
        l2.innerText = cfObj.b

        var l3 = document.createElement("li")
        l3.innerText = cfObj.c

        var l4 = document.createElement("li")
        l4.innerText = cfObj.d

        var l5 = document.createElement("li")
        l5.innerText = cfObj.e

        Ul.append(l1,l2,l3,l4,l5)
        box1.append(v1,Ul)

        // var box = document.createElement("div")

        // box.append(box1)

        document.querySelector("#out").append(box1)
        

        localStorage.setItem("constructor_function", JSON.stringify(constructor))

        //document.querySelector("#out").innerHTML = "";
}

function myproto ()
{
    //box1.innerText = "";
    document.querySelector("#out").innerHTML = "";
    var Prototype = JSON.parse(localStorage.getItem("Prototype")) || [];
    var box1 = document.createElement("div")
     
        var v1 = document.createElement("video")
          v1.src = "Prototype.mp4"
          v1.controls = true
          v1.setAttribute("id","video")

        var Ul  = document.createElement("ul")
        
        var l1 = document.createElement("li")
        l1.innerText = protoObj.a

        var l2 = document.createElement("li")
        l2.innerText = protoObj.b

        var l3 = document.createElement("li")
        l3.innerText = protoObj.c

        var l4 = document.createElement("li")
        l4.innerText = protoObj.d

        var l5 = document.createElement("li")
        l5.innerText = protoObj.e

        Ul.append(l1,l2,l3,l4,l5)
        box1.append(v1,Ul)

        // var box = document.createElement("div")

        // box.append(box1)

        document.querySelector("#out").append(box1)
        

        localStorage.setItem("Prototype", JSON.stringify(Prototype))

        
}
    


