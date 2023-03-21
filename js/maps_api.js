'use strict';

function initMap() {
    const center = new google.maps.LatLng(48.20747640585999, 16.394326284524464);
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "efe74497cab524d5",
        zoom: 12,
        center: center,
        // styles: [
        //     {
        //       "elementType": "geometry",
        //       "stylers": [
        //         {
        //           "color": "#242f3e"
        //         }
        //       ]
        //     },
        //     {
        //       "elementType": "labels.text.fill",
        //       "stylers": [
        //         {
        //           "color": "#746855"
        //         }
        //       ]
        //     },
        //     {
        //       "elementType": "labels.text.stroke",
        //       "stylers": [
        //         {
        //           "color": "#242f3e"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "administrative.locality",
        //       "elementType": "labels.text.fill",
        //       "stylers": [
        //         {
        //           "color": "#d59563"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "poi",
        //       "elementType": "labels.text.fill",
        //       "stylers": [
        //         {
        //           "color": "#d59563"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "poi.park",
        //       "elementType": "geometry",
        //       "stylers": [
        //         {
        //           "color": "#263c3f"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "poi.park",
        //       "elementType": "labels.text.fill",
        //       "stylers": [
        //         {
        //           "color": "#6b9a76"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "road",
        //       "elementType": "geometry",
        //       "stylers": [
        //         {
        //           "color": "#38414e"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "road",
        //       "elementType": "geometry.stroke",
        //       "stylers": [
        //         {
        //           "color": "#212a37"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "road",
        //       "elementType": "labels.text.fill",
        //       "stylers": [
        //         {
        //           "color": "#9ca5b3"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "road.highway",
        //       "elementType": "geometry",
        //       "stylers": [
        //         {
        //           "color": "#746855"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "road.highway",
        //       "elementType": "geometry.stroke",
        //       "stylers": [
        //         {
        //           "color": "#1f2835"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "road.highway",
        //       "elementType": "labels.text.fill",
        //       "stylers": [
        //         {
        //           "color": "#f3d19c"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "transit",
        //       "elementType": "geometry",
        //       "stylers": [
        //         {
        //           "color": "#2f3948"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "transit.station",
        //       "elementType": "labels.text.fill",
        //       "stylers": [
        //         {
        //           "color": "#d59563"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "water",
        //       "elementType": "geometry",
        //       "stylers": [
        //         {
        //           "color": "#17263c"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "water",
        //       "elementType": "geometry.fill",
        //       "stylers": [
        //         {
        //           "color": "#17263c"
        //         },
        //         {
        //           "visibility": "on"
        //         },
        //         {
        //           "weight": 6
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "water",
        //       "elementType": "geometry.stroke",
        //       "stylers": [
        //         {
        //           "color": "#edeff3"
        //         },
        //         {
        //           "saturation": 40
        //         },
        //         {
        //           "lightness": 25
        //         },
        //         {
        //           "visibility": "on"
        //         },
        //         {
        //           "weight": 7
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "water",
        //       "elementType": "labels.text.fill",
        //       "stylers": [
        //         {
        //           "color": "#515c6d"
        //         }
        //       ]
        //     },
        //     {
        //       "featureType": "water",
        //       "elementType": "labels.text.stroke",
        //       "stylers": [
        //         {
        //           "color": "#17263c"
        //         }
        //       ]
        //     }
        // ]
    });

    const imgMarker = './assets/img/svg/Pin.svg';
    new google.maps.Marker({
        position: center,
        icon: imgMarker,
        map: map,
        opacity: 0.7,
        width: '12px'
    });
}

window.initMap = initMap;


