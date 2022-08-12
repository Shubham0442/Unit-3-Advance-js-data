const url = "https://reqres.in/api/users?page=2"
const container = document.querySelector("#container")
// let res;


fetch(url)
.then(function (res){
    return res.json();
})
.then(function (res){
    console.log("res:", res)
    appendData (res.data)
})
.catch(function (err){
    // console.log("err:", err)
})



function appendData (data){
    console.log(data)
    
    data.forEach(function(elem){

        let div = document.createElement("div")
        
        let first_name = document.createElement("p")
        first_name.innerText = elem.first_name

        let last_name  = document.createElement("p")
        last_name.innerText = elem.last_name

        let avatar = document.createElement("img")
        avatar.src = elem.avatar

        div.append(avatar, first_name, last_name);

        container.append(div)

    })



}