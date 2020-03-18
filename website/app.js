/* Global Variables */

/* Function to POST data to application */
const postData = async (url = '', data = {}) => {
    console.log(data)
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
    }
}

/* Function to GET data from web API OpenWeatherMap */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=5797794e603dad693680b2137143003c';
let units = '&units=imperial'

const getWeather = async (baseURL, zip, key) => {

    const res = await fetch(baseURL + zip + units + key)
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

/* Add event listener to generate new entry */
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const zip =  document.getElementById('zip').value;
  getWeather(baseURL, zip, apiKey)
  .then(function(data){

    /* Build weather journal entry */

    // Get the current date
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    // Get the temperature
    let currentTemp = data.main.temp;

    // Get the user input
    let feelings =  document.getElementById('feelings').value;

    // Post data to app
    postData('/', {temperature: currentTemp, date: newDate, feelings: feelings} );
  })
  .then(
      updateUI()
  )
}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    console.log(allData);
    document.getElementById('date').innerHTML = allData[allData.length - 1].date;
    document.getElementById('temp').innerHTML = allData[allData.length - 1].temperature;
    document.getElementById('content').innerHTML = allData[allData.length - 1].feelings;

  }catch(error){
    console.log("error", error);
  }
}