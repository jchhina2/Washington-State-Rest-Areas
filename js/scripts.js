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
request.open('GET', 'https://jchhina2.github.io/Washington-State-Rest-Areas/js/map.json', true);
             
request.onload = function() {
  //Access the data
  const data = JSON.parse(this.response);

//Display the Rest Area points on the map
const restAreas = data.restAreas.map(restArea => {
  
  L.marker([restArea.lat, restArea.long]).bindPopup(`
      <h2>${restArea.name}</h2>
      <p>Comments: ${restArea.comments}</p>
  `).openPopup().addTo(myMap);
  });
}  

request.send();
