
async function getData() {
    const city = document.querySelector("input").value

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=dc52c5a6478c47ad977103351242711&q=${city}&aqi=no`)
    const data = await response.json()
    console.log(data)
    const weather = document.querySelector(".weather")
    
    weather.innerHTML = `<h3>Location : ${data.location.name}</h3>
    <h3><strong>Country : ${data.location.country}</h3>
    <h2>Temperature : ${data.current.temp_c}</h2>
    `
    
}