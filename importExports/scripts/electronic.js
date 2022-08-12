import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar ()


// let getData = async() =>{
//     try {
         
//         let res = await fetch("https://fakestoreapi.com/products/category/electronics")
//         let data = await res.json ()
//         console.log(data);
//         append(data)

//     }catch(err){
//         console.log(err)
//     }
// }

// getData() 

// let append = (data) =>{
//     let container = document.getElementById("container")

//     data.map(({title}) =>{

//         let div = document.createElement("div")
//         div.innerText = title

//         container.append(div)
//     })
// }

let url = "https://fakestoreapi.com/products/category/electronics" 
let container = document.getElementById("container")

import { getData, append } from "./fetch.js" 

getData(url).then((res) =>{
     
    append(res, container);
})