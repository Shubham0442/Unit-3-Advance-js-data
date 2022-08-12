
let getData = async(url) =>{
   try {
       
       let res = await fetch(url)
       let data = await res.json ()

       console.log(data)

       return data
       
   } catch (error) {
       console.log("err",error)
   }
}

let append = (data, container) =>{

    console.log(data)

    data.map(({title,image}) =>{

        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = image
        
        let name = document.createElement("p")
        name.innerText = title

        div.append(img,name)

        container.append(div)
    })
}
    //container.append(data)


export {getData, append}