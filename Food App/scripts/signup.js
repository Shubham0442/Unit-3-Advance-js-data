
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();


let regust = async (e) => {
    e.preventDefault()

    let formData =
    {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        username: document.querySelector("#username").value,
        mobile: document.querySelector("#mobile").value,
        description: document.querySelector("#description").value,

    };

    console.log(formData)

    formData = JSON.stringify(formData)

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",

        {
            method: 'POST',
            body: formData,

            headers: {
                "Content-Type": "application/json"
            }
        });

    let data = await res.json()
    console.log(data)

    if (data.error === true) {
        alert("User Already exist")
    }
    else {
        alert("Signup Successful")
    }
}

document.getElementById("submit").addEventListener("click", regust)