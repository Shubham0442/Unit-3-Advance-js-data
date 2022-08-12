
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar ();

let loged = async() =>{
    let userData = {
        username: document.querySelector("#username").value ,
        password: document.querySelector("#password").value 
    } 

    userData = JSON.stringify(userData) 

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
       method: 'POST',
       body: userData,

        headers: {
            "Content-Type":"application/json",
        }
    });

    let data = await res.json();
    //console.log(data)

   
    let username=document.getElementById("username").value

    getUserData(username,data.token)

    if(data.error === true)
    {
        alert("Invalid Data or User Already Exist")
        // console.log(userData.username)
    }
    else{
        window.location.reload ()
        alert("Login Successful")
        localStorage.setItem("myDetails",JSON.stringify(username))
    }
    


};







document.querySelector("#submit").addEventListener("click",loged)





let getUserData = async (username,token) =>{
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    let data = await res.json()

    console.log("User Detail:", data)

    // localStorage.setItem("myDetails",JSON.stringify(username))
   
};


 
