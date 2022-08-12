
//const url = "https://api.openweathermap.org/data/2.5/weather?q=akola&appid=007c87ddfbc8124459fdadd57b1578fc"
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


function getData ()
{
    let city = document.querySelector("#city").value
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=007c87ddfbc8124459fdadd57b1578fc`
     
    fetch(url)
        .then(function (res){
            return res.json();
        })
        .then(function (res){
            console.log("res:", res)
            append (res)
            
        })
        .catch(function (err){
            //console.log("err:", err)
        })


}


function getDataLocation (lat,lon)
{
    
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=007c87ddfbc8124459fdadd57b1578fc`
     
    fetch(url)
        .then(function (res){
            return res.json();
        })
        .then(function (res){
            console.log("res:", res)
            append (res)
            
        })
        .catch(function (err){
            //console.log("err:", err)
        })


}







function getWeeklyForecast (lat,lon)
{
     
    const url =
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,current&appid=007c87ddfbc8124459fdadd57b1578fc`


    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log("94 res:", res)
        append1week(res)
    })
    .catch(function(err){
        console.log("err:", err)
    })
}


function append1week(data1)
{
    document.querySelector("#container1").innerHTML = null
    console.log(data1)

    let arr = ["Today", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    let obj = 
    {
        Clear: '<i class="fa-solid fa-sun"></i>',
        Clouds: '<i class="fa-solid fa-cloud"></i>',
        Rain: '<i class="fa-solid fa-cloud-showers-heavy"></i>'
        
    }

    // var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // var d = new Date(dateString);
    // var dayName = days[d.getDay()];
    
    
       for(let i=0; i<data1.daily.length; i++)
       {
        let day  = document.createElement("p")
        let actual = document.createElement("p")

        actual.innerText = `${data1.daily[i].weather[0].main}`
        
        
        day.innerText = arr[i]
        day.setAttribute("id","day")
        let today = document.createElement("div")

        let minTemp = document.createElement("p")
         minTemp.innerText = `${Math.floor(data1.daily[i].temp.min - 273.15 )} °C`
         
        //  let icon = document.createElement("img")
        //  icon.src = "<i class="fa-solid fa-cloud"></i>"

        var elem = document.createElement("div");

        for(var key in obj)
        {

            console.log(key)
            if(key === actual.innerText)
            {
                elem.innerHTML = obj[key]
                break;
            }
            else{
                elem.innerHTML = '<i class="fa-solid fa-cloud"></i>'
                // break;
            }
        }
        
        
         let maxTemp = document.createElement("p")
        maxTemp.innerText = `${Math.floor(data1.daily[i].temp.max - 273.15)} °C`

        today.append(day, elem, maxTemp,minTemp)
        document.querySelector("#container1").append(today)

       }
        

       
        

        // let minTemp = document.createElement("p")
        // minTemp.innerText = elem.daily.temp.min 

        //  

        // today.append(minTemp, maxTemp)

        
    
  
 }



function append (data){

    

    let container = document.querySelector("#container")
    let map = document.getElementById("gmap_canvas")
    container.innerHTML = null


    let city = document.createElement("p")
    city.setAttribute("id","cityname")
    city.innerText = `City:  ${data.name}` 

    // let date1 = document.createElement(h5)
    // date1.innerText = new Date()

    


    let minTemp = document.createElement("p")
    minTemp.innerText = `Min Temp:    ${Math.floor(data.main.temp_min-273.15)}°C` 
    
    let maxTemp = document.createElement("p")
    maxTemp.innerText = `Max Temp:      ${Math.floor(data.main.temp_max-273.15)} °C` 

    let current = document.createElement("p")
    current.innerText = `Current Temp:     ${Math.floor(data.main.temp-273.15)} °C` 

    let humidity = document.createElement("p")
    humidity.innerText = `humidity:       ${data.main.humidity} % `

    let sunrise = document.createElement("p")
    var sec = data.sys.sunrise;
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();

    let risebox = document.createElement("div")
    risebox.innerHTML = '<i class="fa-regular fa-sun"></i>'

    sunrise.innerText = `.   Sunrise:        ${timestr}`

    risebox.append(sunrise)

    let sunset = document.createElement("p")
    var sec = data.sys.sunset;
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();

    var set = document.createElement("img");
    set.setAttribute("src", "https://www.vhv.rs/dpng/d/599-5992371_sunset-icon-png-transparent-png.png");
    set.setAttribute("height", "25");
    set.setAttribute("width", "25");

    sunset.innerText = `.   Sunset:       ${timestr}`

    let setdiv =  document.createElement("div")
    setdiv.append(set,sunset)

    let winddiv = document.createElement("div")
    winddiv.innerHTML = '<i class="fa-solid fa-wind"></i>'

    let wind = document.createElement("p")
    wind.innerText = `.   Wind Speed:${data.wind.speed} km/h`

    winddiv.append(wind)

    let cldiv = document.createElement("div")
    var elem = document.createElement("img");
    elem.setAttribute("src", "https://www.ironton.com/images/ITC/Thumbnails/CloudCommunications.png");
    elem.setAttribute("height", "25");
    elem.setAttribute("width", "25");
   
    
    let cloud = document.createElement("p")
    cloud.innerText = `.  cloud: ${data.clouds.all}`
     
    cldiv.append(elem,cloud)

   let weatherDiv =  document.createElement("div")
   weatherDiv.setAttribute("id","weatherDiv")

   weatherDiv.append(risebox,setdiv,winddiv,cldiv)

    let tempDiv = document.createElement("div")
    tempDiv.setAttribute("id", "tempDiv")
    tempDiv.append(minTemp, maxTemp, current, humidity)

    let infoDiv = document.createElement("div")
    infoDiv.setAttribute("id","infoDiv")
    infoDiv.append(tempDiv, weatherDiv)


    container.append(city,infoDiv)

    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}


console.log(new Date().toString())

function getWeather()
{
   
    navigator.geolocation.getCurrentPosition(success);

    function success (position)
    {
        var crd = position.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      getDataLocation (crd.latitude,crd.longitude) 

      getWeeklyForecast (crd.latitude,crd.longitude)
    }
        

}




