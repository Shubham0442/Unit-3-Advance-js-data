// Store the wallet amount to your local storage with key "amount"


let h1 = JSON.parse(localStorage.getItem("amount"))

document.querySelector("#wallet").textContent = h1


document.querySelector("#add_to_wallet").addEventListener("click", addingMoney)

function addingMoney(){
    let amountToAdd = document.querySelector("#amount").value 
     

    localStorage.setItem("amount",JSON.stringify(amountToAdd))

    window.location.reload()
}