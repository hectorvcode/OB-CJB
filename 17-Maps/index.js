let marker, map;

function initMap() {

    const posicion = { lat: -25.344, lng: 131.031 };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    });
    //Obtener la geolocalización
    geoPosiciona()
}

function geoPosiciona(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation;
        const options =  { timeout: 60000 };
        const watchPos = geoLoc.watchPosition(centerMap, onError, options);
    } else {
        alert("Tu navegador no admite geolocalización");
    }
}

function centerMap(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos);
    map.setCenter(nuevaPos);
}

function onError(error){
    console.log("Se ha producido un error y lo hemos gestionado");
    console.error(error);
}