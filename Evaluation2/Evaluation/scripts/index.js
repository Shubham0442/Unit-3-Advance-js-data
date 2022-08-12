// Store cart items in local storage with key: "items"

const url = `https://grocery-masai.herokuapp.com/items`

fetch(url)
.then(function(res){
    return res.json ()
})
.then(function (res){
    // console.log("res",res)
    myStore (res)
})
.catch(function(err){
    console.log("err:",err)
})

let cartData = JSON.parse(localStorage.getItem("items")) || []



let length = cartData.length 

// console.log(length)

document.querySelector("#item_count").innerText = length

function myStore (Data)
{
    let elem = Data.data
    document.querySelector("#items").innerHTML = null

      console.log(Data.data)

      for(let i = 0; i<Data.data.length; i++)
      {
        let box = document.createElement("div")

        let image = document.createElement("img")
        image.src = Data.data[i].image
  
        let name = document.createElement("p")
        name.innerText = Data.data[i].name 
  
        let price = document.createElement("p") 
        price.innerText = Data.data[i].price 
  
        let btn = document.createElement("button")
        btn.innerText = "add to cart" 
        btn.setAttribute("id","add_to_cart")

        btn.addEventListener("click",function (){
            addToCart (Data.data[i])
        })
  
        box.append(image, name, price,btn)
  
        document.querySelector("#items").append(box)
      }

}

function addToCart (x)
{
    cartData.push(x)

    localStorage.setItem("items",JSON.stringify(cartData))
}