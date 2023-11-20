

// https://openweathermap.org/img/wn/10d@2x.png url for weather icons 

function search(){
    const clearSkyD = 'https://media.istockphoto.com/id/980782144/video/blue-sky-full-of-clouds-moving-right-to-left-cartoon-sky-background-flat-animation.jpg?s=640x640&k=20&c=Vs2E_as7jdxoIHdPppHNnU1sDXfBc_yhI8ER3rLrtdA='
    const clearSkyN = 'https://t4.ftcdn.net/jpg/00/91/11/93/360_F_91119370_ko1H3CVf97J44ASX3uKFPaEYOd7kL7Av.jpg'
    const fewCloudsD = 'https://cdn.openart.ai/stable_diffusion/a8a1b3cf2326fa6af2a6720bc7270c8db7c4bd61_2000x2000.webp'
    const fewCloudsN = 'https://storage.googleapis.com/pai-images/1fed06995f0944ce95a82bb903d64b2b.jpeg'
    const scatteredCloudsD = 'https://i.gifer.com/fetch/w300-preview/d7/d7c52cb78c9912ba739e590d0ad8e957.gif'
    const scatteredCloudsN = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXEKZ65g1a1q7jwpDvcqmVbycO93_J43HFQ&usqp=CAU'
    const brokenCloudsD = 'https://media.istockphoto.com/id/978958908/video/blue-sky-full-of-clouds-moving-right-to-left-cartoon-sky-background-flat-animation.jpg?s=640x640&k=20&c=Dm0VVLyH8CSfKOxQNfXj9FjM1tFht5pAfNVy6ujS4Z8='
    const brokenCloudsN = 'https://images.pond5.com/cartoon-flying-clouds-night-sky-footage-057850690_iconl.jpeg'
    const showerRainD = 'https://img.freepik.com/free-vector/clouds-with-rainfall-background-design_1017-33595.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais'
    const showerRainN = 'https://static.vecteezy.com/system/resources/previews/012/098/044/non_2x/illustration-of-heavy-rain-cloudy-weather-with-cartoon-animation-style-rainy-scenery-background-free-vector.jpg'
    const rainD = 'https://i.pinimg.com/736x/01/15/9c/01159c8e03793cd510cbfb9d4dd6467f.jpg'
    const rainN = 'https://static.vecteezy.com/system/resources/previews/013/409/254/non_2x/heavy-rain-in-dark-sky-rainy-season-clouds-and-storm-weather-nature-background-flood-natural-disaster-illustration-free-vector.jpg'
    const thunderStormD = 'https://st2.depositphotos.com/2435397/10290/i/950/depositphotos_102904902-stock-illustration-cartoon-scene-with-weather-storm.jpg'
    const thunderStormN = 'https://static.vecteezy.com/system/resources/thumbnails/000/298/249/small/qstw_0h0s_181002.jpg'
    const snowD = 'https://e1.pxfuel.com/desktop-wallpaper/220/6/desktop-wallpaper-falling-snow-animated-data-falling-snow-thumbnail.jpg'
    const snowN = 'https://img.freepik.com/free-vector/flat-design-winter-landscape_23-2148722444.jpg'
    const mistD = 'https://static.vecteezy.com/system/resources/thumbnails/003/320/985/original/cartoon-background-mountain-mist-silhouette-free-video.jpg'
    const mistN = 'https://images.pond5.com/4k-dark-forest-fog-trees-footage-086977843_iconl.jpeg'

    var imgsrc = 0

    let weatherData = input.value
    /* console.log(weatherData); */
    if(weatherData === input.value){
        const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherData}&appid=41acfc4079936578ea9b0a9d1843213b&units=metric`).then((response)=>{
            response.json().then((data)=>{
                /* console.log(data); */

                //details

                let cname = data.name
                console.log(cname);

                let state = data.weather[0].main
                console.log(state);

                let description = data.weather[0].description
                console.log(description);

                let icon = data.weather[0].icon
                console.log(icon);

                if(icon == '01d'){
                    imgsrc=clearSkyD
                }
                 if(icon == '01n'){
                    imgsrc=clearSkyN
                }
               else if(icon == '02d'){
                    imgsrc=fewCloudsD
                }
                else if(icon == '02n'){
                    imgsrc=fewCloudsN
                }
                else if(icon == '03d'){
                    imgsrc=scatteredCloudsD
                }
                else if(icon == '03n'){
                    imgsrc=scatteredCloudsN
                }
                else if(icon == '04d'){
                    imgsrc=brokenCloudsD
                }
                else if(icon == '04n'){
                    imgsrc=brokenCloudsN
                }
                else if(icon == '09d'){
                    imgsrc=showerRainD
                }
                else if(icon == '09n'){
                    imgsrc=showerRainN
                }
                else if(icon == '10d'){
                    imgsrc=rainD
                }
                else if(icon == '10n'){
                    imgsrc=rainN
                }
                else if(icon == '11d'){
                    imgsrc=thunderStormD
                }
                else if(icon == '11n'){
                    imgsrc=thunderStormN
                }
                else if(icon == '13d'){
                    imgsrc=snowD
                }
                else if(icon == '13n'){
                    imgsrc=snowN
                }
                else if(icon == '50d'){
                    imgsrc=mistD
                }
                else if(icon == '50n'){
                    imgsrc=mistN
                }
               
                let temp = data.main.temp
                console.log(temp);

                let feels = data.main.feels_like
                console.log(feels);

                let mintmp = data.main.temp_min
                console.log(mintmp);

                let maxtmp = data.main.temp_max
                console.log(maxtmp);

                let pressure = data.main.pressure
                console.log(pressure);

                let humidity = data.main.humidity
                console.log(humidity);

                let windspeed = data.wind.speed
                console.log(windspeed);

                result.innerHTML = `
                <div class="row mt-3">
                <!-- ======================= Temperature-display-section =================== -->
                    <div class="col-12">
                        <div class="main-display rounded-4 p-3">
                            <div class="place-name">
                                <h2 class="text-white fw-semibold fs-4 text-center mb-3">${cname}</h2>
                                <p class="text-white fw-semibold text-center m-0">Temperature in °C</p>
                            </div>
                            <div class="temp-digit text-center justify-content-center text-center align-items-baseline d-flex">
                                <h1 class=" text-center ">${temp}</h1>
                                <span class="  text-center">°</span>
                            </div>

                            <div class="low-high d-flex justify-content-around">
                                <div class="low text-center justify-content-center text-center align-items-baseline d-flex">
                                    <p class="text-white m-0 fw-medium ">Lowest :&nbsp;</p>
                                    <span class="fw-semibold fs-2">${mintmp}</span><span class="fw-semibold fs-2">°</span>
                                </div>
                                <div class="feels-like text-center justify-content-center text-center align-items-baseline d-flex ">
                                    <p class="text-white  m-0 fw-medium">Feels like :&nbsp;</p>
                                    <span class="fw-semibold fs-2">${feels}</span><span class="fw-semibold fs-2">°</span>
                                </div>
                                <div class="high text-center justify-content-center text-center align-items-baseline d-flex">
                                    <p class="text-white m-0 fw-medium">Highest :&nbsp;</p>
                                    <span class="fw-semibold fs-2">${maxtmp}</span><span class="fw-semibold fs-2">°</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                        <div class="row mt-1 g-4">
                    <!-- ========================== Temperature-img-section =================== -->
                            <div class="col-lg-6 col-md-6">
                                <div class="temp-decptn-display p-3 rounded-4 ">
                                    <div class="decptn-head mb-2">
                                        <h2 class="text-white fw-semibold fs-4 text-center m-0">${state}</h2>
                                    </div>
                                    <div  class="temp-icon text-center mb-3">
                                    <img class="rounded-4 " src="${imgsrc}" alt="">
                                        
                                    </div>
                                    <div class="decptn">
                                        <p class=" fw-semibold text-center m-0">${description}</p>
                                    </div>
                                </div>
                            </div>
    
                    <!-- =================== More-information-section ======================== -->
                            <div class="col-lg-6 col-md-6">
                                <div class=" more-info-display align-items-center ps-4 p-3 rounded-4">
                                    <div class="infos text-center justify-content-center align-items-baseline d-flex">
                                        <p class="text-white m-0 fw-medium fs-5">Pressure :&nbsp;</p>
                                        <span class="fw-semibold fs-1">${pressure}</span>&nbsp;<span class="fw-semibold text-white fs-5">hPa</span>
                                    </div>
                                    <div class="infos text-center justify-content-center align-items-baseline d-flex">
                                        <p class="text-white m-0 fw-medium fs-5">Humidity :&nbsp;</p>
                                        <span class="fw-semibold fs-1">${humidity}</span>&nbsp;<span class="fw-semibold text-white fs-5">%</span>
                                    </div>
                                    <div class="infos text-center justify-content-center align-items-baseline d-flex">
                                        <p class="text-white m-0 fw-medium fs-5">Wind speed :&nbsp;</p>
                                        <span class="fw-semibold fs-1">${windspeed}</span>&nbsp;<span class="fw-semibold text-white fs-5">m/s</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
                const mainContent = document.getElementById("result");
                mainContent.classList.toggle("hidden");

                /* const footerContent = document.getElementsById("foot");
                footerContent.classList.toggle("footer1"); */
            })
        }
       
        )
    }
    else{
        alert('Invalid input!')
    }
}