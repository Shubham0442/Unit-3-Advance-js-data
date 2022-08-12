
const moviePic = 
[
    "https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422",
    "https://blog.emergingscholars.org/wp-content/uploads/2020/03/Ford-v.-Ferrari-Promotional-Still-880-768x331.jpg",
    "https://www.wallpaperup.com/uploads/wallpapers/2014/10/20/488292/ab7b6ae486172899bf06b580889c920f-1000.jpg",
    "https://themarckoguy.files.wordpress.com/2015/05/the_dark_knight_rises-wallpaper-1366x768.jpg?w=768&h=432",
    "https://wallpapercave.com/wp/wp4499529.jpg"
];

let image = document.createElement("img")
let i = 0;
let slideShow = document.querySelector("#slideshow")

setInterval(function ()
{
    if( i === moviePic.length)
    {
        i = 0;
    }
    image.src = moviePic[i]
   
    slideShow.append(image)
    i++


},2000)



//  var  moviezArr = JSON.parse(localStorage.getItem("movies")) || [];

 var moviesData =  [];
  
 


function Movies (n, d, i, r)
{
    this.name = n 
    this.date = d 
    this.image = i 
    this.IMDb_Rating = r
}

let m1 = new Movies("Knight and Day", "Jan 2, 2022","https://movieposters2.com/images/693536-b.jpg",8)
let m2 = new Movies("Ford Vs Ferrari", "Feb 4, 2022","https://c7.alamy.com/comp/3/ec626f519b4d43e7839fec4adfcab5b1/2aaft8j.jpg",9)
let m3 = new Movies("Top Gun 2 Maverick", "Feb 2, 2022","https://c7.alamy.com/zooms/3/b6749eac809d4f2ca5ad3327a63082b4/2j30nj7.jpg",8)
let m4 = new Movies("Jerry Maguire", "Jan 8, 2022","https://c7.alamy.com/comp/3/ad038755cd6242ec9a3d65e25b870589/bkmpxn.jpg",8.5)
let m5 = new Movies("Batman Begins", "Feb 2, 2022","https://www.themoviedb.org/t/p/w220_and_h330_face/h4QzFwldlUaEvJgVwumGTPOBA59.jpg",8)
let m6 = new Movies("The Vice", "Jan 6, 2022","https://www.themoviedb.org/t/p/original/mwcY3bXGvWL4GczdA9YTn5QwD0h.jpg",8)
let m7 = new Movies("Mission Impossible Rouge Nation", "Jan 22, 2022","https://c7.alamy.com/zooms/3/557c22bee41f41f3b0b852f6095d3bbd/pmbawc.jpg",8.4)
let m8 = new Movies("Lone Survivor", "Feb 12, 2022","https://movieposters2.com/images/1301381-b.jpg",7.5)
let m9 = new Movies("Jack Reacher", "March 2, 2022","https://static1.colliderimages.com/wordpress/wp-content/uploads/jack-reacher-poster-international-407x600.jpg?q=50&fit=crop&w=750&dpr=1.5",7)

moviesData.push(m1, m2, m3, m4, m5, m6, m7, m8, m9);
console.log(moviesData)



localStorage.setItem("movies",JSON.stringify(moviesData)) 

var movieslist = JSON.parse(localStorage.getItem("movies")) || []
displayData(movieslist)

function sortByLtH ()
{
    movieslist.sort(function (a,b){

        return a.IMDb_Rating - b.IMDb_Rating
    })
    displayData(movieslist)
}

function sortByHtL ()
{
    movieslist.sort(function (a,b){

        return b.IMDb_Rating - a.IMDb_Rating
    })
    displayData(movieslist)
}




function displayData(movieslist){
    document.querySelector("#movies").innerHTML = null;
    movieslist.map(function (elem)
        {
            
            let box = document.createElement("div")

            let image = document.createElement("img")
            image.src = elem.image

            let name = document.createElement("p")
            name.innerText = elem.name 

            let date = document.createElement("p")
            date.innerText = `Releasing on ${elem.date}` 

            // let imdb = document.createElement("p")
            // imdb.innerText = elem.imdb 

            let IMDb_Rating = document.createElement("p") 
            IMDb_Rating.innerText = `IMDb rating: ${elem.IMDb_Rating}` 

            //let innerBox = document.createElement("div")
            
            //innerBox.append(imdb, IMDb_Rating)

            box.append(image, name, date, IMDb_Rating)

            document.querySelector("#movies").append(box)

        })
}
    
      
        


    



