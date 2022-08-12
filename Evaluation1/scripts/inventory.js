
// getting the data stored in local storage
var myData = JSON.parse(localStorage.getItem("data"))


//mapping the data stored in the local storage
myData.map(function (elem)
{



    //creating the box, p tags, img tag, and remove button
    var box = document.createElement("div")

    var image = document.createElement("img")
    image.src = elem.image

    var brand = document.createElement("p")
    brand.innerText = elem.brand

    var name = document.createElement("p")
    name.innerText = elem.name

    var price = document.createElement("p")
    price.innerText = elem.price

    var btn = document.createElement("button")
    btn.innerText = "Remove Product"
    
   
    //appendeing all the tags to the box
    box.append(image,brand, name, price, btn)


     //appending the box to the given div 
    document.querySelector("#products_data").append(box)

})


