
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar (); 

let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fry` 

let container = document.getElementById("container")
import {getData, append} from "./fetch.js" 

getData(url).then((res) =>{
        
    append(res, container);
    //console.log(res)

})

