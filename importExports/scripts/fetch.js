// import { url } from "inspector";

let getData = async(url) =>{
    try{
        let res = await fetch(url);
        let data = await res.json()
        return data
    }catch (err){
        console.log(err)
    }
    
}

let append = (data, container) =>{
     
    
    data.map(({title}) =>{

        let div = document.createElement("div")
        div.innerText = title

        container.append(div)
    })
}

export {getData,append}