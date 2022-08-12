// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let h1 = Number(JSON.parse(localStorage.getItem("amount")))

document.querySelector("#wallet").textContent = h1 

console.log(h1)
let obj = JSON.parse(localStorage.getItem("movie")) 
 
let div = document.querySelector("#movie")


let poster = document.createElement("img")
poster.src = obj.poster 

let title = document.createElement("h2")
title.innerText = obj.title 

let type = document.createElement("p") 
type.innerText = obj.type 

let year = document.createElement("p") 
year.innerText = obj.year 

div.append(title,poster, type, year)  

document.querySelector("form").addEventListener("submit", myBooking)


function myBooking ()
{
    event.preventDefault()

    let name = document.querySelector("#user_name").value 

    let seats = document.querySelector("#number_of_seats").value 
    
    let total = +document.querySelector("#wallet").innerText

    console.log(total) 

    if(seats * 100 <= total)
    {
        alert("Booking successful!")
        total = total - seats * 100

        document.querySelector("#wallet").innerText = total

        localStorage.setItem("amount",JSON.stringify(total))
    }
    else{
        alert("Insufficient Balance!")
    }
    
}