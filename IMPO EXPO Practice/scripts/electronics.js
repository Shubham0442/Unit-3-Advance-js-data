//import { append } from "../../importExports/scripts/fetch.js";
import {navbar} from "../components/navbar.js"

document.querySelector("#navbar").innerHTML = navbar ();




let url = "https://fakestoreapi.com/products/category/electronics"
let container = document.querySelector("#container") 

import {getData, append} from "./fetch.js"

getData(url).then((res) =>{
    
    append(res,container)
})