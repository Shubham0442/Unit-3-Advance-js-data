

var image = document.querySelector("#image")
function check (){
    return true
}

const myPromice = new Promise (function(resolve,reject){
    let  tranStatus = false

    setTimeout(function(){
        if(tranStatus = check)
        {
            resolve("payment successful")
        }
        else{
            reject("Payment failed")
        }
    },3000)

})

myPromice
.then(function(res){
    console.log(res)
    image.src = "https://media3.giphy.com/media/K3RxMSrERT8iI/giphy.webp?cid=ecf05e47vh723k5qhyr1cgev8ioyqul6uxsmjyftf18e985r&rid=giphy.webp&ct=g"
})
.catch(function (err)
{
    console(err)
})