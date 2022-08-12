let searchImages = async(query) =>{
        
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=pBXoFIavV9E7HkhesTus_ZmYO4IvXIOS91CNacPDqG8`)
        let data = await res.json() 
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }

}

let sortPics = async (sort,query) =>{

    console.log(sort,query)
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&order_by=${sort}&client_id=pBXoFIavV9E7HkhesTus_ZmYO4IvXIOS91CNacPDqG8`)
        let data = await res.json() 
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

let filterPic = async (filters,query) =>{
    console.log(filters,query)
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&orientation=${filters}&client_id=pBXoFIavV9E7HkhesTus_ZmYO4IvXIOS91CNacPDqG8`)
        let data = await res.json() 
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

let append = (data, container) =>{

    container.innerHTML = null
    data.forEach(({alt_description, urls:{small}})=>{
        let div = document.createElement("div")
        div.setAttribute("id","box")
        let image = document.createElement("img")
            image.src = small 

            image.setAttribute("class","img")

        let h3 = document.createElement("h3")
          h3.innerText = alt_description 
          div.append(image,h3) 
        container.append(div)
    })
}

export {searchImages, append, sortPics, filterPic};