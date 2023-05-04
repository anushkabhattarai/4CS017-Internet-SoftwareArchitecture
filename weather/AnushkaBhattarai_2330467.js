// Get references to the HTML elements
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const timeElement = document.getElementById('time');
const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const timeString = `${hours}:${minutes}:${seconds}`;
timeElement.textContent = timeString;
const inputElement = document.getElementById('input');
const searchButton = document.getElementById('search');
const apiKey = '85ac3b41c207ea12f97f7ce66fa12c54';

// Add an event listener to the search button
searchButton.addEventListener('click', searchByCity);

// Define the searchByCity function
function searchByCity() {
  // Get the value of the input element and trim any whitespace
  const city = inputElement.value.trim();

  // Validate the user input
  if (!city) {
    alert('Please enter a valid city name');
    return;
  }

  // Construct the API URL with the user-specified city
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch the weather data for the user-specified city
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const timezoneOffset = data.timezone; // get timezone offset in seconds
      const date = new Date(); // get current date and time in local timezone
      const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000); // convert to UTC time in milliseconds
      const cityTime = new Date(utcTime + (timezoneOffset * 1000)); // convert to city time in milliseconds
      console.log(`The temperature in ${city} is ${temperature}°C`);

      // Update the city name and temperature in the HTML
      cityElement.textContent = city;
      temperatureElement.textContent = `${temperature} °C`;
      timeElement.textContent = `Current time: ${cityTime.toLocaleTimeString()}`;
    })
    .catch(error => {
      console.log('An error occurred while fetching weather data:', error);
      alert('Could not fetch weather data. Please try again later.');
    });
}



