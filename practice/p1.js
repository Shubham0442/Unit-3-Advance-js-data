

favouritesArr = JSON.parse(localStorage.getItem("favourites"))
var mySite = JSON.parse(localStorage.getItem("prod")) || [];

mySite.map ( function(elem)
{
    var box = document.createElement("div")

    var image = cocument.createElement("img")
    image.src = elem.image

    var p1 = document.createElement("p")
    p1.innerText = elem.name

    var p2 = document.createElement("p")
    p2.innerText = elem.category 

    var p3 = document.createElement("p")
    p3.innerText = elem.gender 

    var p4 = document.createElement("p")
    p4.innerText = elem.price 


    var btn = document.createElement("button")
    btn.innerText = "Add to Favourites"
    btn.style.color = "red"
    btn.style.cursor = "pointer"
    btn.addEventListener("click", function (){
        myFavourites(elem)
      })

      box.append(image,p1,p2,p3,p4,btn)
      document.querySelector("body").append(box)

});

    function myFavourites (elem)
    {
    favouritesArr.push(elem)

    localStorage.setItem("favourites", JSON.stringify(favouritesArr))

    

    }
