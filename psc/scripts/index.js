//https://api.unsplash.com/search/photos 
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY 

//https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=pBXoFIavV9E7HkhesTus_ZmYO4IvXIOS91CNacPDqG8 

import {navbar} from "../components/navbar.js" 
let nav = document.getElementById("navbar");
nav.innerHTML = navbar (); 


import { searchImages, append, sortPics,filterPic } from "./fetch.js";

let query = document.getElementById("query").value
let search = (e) =>{
    if(e.key === "Enter"){
         query = document.getElementById("query").value
       searchImages(query).then((data)=>{
        console.log(data)
        let container = document.getElementById("container")
        append(data.results, container)
       });
        
    }
};

document.getElementById("query").addEventListener("keydown",search)
document.getElementById("query").setAttribute("placeholder", "Search Images")

// let searchImages = async () =>{

//     let query = document.getElementById("query").value 
//     // let url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=pBXoFIavV9E7HkhesTus_ZmYO4IvXIOS91CNacPDqG8`
//https://api.unsplash.com/search/photos/?query=${value}&per_page=20&order_by=${sort}&client_id=pBXoFIavV9E7HkhesTus_ZmYO4IvXIOS91CNacPDqG8
    
// }
let categories = document.getElementById("categories").children;

function cSearch () {
    console.log(this.id)

    searchImages(this.id).then((data)=>{
        console.log(data)
        let container = document.getElementById("container")
        append(data.results, container)
       });
}

for(let el of categories){
     el.addEventListener("click", cSearch)   
}



let sorted = () =>{
    let selected = document.getElementById("sortBy").value 
     query = document.getElementById("query").value

    console.log(selected, query)
    sortPics(selected,query).then((data)=>{
        let container = document.getElementById("container")
        container.innerHTML = null 
        append(data.results, container)
    })

    

}

document.getElementById("sortBy").addEventListener("change", sorted) 

let filtered = () =>{
    let filters = document.getElementById("filterBy").value 
     query = document.getElementById("query").value

    console.log(filters, query)
    filterPic(filters,query).then((data)=>{
        let container = document.getElementById("container")
        container.innerHTML = null 
        append(data.results, container)
    })
}

document.getElementById("filterBy").addEventListener("change", filtered)