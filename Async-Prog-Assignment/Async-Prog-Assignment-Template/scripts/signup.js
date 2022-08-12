
var signArr = JSON.parse(localStorage.getItem("signupData1")) || []


function signupDetails (n, c, e, p)
{
    this.name = n
    this.contact = c
    this.email = e 
    this.password = p 
}


function mySignup (e)
{
   e.preventDefault ()

   let form = document.querySelector("#signup-form-div form")

   let name = form.name.value

   let contact = form.contact.value
    
   let email = form.email.value

   let password = form.password.value

   let p1 = new signupDetails(name, contact, email, password)

   if (name === "" || contact === "" || email === "" || password === "")
   {
       alert("Please fill all the Details");
   }
   else{

    signArr.push(p1)

    localStorage.setItem("signupData1", JSON.stringify(signArr))
   }

}