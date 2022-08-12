
var arr = JSON.parse(localStorage.getItem("Products")) || [];

function myProducts (n,c,i,g,p,s)
{
     this.name = n,
     this.category = c,
     this.image = i,
     this.gender = g,
     this.price = p,
     this.soldStatus = s

}



function addProducts (e)
{
    e.preventDefault ();

    let form = document.querySelector("#addForm");

    let name = form.name.value

    let category = form.category.value

    let image = form.image.value

    let gender = form.gender.value

    let price = form.price.value

    let soldStatus = form.soldStatus.value
    console.log(soldStatus)

    let p1 = new myProducts (name, category, image , gender, price, soldStatus)
    
    arr.push(p1)

    localStorage.setItem("Products",JSON.stringify(arr))

}