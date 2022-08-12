
function orderFood () {
    let order = document.querySelector("#food").value 
     
    let status = "open"
    let time = Math.random()*10*1000

    let mypromise = new Promise(function (resolve, reject){

      setTimeout(function(){
          if(status === "open")
          {
              resolve(order)
          }
          else{
              reject()
          }
      },3000)



    })

   mypromise.then(function (res){
       console.log(`${res} is ready`)
   });




}
