const showLocation = () => {
  // The Little Den coordinates
  const coordinates = [120.61154, 16.411631];
  // Make a new map layer
  const map = new ol.Map({
    // Get the div with id = map from the html file
    target: 'map',
    // Render a layer of the base map into the map id
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      // Baguo City Coordinates
      center: ol.proj.fromLonLat(coordinates),
      zoom: 16,
    }),
  });

  // Create a marker for the map
  const marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat(coordinates)),
  });

  // Customize the marker's appearance
  marker.setStyle(
    new ol.style.Style({
      image: new ol.style.Icon({
        src: 'assets/map-marker-alt-solid.svg',
      }),
    })
  );

  const vectorSource = new ol.source.Vector({
    features: [marker],
  });

  const markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
  });

  map.addLayer(markerVectorLayer);
};

showLocation();
