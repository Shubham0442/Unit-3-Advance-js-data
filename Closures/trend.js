

const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=5ba62fcb64ce49323d0fad7bd3bf245c`

fetch(url)
.then(function(res){
    return res.json ()
})
.then(function (res){
    console.log("res",res)

    let data = res.results
    console.log(data)
    append (data)

})
.catch(function(err){
    console.log("err", err)
})

function append (data)
{
    data.map(function(elem){

    let box = document.createElement("div")

    let poster = document.createElement("img")
    poster.src = `https://image.tmdb.org/t/p/original/${elem.poster_path}`

    let title = document.createElement("h4")
    title.innerText = elem.original_title

    let date = document.createElement("p")
    date.innerText = `Released on: ${elem.release_date}`
    date.setAttribute("id","date")

    box.append(poster,title,date)
    
    document.querySelector("#container").append(box)
    });
    

};
