const APIKey="cb47c5d454df45b377196240b0494ace";
const url="https://api.openweathermap.org/data/2.5/weather?q=jabalpur&appid=cb47c5d454df45b377196240b0494ace&units=metric";



const container=document.querySelector(".container");
const btn=document.querySelector("button");
const input=document.querySelector("input");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.querySelector(".humidity-val");
const wind=document.querySelector(".speed-val");
const image=document.querySelector(".image");
const notFound=document.querySelector(".not-found");
const weatherDetails=document.querySelector(".weather-details");
const weatherBox=document.querySelector(".weather-box");


async function getData(){
    const city=input.value;
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb47c5d454df45b377196240b0494ace&units=metric`);
    // console.log(res);
    let data= await res.json();
    // console.log(data);
    console.log(data.cod);
    if(data.cod==="404"){
        notFound.style.display="block";
        weatherBox.classList.add("hide");
        humidity.classList.add("hide");
        wind.classList.add("hide");
        container.style.height="24rem";
    }else{
        notFound.style.display="none";
        weatherBox.classList.remove("hide");
        weatherDetails.classList.remove("hide");
        humidity.classList.remove("hide");
        wind.classList.remove("hide");
        container.style.height="31.9rem";
        temperature.innerText=Math.floor(data.main.temp)+"°C";
        console.log(data.main.temp);
        description.innerText=data.weather[0].main;
        console.log(data.weather[0].main);
        humidity.innerText=data.main.humidity+"%";
        console.log(data.main.humidity);
        wind.innerText=data.wind.speed+" m/s";
        console.log(data.wind.speed);
        console.log(data.name);
        switch (data.weather[0].main){
            case 'Clear':
                image.src="assets/clear.png";
                break;
            case 'Clouds':
                image.src="assets/cloud.png";
                break;
            case 'Haze':
                image.src="assets/mist.png";
                break;
            case 'Rain':
                image.src="assets/rain.png";
                break;
            case 'Snow':
                image.src="assets/snow.png";
                break;
        }
    }
}

btn.addEventListener("click",function(){
    console.log(input.value);
    getData();
})
input.addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        getData();
    }
})