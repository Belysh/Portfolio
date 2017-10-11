let startMap = function () {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.459285, lng: 35.054280},
        zoom: 14,
        scrollwheel: false,
        styles: [
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#6f6d6e"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f1f1f1"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a0d6d1"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "0"
                },
                {
                    "color": "#86a77a"
                }
            ]
        }
          ]
      });
      var markerImg = "assets/images/map_marker.svg";
      var markerLocation = new google.maps.LatLng(48.466589, 35.035453);
      var markerContent = "Буду рад Вас видеть";
      var infowindow = new google.maps.InfoWindow();
      
      var marker = new google.maps.Marker({
        position: markerLocation,
        icon: markerImg,
        map: map,
        animation: google.maps.Animation.Drop,
        title: markerContent
      });
      
      marker.addListener("click", function() {
        infowindow.setContent("Буду рад Вас видеть");
        infowindow.open(map, marker);
        marker.setAnimation(google.maps.Animation.BOUNCE);
      
        setTimeout(function() {
          marker.setAnimation(null);
        }, 2000);
      });
}

let addListener = function () {
    google.maps.event.addDomListener(window, 'load', startMap);
}

let mapInit = function () {
    if (document.getElementById('map')) {
        addListener();
    }
}

module.exports = mapInit;