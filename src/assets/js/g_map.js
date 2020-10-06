if ($(window).width() < 767) {
    var latitud = '40.208052';
    var longitud = '-4.058291';
}else if ($(window).width() > 767 && $(window).width() < 991) {
    var latitud = '40.208052';
    var longitud = '-4.063291';
}else{
    var latitud = '40.208052';
    var longitud = '-4.068291';
};

var map;
function initialize() {
    var mapOptions = {
        zoom: 16,
        scrollwheel: false,
        center: new google.maps.LatLng(latitud, longitud),
        //center: new google.maps.LatLng(-34.4453626, -58.868893),
        
        
        styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#50a5d1"
            },
            {
                "saturation": 50
            },
            {
                "gamma": 0
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#333333"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "weight": 0.5
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": 50
            },
            {
                "gamma": 1
            }
        ]
    }
]                       
    };
   

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

     var myLatLng = {lat: 40.208052, lng: -4.058291};
     
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() { initialize(); });
                        


