

    let getData = async(url) =>{
        try{
            let res = await fetch(url);
            let data = await res.json()
            console.log(data)
            return data
        }catch (err){
            console.log(err)
        }
        
    }
    


let append = (data, container) =>{

    //console.log(data)
    container.innerHTML =null
    data.meals.map(({strMeal,strMealThumb,strArea,strCategory,strInstructions}) =>{

          let box1 = document.createElement("div")
         let box2 = document.createElement("div")
        let box = document.createElement("div")

        let p = document.createElement("h2")
        p.innerText = `${strMeal}`

        let image = document.createElement("img")
        image.src = strMealThumb 

        let Area = document.createElement("p")
        Area.innerText = `Locality: ${strArea}` 

        let category = document.createElement("p")
        category.innerText = `Category: ${strCategory}`
        
        let procedure = document.createElement("h3")
        procedure.innerText= "How to Prepare:"

        let inst = document.createElement("p") 
        inst.innerText = `${strInstructions}`

       //strMealThumb
       //strIngredient1
       //strYoutube
       //strCategory
       //strArea
        box1.append(image)
        box2.append(p,Area,category,procedure,inst)
        box.append(box1,box2)
        container.append(box)
    })
}

export {getData, append}