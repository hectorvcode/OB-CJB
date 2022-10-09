/**
- Crea un mapa en HTML
- Pon chinchetas en tus 3 lugares favoritos del planeta tierra
 */

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const colombia = { lat: 3.667341325557743, lng: -73.46650054795327 };
  const sanAndres = { lat: 12.58063916161434, lng: -81.68818008653908 };
  const atacames = { lat: 0.8931796263931798, lng: -79.84699805687391 };
  const villabo = { lat: 4.189054569912442, lng: -73.69627297961782 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: colombia,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: colombia,
    map: map,
  });
  const marker1 = new google.maps.Marker({
    position: sanAndres,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: atacames,
    map: map,
  });
  const marker3 = new google.maps.Marker({
    position: villabo,
    map: map,
  });
}

window.initMap = initMap;
