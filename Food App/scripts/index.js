let id;
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar ();

let myData = JSON.parse(localStorage.getItem("myDetails"))

//document.querySelector("#signup").innerText = `${myData}`
if(myData === null)
{
    document.querySelector("#signup").setAttribute("a","login.html")
    document.querySelector("#signup").innerText = `Login`
}
else{
    document.querySelector("#signup").innerText = `Hello ${myData}`
}
    // document.querySelector("#signup").innerText = `Hello ${myData}`

    
console.log(myData)



import {getData, append} from "./fetch.js" 



let showRecepie = () =>{
        //console.log("data")
         
        let q = document.querySelector("#search").value 
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
        let container = document.getElementById("container")
        
        getData(url).then((res) =>{
            
            append(res, container);
            //console.log(res)
          });
}

//let q = document.querySelector("#search").value 
// let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
// let container = document.getElementById("container")

// getData(url).then((res) =>{
    
//     append(res, container);
//     console.log(res)
//   });
  

document.querySelector("#search").setAttribute("placeholder","Search")

// let main = () =>{
//     let data = showRecepie () 

//     if(data === undefined)
//     {
//         return false 
//     }

//     append(res, container)
// }


let debounce = (main, delay) =>{
    
    if(id){
        clearTimeout(id)
    }

    id = setTimeout(function(){
        main ()
    },delay)
   
}


document.querySelector("#search").addEventListener("input",function(){
    debounce(showRecepie,1000)
})
// let showRecepie = () => {

//     console.log(getData, append)
     
   
    
// }


