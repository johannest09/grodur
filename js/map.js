
function initMap() {
    var grodur = { lat: 64.136742, lng: -20.312035 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: grodur,
        zoom: 12,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }
    });
    
    new google.maps.Marker({
        position: grodur,
        map: map,
        title: 'Essensia',
        label: {
            text: '1',
            color: 'white'
        },
    });


    


    

    
}