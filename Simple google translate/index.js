


// function read (id){
//     return document.getElementById(id).value
//  }



function changeTheme (){
    let theme = document.querySelector("#Change_theme").value
    let body = document.querySelector("body")

    if(theme == "Dark")
    {
        body.style.backgroundColor = "black"
        body.style.color = "white"
        document.getElementById("input-text").style.backgroundColor = "black"
        document.getElementById("input-text").style.color = "white"
        document.querySelector("#output").style.border = "1px solid white"
    }
    else if(theme == "Regular")
    {
        body.style.backgroundColor = "white"
        body.style.color = "black"
        document.getElementById("input-text").style.backgroundColor = "white"
        document.getElementById("input-text").style.color = "black"
        
    }


}

let id
  async function Translate(){
      
     //1. text to translate 

     try{
         //const input = read("input-text")
         const input = document.getElementById("input-text").value

          console.log("input", input) 

        //   const inputLan = read("inputLan")
        //   const outLan = read("outLan")

          const inputLan = document.getElementById("inputLan").value
          const outLan = document.getElementById("outLan").value


         //post request
         const res = await fetch("https://libretranslate.de/translate",{
             method: "POST",
             body: JSON.stringify({  
                     q: input,
                     source: inputLan,
                     target:outLan,
                     format:"text",
                 }),
                 //Additional info about request that server might need to know
              headers:{

                 "Content-Type":"application/json"

              }
         })
         const data = await res.json();
         append (data)
         console.log("data", data)
         // document.querySelector("#output").innerText = data.translatedText
     }catch(err){
          console.log("err",err)
     }

   }

   function append (data)
   {
    document.querySelector("#output").innerHTML = null

       console.log(data)
    //    let p = document.createElement("p")
    //    p.innerText = data.translatedText

       //document.querySelector("#output").append(p)
       document.querySelector("#output").innerText = data.translatedText
   }

   async function main()
   {
       let data = await Translate()
        if(data === undefined)
        {
            return false
        }
        append (data)

   }

function debounce (fun,delay)
{    
    if(id)
    {
        clearTimeout(id)
    }


    id =  setTimeout (function (){
        
          fun()
     },delay)
}
