


document.querySelector("#loginForm").addEventListener("submit", myLogin)

var loginData = JSON.parse(localStorage.getItem("signupData1"))

function myLogin ()
{
    event.preventDefault()

    var myEmail  = document.querySelector("#email").value 
    var myPassword =  document.querySelector("#password").value

    console.log(myEmail, myPassword)

      let flag = false

    for(let i = 0; i<loginData.length; i++)
    {
        console.log(loginData[i].email)

        if(loginData[i].email == myEmail && loginData[i].password == myPassword)
        {
            flag = true
            alert("Login Successful")
            window.location.href="index.html"
            
            
            break;
          
        }
        
     
    }
   if(flag == false)
   {
       alert("Invalid Crendiential")
   }




}
