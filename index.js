console.log('Hello miss Minakshi');


const API_KEY="f529c6ae35e00e62dca7b6c624cd35f5";
function renderWeatherInfo(data){
     let newPara = document.createElement('p');
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

document.body.appendChild(newPara);
}

async function fetchWeatherDetails() { 
    try{
        let city = "mumbai";

const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

const data = await response.json();
console.log("Weather data:->" , data);

//let newPara = document.createElement('p');
//newPara.textContent = '${data?.main?.temp.toFixed(2)} °C'

//document.body.appendChild(newPara);
  renderWeatherInfo(data);

    }
    catch(err) {

    }
}
    async function getCustomWeatherDetails(){
        try{
        let latitude = 15.6333;
        let longitude = 18.7333;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

        let data = await result.json();

        console.log(data);
    }
    catch(err){
        console.log("Error Found" , err);
    }
    }

    function switchTab(clickedTab) {

        apiErrorContainer.classList.remove("active");

        if (clickedTab != currentTab){
            currentTab.classList.remove("current-tab");
            currentTab = clickedTab;
            currentTab.classList.add("current-tab");

        

            if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");}
            
            else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            // getFromSessionStorage();
        }
        
            
        // console.log("Current Tab", currentTab);
    }
}
function getLocation(){
    if(navigator.getlocation) {
        navigator.getlocation.getCurrentPosition(showPosition);

    }
    else {
        console.log("No getLocation Support");
    }
}
function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);

}