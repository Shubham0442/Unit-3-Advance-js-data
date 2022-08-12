
function catchMovie ()
{
    let movie = document.querySelector("#movie1").value
    const url = `https://www.omdbapi.com/?t=${movie}&apikey=e9c6bda2`

    fetch(url)
    .then(function (res)
    {
        return res.json();
    })
    .then(function (res)
    {
        // console.log("res:", res)

        CatchMovie (res)
    })
    .catch(function(err){
        console.log("err:",err)
    })
    
}



function CatchMovie (data)
{
    
    document.querySelector("#container1").innerHTML = null
    
    if(data.Response === "False")
    {
        let errgif = document.createElement("img")
        errgif.setAttribute("id","errimg")
        errgif.src = "https://media1.giphy.com/media/26u6bnal23NhnIoZG/200w.webp?cid=ecf05e47o6vwxjvkg42hnvoz3vg27ee7zfqxp83irdq8nmzz&rid=200w.webp&ct=g"
        document.querySelector("#container1").append(errgif)
    }
    else{

        
       
        console.log(data)
        let poster = document.createElement("img")
        poster.src = data.Poster

        let plotName = document.createElement("h4")
        plotName.innerText = "Plot"

        let plot = document.createElement("p")
        plot.innerText = `${data.Plot}`

        let title = document.createElement("h2")
        title.innerText = data.Title

        let ActorsName = document.createElement("h4")
        ActorsName.innerText = "Actors"

        let imdbDiv = document.createElement("div")
        imdbDiv.setAttribute("id","imdbDiv")

        let IMDbName = document.createElement("h4")
        IMDbName.innerText = "IMDb Rating:"

        let IMDb = document.createElement("p")
        
        IMDb.innerText = `${data.imdbRating}`

        imdbDiv.append(IMDbName, IMDb.innerText)

        let recommdDiv = document.createElement("div")
        let tagRec = document.createElement("img")
        tagRec.src = "https://thumbs.dreamstime.com/b/recommended-stamp-round-grunge-sign-label-181769499.jpg"
        tagRec.setAttribute("height", "50");
        tagRec.setAttribute("width", "50");

        let date = document.createElement("p")
        date.innerText = `Released on: ${data.Released}`

        let time = document.createElement("p")
        time.innerText = `Runtime: ${data.Runtime}`

        let type = document.createElement("p")
        type.innerText = `${data.Genre}`

    
        let Actors = document.createElement("p")
        Actors.innerText = `${data.Actors}`

        let posterDiv = document.createElement("div")
        posterDiv.append(poster)

        let infoDiv = document.createElement("div")
        infoDiv.setAttribute("id","infoDiv")
        infoDiv.append(title,type,plotName, plot ,ActorsName, Actors,date,time,imdbDiv)

        if(IMDb.innerText>8.5)
        {
            recommdDiv.append(tagRec)
            infoDiv.append(recommdDiv)

        }

        


        document.querySelector("#container1").append(posterDiv, infoDiv)
       



    }



}