//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY]
    //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=mahindra%20thar&key=[YOUR_API_KEY]

    
    const api = "AIzaSyBAuPiIk_CEONQ07Wk_Drr93RnlyzGktrE"


     const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=in&videoCategoryId=17&key=${api}`


     fetch (url)
     .then((res) =>{
         return res.json()
     })
     .then((res) =>{

        let data = res.items
         console.log(data)
         display(res.items)
     })
     .catch((err) =>{
        console.log("err",err)
     })

     const display = (videos) =>{
    
        let showVideos = document.querySelector("#show")
        showVideos.innerHTML = null

        videos.map(({id, snippet: {title,channelTitle}}) =>{
          
            let box = document.createElement("div")

           let iframe = document.createElement("iframe")
           iframe.src = `https://www.youtube.com/embed/${id}`
           iframe.width = "100%"
           iframe.height = "70%"
           iframe.allow = "fullscreen"

           let name = document.createElement("h5")
           name.innerText = title 
           
           let channel = document.createElement("p")
           channel.innerText = channelTitle

           box.append(iframe, name, channelTitle) 

           let data = 
           {
                id,
                title,
                channelTitle
           }

           box.onclick = () =>{
               showVideos(data)
           }

           showVideos.append(box)

        })
        

     }

     //https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=in&videoCategoryId=17&key=AIzaSyBAuPiIk_CEONQ07Wk_Drr93RnlyzGktrE

    const searchVideos = async () => {
        try{  

            const q = document.querySelector("#query").value 
            
            const res  = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${api}`);
              const data = await res.json ();
            console.log(data.items)
            append(data.items)
        }catch (err){
           console.log(err)
        }
    };

    const append = (videos) =>{

         let showVideos = document.querySelector("#show")
         showVideos.innerHTML = null

         videos.forEach(({id: {videoId}, snippet: {title , thumbnails:{high:{url}}}}) => {

            let div = document.createElement("div")
            // let iframe = document.createElement("iframe")
            //  iframe.src = `https://www.youtube.com/embed/${videoId}`
            //  iframe.width = "100%"
            //  iframe.height = "70%" 
            //  iframe.allow = "fullscreen"

             let thumb = document.createElement("img")
              thumb.src = url

             let name = document.createElement("h5")
             name.innerText = title;

             div.append(thumb, name) 

             let data = {
                 
                 title,
                 videoId
             };

             div.onclick = () =>{
                ShowVideos(data)
             };

             showVideos.append(div)
         });

        
    };

    const ShowVideos = (x) =>{
        window.location.href = "video.html";
        localStorage.setItem("video",JSON.stringify(x))
    }

    // GET https://youtube.googleapis.com/youtube/v3/videos/getRating?id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=AIzaSyBAuPiIk_CEONQ07Wk_Drr93RnlyzGktrE HTTP/1.1
  //https://youtube.googleapis.com/youtube/v3/videos/getRating?id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=AIzaSyBAuPiIk_CEONQ07Wk_Drr93RnlyzGktrE
    // Authorization: Bearer [YOUR_ACCESS_TOKEN]
    // Accept: application/json
    
   