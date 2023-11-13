function initMap() {
    var mapOptions = {
        center: { lat: 43.207337, lng: 76.670005 },
        zoom: 19
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var restaurantIcon = 'path/to/restaurant-icon.png';
    var parkIcon = 'path/to/park-icon.png';
    var landmarkIcon = 'path/to/landmark-icon.png';

    map.addListener('click', function (event) {
        var marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
            title: 'New Marker',
        });

        marker.addListener('click', function () {
            var infoWindow = new google.maps.InfoWindow({
                content: 'Marker Information goes here.'
            });
            infoWindow.open(map, marker);
        });
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map.setCenter(userLocation);

                var userMarker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Your Location',
                    icon: 'assets/user-icon.png'
                });
            },
            function (error) {
                console.error('Error: The Geolocation service failed.');
            }
        );
    } else {
        console.error('Error: Your browser doesn\'t support geolocation.');
    }
}
