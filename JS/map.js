document.addEventListener('DOMContentLoaded', function () {
    kakao.maps.load(function() {
        var mapContainer = document.getElementById('map'),
            mapOption = {
                center: new kakao.maps.LatLng(37.5665, 126.9780),
                level: 3
            };

        var map = new kakao.maps.Map(mapContainer, mapOption);

        var mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        var markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);

        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);
    });
});
