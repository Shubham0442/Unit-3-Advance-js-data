//store the products array in localstorage as "data"

// getting the items stored in the local storage with the key data
var arr = JSON.parse(localStorage.getItem("data")) || []


//creating a constructor function for making multipleobjects
function products (b, n, p, i)
{
    this.brand = b 
    this.name = n 
    this.price = p 
    this.image = i
}


// calling the function myForm 
function myForm (e)
{

    //preventing the page from getting refresh every time 
    e.preventDefault ()


    //catching the form and content of form
    let form = document.querySelector("#product_form")

    let brand = form.product_brand.value 

    let name = form.product_name.value 

    let price = form.product_price.value

    let image = form.product_image.value

    
   //creating object and passinf the form content to constructor function as a key
    let p1 = new products(brand,name, price, image)

    //pushing the created object to array so that array will have elements as an objects
    arr.push(p1)

    //storing the the array of object to local storage
   localStorage.setItem("data", JSON.stringify(arr))
}
