

let cartData = JSON.parse(localStorage.getItem("items")) || []

// console.log(cartData)

let total = 0 

for(let i = 0; i<cartData.length; i++)
{
    total = total + cartData[i].price

}

console.log(total)

document.querySelector("#cart_total").innerText = total



cartData.map(function (elem,index)
{
    //document.querySelector("#cart").innerHTML = null

    let box = document.createElement("div")

    let image = document.createElement("img")
    image.src = elem.image 

    let name = document.createElement("p")
    name.innerText = elem.name 

    let price = document.createElement("p")
    price.innerText = elem.price 

    let btn = document.createElement("button")
    btn.setAttribute("id","remove")
    btn.innerText = "Remove"

    btn.addEventListener("click", function (){
        removeFromCart(elem,index)
    })

    box.append(image, name, price, btn)

    document.querySelector("#cart").append(box)

})

function removeFromCart(elem,index)
{
    cartData.splice(index,1)
    localStorage.setItem("items", JSON.stringify(cartData))
    window.location.reload()
}

let ancar = document.createElement("a")



