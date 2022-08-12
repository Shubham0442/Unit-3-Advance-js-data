
let showResults = async(url) =>{
    try {
        
        let res = await fetch(url)
        let data = await res.json() 
        // console.log(data)
        return data

    } catch (error) {
        
        console.log("err:", error)
    }
}


let showNews = async (url)=>{
    try {
        
        let res = await fetch(url)
        let data = await res.json() 
        // console.log(data)
        return data

    } catch (error) {
        
        console.log("err:", error)
    }
}

let append = (data,results)=>{

    results.innerHTML = null;
     data.map((elem)=>{
        let img = document.createElement("img")
        img.src = elem.urlToImage
    
       let title1 = document.createElement("h3")
       title1.innerText = elem.title
    
       let discription = document.createElement("p")
       discription.innerText = elem.description 

       let div = document.createElement("p") 

       div.append(title1,img, discription)

       results.append(div)
     })
   
}




export {showNews,showResults,append} 


