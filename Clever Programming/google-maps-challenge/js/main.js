// Required by google script (It's called there)

function initMap() {
    const currentPlace = {lat: 34.063380, lng: -118.358080};
    map = new google.maps.Map(document.getElementById('map'), {
        center: currentPlace,
        zoom: 11,
        mapTypeId: 'roadmap'
    });
    const latlng = new google.maps.LatLng(parseFloat(currentPlace.lat), parseFloat(currentPlace.lng));
    createMarker(latlng, 'los ang', 'USA');
}

// Add marker for current place
function createMarker(latlng, name, address) {
    console.log('0Here');
    var html = "<b>" + name + "</b> <br/>" + address;
    var marker = new google.maps.Marker({
      map: map,
      position: latlng
    });
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(html);
      infoWindow.open(map, marker);
    });
    // markers.push(marker);
    console.log('Here');
}