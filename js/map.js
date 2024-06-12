function initMap() {
    // 지도 옵션 설정
    var mapOptions = {
        center: { lat: 37.5665, lng: 126.9780 }, // 서울의 위도와 경도
        zoom: 12 // 줌 레벨 설정
    };

    // 지도를 표시할 div 요소를 선택하고, 지도 객체 생성
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // 마커 옵션 설정
    var markerOptions = {
        position: mapOptions.center, // 마커를 지도 중심에 설정
        map: map,
        title: "서울" // 마커에 마우스를 올리면 나타나는 타이틀
    };

    // 마커 객체 생성
    var marker = new google.maps.Marker(markerOptions);
}

// HTML 문서가 로드된 후 initMap 함수 호출
document.addEventListener("DOMContentLoaded", function() {
    initMap();
});
