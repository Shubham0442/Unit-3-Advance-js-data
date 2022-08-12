// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let h1 = JSON.parse(localStorage.getItem("amount")) 
document.querySelector("#wallet").textContent = h1 

let obj = JSON.parse(localStorage.getItem("movie")) || {}
let id;


function mymovie ()
{
    let q = document.querySelector("#search").value 
    let url = `https://www.omdbapi.com/?s=${q}&apikey=e9c6bda2`  

    fetch(url)
    .then(function (res){
        return res.json()
    })
    .then(function(res){
        //console.log(res)

        let data = res.Search
        append (data)
    })
    .catch(function (err){
        console.log(err)
    })
}

function append (data)
{
    console.log(data)

    document.querySelector("#movies").innerHTML = null

  data.map(function (elem){

         let div = document.createElement("div")  

         let poster = document.createElement("img") 
         poster.src = elem.Poster 

         let title = document.createElement("p")
         title.innerText = elem.Title 

         let type = document.createElement("p") 
         type.innerText = elem.Type 

         let year = document.createElement("p") 
         year.innerText = elem.Year 



         let btn = document.createElement("button") 
         btn.innerText = "book_now" 
         btn.setAttribute("class", "book_now") 


         let obj = {
             title : elem.Title,
             poster: elem.Poster,
             year:  elem.Year,
             type: elem.Type
         }

         btn.addEventListener("click", function (){
              
            bookedMovie(obj)
         })
        
         div.append(poster, title, btn)

        


        document.querySelector("#movies").append(div)

  })

  function bookedMovie(obj){
         
     localStorage.setItem("movie",JSON.stringify(obj))

     window.location.href = "checkout.html"

  }

  

}   

function main ()
{ 
    let data = mymovie ()

    if(data === undefined)
    {
        return false;
    }

    append (data)
}

function debounce (main, delay)
{

 if(id){
     clearTimeout(id)
 }

  id = setTimeout(function(){
        main()
    },delay)
}
