// your_script.js
// Map initialization
var map = new ol.Map({
    target: 'map',
    
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([0, 0]),
      zoom: 4
    })
  });
  
  // Add the overlay to the map
 
 document.getElementById('button1').addEventListener('click',function(){
  alert("murthyyyyyy");
 })
  // Create a point feature
var pointFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([10, 10]))
  });
  
  // Create a polygon feature
  var polygonFeature = new ol.Feature({
    geometry: new ol.geom.Polygon([
      [
        ol.proj.fromLonLat([0, 0]),
        ol.proj.fromLonLat([20, 0]),
        ol.proj.fromLonLat([20, 20]),
        ol.proj.fromLonLat([0, 20]),
        ol.proj.fromLonLat([0, 0])
      ]
    ])
  });
  
  // Create a vector source and add the features
  var vectorSource = new ol.source.Vector({
    features: [pointFeature, polygonFeature]
  });
  
  // Create a vector layer and add the source
  var vectorLayer = new ol.layer.Vector({
    source: vectorSource
  });
  
  // Add the vector layer to the map
  map.addLayer(vectorLayer);
  
