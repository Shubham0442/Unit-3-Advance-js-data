
let listDiv = document.querySelector("#list")
let id;
let showtime = document.querySelector("#showtime")

// const moviePic = 
// [
//     "https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422",
//     "https://blog.emergingscholars.org/wp-content/uploads/2020/03/Ford-v.-Ferrari-Promotional-Still-880-768x331.jpg",
//     "https://www.wallpaperup.com/uploads/wallpapers/2014/10/20/488292/ab7b6ae486172899bf06b580889c920f-1000.jpg",
//     "https://themarckoguy.files.wordpress.com/2015/05/the_dark_knight_rises-wallpaper-1366x768.jpg?w=768&h=432",
//     "https://wallpapercave.com/wp/wp4499529.jpg"
// ];

// let image = document.createElement("img")
// let i = 0;


// setInterval(function ()
// { showtime.innerHTML = null
    
//     if( i === moviePic.length)
//     {
//         i = 0;
//     }
//     image.src = moviePic[i]
   
//     document.querySelector("#showtime").append(image)
//     i++


// },2000)



//catching the data by making the api request with async-await
async function searchMovie (){

    try {
         
        let query = document.querySelector("#query").value 

        let res = await fetch (`https://www.omdbapi.com/?s=${query}&apikey=e9c6bda2`)
         
        let data = await res.json ()

        console.log("data",data)
        let movies = data.Search
        //append (movies)

        return movies
    }
    catch(err)
    {
        console.log("err",err)
    }
}




// appending the data (movies title to the listDiv)

function append (data){

    listDiv.innerHTML = null 

    data.forEach(function(elem){

        let dropdown = document.createElement("div")
        dropdown.innerText = elem.Title 
        dropdown.setAttribute("id","recommand")


        dropdown.addEventListener("click", function (){
            recommand(elem)
        })
        
       listDiv.append(dropdown)
    })


}
function recommand (elem){
    document.querySelector("#query").value =  elem.Title
    listDiv.innerHTML = null 
}

//wrapping both (append and search movies) functions in one function (main) 
async function main (){

    let data = await searchMovie ()

    listDiv.innerText = "No results Found"

    if(data === undefined)
    {
        return false
        
    }

    append(data)
}

// debouncing i.e. optimization for the people who types fastly 
//with setTimeout 

function debounce(fun,delay)
{
   if (id){
       clearTimeout(id)
   }

   setTimeout(function (){
      fun();
    },delay)
}

function displayMovie() {


    let q = document.querySelector("#query").value 
    let url = `https://www.omdbapi.com/?t=${q}&apikey=e9c6bda2` 

    fetch (url)
    .then(function(res){
        return res.json()
    })
    .then(function (res){
        console.log("res",res)
        show(res)
    })
    .catch(function (err){
        console.log("err",err)
    })

    function show (data)
    {
        document.querySelector("#showtime").innerHTML = null
        listDiv.innerHTML = null

        let posterDiv = document.createElement("div")
        let poster = document.createElement("img")
        poster.src  = data.Poster 
        posterDiv.append(poster)

        let infoDiv =  document.createElement("div") 

        let name = document.createElement("h1") 
        name.innerText = data.Title 

        let plotName = document.createElement("h4")
        plotName.innerText = "Plot"

        let ActorsName = document.createElement("h4")
        ActorsName.innerText = "cast"

        let type = document.createElement("p")
        type.innerText = `${data.Genre}`

    
        let Actors = document.createElement("p")
        Actors.innerText = `${data.Actors}`

        let plot = document.createElement("p") 
        plot.innerText = data.Plot 

        let release = "Release Date: "
        
    
        let date = document.createElement("p") 
        date.innerText = `${release} ${data.Released}`

        let Runtime =  "Runtime: "
        

        let time = document.createElement("p") 
        time.innerText = `${Runtime} ${data.Runtime}`


        let rate = "IMDb Rating: "
       

        let rating = document.createElement("p") 
         rating.innerText = `${rate} ${data.imdbRating}`

         infoDiv.append(name, type, plotName, plot, ActorsName, Actors, date, time, rating) 


        document.querySelector("#showtime").append (posterDiv,infoDiv)

    }


}


