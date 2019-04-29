// console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");
const markerFactory = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoibmoyMjk2IiwiYSI6ImNqdjJrZWZsMzI1bmIzeWxqc2EwaDk2YjgifQ.8YeZyhVLgBQ9jPLIb7eR6w';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = markerFactory("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
