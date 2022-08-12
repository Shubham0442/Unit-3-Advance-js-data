// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js" 
document.querySelector("#navbar").innerHTML = navbar ();

import {showResults} from "./fetch.js"
  let Csearch = ()=>{
    
    // e.key = "Enter" 
    

    let query = document.querySelector("#search_input").value
    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}` 
    // import {showResults} from "./fetch.js"
     
    
    // let results = document.querySelector("#results") 
    
    showResults(url).then((res)=>{
        console.log(res)

    })

    window.location.href = "search.html"
}


document.querySelector("#search_input").addEventListener("input", Csearch)