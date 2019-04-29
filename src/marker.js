
const mapboxgl = require("mapbox-gl");

function markerFactory(type, coordinateArr) {
  if (type === 'restaurant') {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinateArr);
  } else if (type === 'hotel') {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinateArr);
  } else if (type === 'activity') {
    console.log('hello');
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinateArr);
  }
}

module.exports = markerFactory;
