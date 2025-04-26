// Function to update time
function updateTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('time').innerHTML = hours + ':' + minutes + ' ' + ampm;
}

// Function to change wave interval (for demonstration purposes)
function updateWaveInterval() {
    const intervals = ['5 min', '10 min', '12 min', '15 min'];
    let randomIndex = Math.floor(Math.random() * intervals.length);
    document.getElementById('wave-interval').innerHTML = 'Wave Interval: ' + intervals[randomIndex];
}

// Function to simulate tide information
function updateTideInfo() {
    const tides = ['High, Rising', 'Low, Falling', 'High, Falling', 'Low, Rising'];
    let randomIndex = Math.floor(Math.random() * tides.length);
    document.getElementById('tide-info').innerHTML = 'Tide: ' + tides[randomIndex];
}

// Function to simulate location (could be dynamic with geolocation in real app)
function updateLocation() {
    document.getElementById('location').innerHTML = 'Location: Island Beach State Park';
}

// Function to simulate weather
function updateWeather() {
    document.getElementById('weather').innerHTML = 'Weather: 72°F, Sunny';
}

// Function to simulate drills in Training Mode
function startDrill() {
    const drills = ['Wave Pop Up Drill', 'Duck Dive Drill', 'Paddle Technique Drill'];
    let randomIndex = Math.floor(Math.random() * drills.length);
    document.getElementById('drill').innerHTML = drills[randomIndex];
}

// Interval updates
setInterval(updateTime, 1000);
setInterval(updateWaveInterval, 60000); // Update wave interval every minute
setInterval(updateTideInfo, 60000); // Update tide info every minute
setInterval(updateLocation, 60000); // Update location every minute
setInterval(updateWeather, 60000); // Update weather every minute

// Button click for drills
document.getElementById('start-drill').addEventListener('click', startDrill);

// Initialize the app with default values
updateTime();
updateWaveInterval();
updateTideInfo();
updateLocation();
updateWeather();
