

var arr = JSON.parse(localStorage.getItem("prod")) || [];

function myProduct (n,c,i,g,p,s)
{
    this.name = n 
    this.category = c 
    this.image = i 
    this.gender = g 
    this.price = p
    this.soldststus = s 
};

function allprod (e)
{
    e.preventDefault ()

    var form = document.querySelector("#myform")

    var name = form.name.value 
    var category = form.category.value 
    var image = form.image.value
    var gender = form.gender.value 
    var price = form.price.value 
    var soldstatus = foem.soldsaatus.value

    var p1 = new myProduct(name, category, image, gender, price, soldstatus)

    arr.push(p1)

    localStorage.setItem("prod", JSON.stringify("arr"))

}