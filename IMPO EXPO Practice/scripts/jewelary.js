import {navbar} from "../components/navbar.js"

document.querySelector("#navbar").innerHTML = navbar (); 

let url = "https://fakestoreapi.com/products/category/jewelery" 
let container = document.querySelector("#container") 

import {getData, append} from "./fetch.js"

getData(url).then((res) =>{
    
    append(res,container)
})