




var prodData = JSON.parse(localStorage.getItem("Products"))


let length = prodData.length

document.querySelector("#counter").innerText = `Total products listed: ${length}`

prodData.map(function (elem , index)
{
    var box = document.createElement("div")

    var image = document.createElement("img")
    image.src = elem.image

    var name =  document.createElement("p")
    name.innerText = elem.name

    var category =  document.createElement("p")
    category.innerText = elem.category 

    var gender =  document.createElement("p")
    gender.innerText = elem.gender 

    var price = document.createElement("p")
    price.innerText = elem.price 

    var soldStatus = document.createElement("button")
    soldStatus.innerText = `sold`
    soldStatus.style.backgroundColor = "green"
    soldStatus.style.color = "white"
    soldStatus.setAttribute("id","sold")

    soldStatus.addEventListener("click", function()
    {
        addToSold (elem,index,soldStatus)
        
    })
    

    var remove =  document.createElement("button")
    remove.innerText = "Remove";
    remove.addEventListener("click", function()
    {
           removeproduct (elem,index)
    })

    box.append(image,name,category,gender,price,soldStatus,remove)

    document.querySelector("#container").append(box)


});

function addToSold (elem,index,soldStatus) 
{
    var s1  = document.querySelector("#sold")
    soldStatus.style.backgroundColor = "red";
    console.log(soldStatus)
}

function removeproduct (elem, index,)
{
    prodData.splice(index,1)
    localStorage.setItem("Products",JSON.stringify(prodData))
    window.location.reload()
}