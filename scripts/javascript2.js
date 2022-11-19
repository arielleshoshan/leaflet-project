//Second Map//
let map = L.map('map2').setView([37.994418, 140.359107], 4.41);

L.tileLayer('https://api.mapbox.com/styles/v1/ashoshan/clal99ipu000d16plpooag1ha/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXNob3NoYW4iLCJhIjoiY2xhbDk0N3NiMDMwMDN2cXUxMTBxd3VxdCJ9.2B9PFpYsCq73M5Hl_-JPSw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

//for loop//
for ( let i = 0; i < places.length; i++){
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +    places[i].descrip + '</p>')
  .addTo( map );
}
