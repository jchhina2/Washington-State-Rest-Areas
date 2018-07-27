// Set the map variable
const myMap = L.map('map');

// Load the basemap
const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Add basemap to map id
myBasemap.addTo(myMap);

// Set view of the map
myMap.setView([47.281, -123.058], 8);

//Request the JSON data
const request = new XMLHttpRequest();
request.open('GET', 'map.json, true);
             
request.onload = function() {
  //Access the data
  const data = JSON.parse(this.response);
}

request.send();
  
