// Map of Jupiter 11.88 //
let map = L.map('map').setView([26.921969, -80.079412], 11.88);

L.tileLayer('https://api.mapbox.com/styles/v1/ashoshan/clal99ipu000d16plpooag1ha/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXNob3NoYW4iLCJhIjoiY2xhbDk0N3NiMDMwMDN2cXUxMTBxd3VxdCJ9.2B9PFpYsCq73M5Hl_-JPSw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

// Markers & Popups //
//Lighthouse//
let marker1 = L.marker([26.948521187605124, -80.08448378743266]).addTo(map);
marker1.bindPopup("<b>Jupiter Inlet Lighthouse & Museum</b><br>I've toured this lighthouse several times. It shows you the entire town of Jupiter.").openPopup();

//Tequesta Table//
let marker2 = L.marker([26.957510086277487, -80.08413578743246]).addTo(map);
marker2.bindPopup("<b>Tequesta Table</b><br>My favorite place to eat for breakfast & lunch.");

//Riverbend//
let marker3 = L.marker([26.88465977599464, -80.05649634510466]).addTo(map);
marker3.bindPopup("<b>Loggerhead Marine Life Center</b><br>Loggerhead is home to the thousands of sea turtles that nest on Juno Beach. They release the turtles every year on the beach.");

//Juno Beach Pier//
let marker4 = L.marker([26.893230279527128, -80.0566702316109]).addTo(map);
marker4.bindPopup("<b>Juno Beach Pier</b><br>The pier in Jupiter. I have spent countless hours fishing off this pier.");
