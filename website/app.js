/* Global Variables */

/* Function to POST data to application TODO*/

/* Function to GET data from web API OpenWeatherMap*/
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=5797794e603dad693680b2137143003c';

const getWeather = async (baseURL, zip, key) => {

    const res = await fetch(baseURL + zip + key)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();