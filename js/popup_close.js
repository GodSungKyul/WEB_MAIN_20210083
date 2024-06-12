var closeTime; // 시간 정보
var closeTimeInSeconds = 50; // 50초 설정
clearTimeout(closeTime); // 재호출 정지
closeTime = setTimeout(closeWindow, closeTimeInSeconds * 1000); // 1/1000 초 지정, 바로 시작

showTime(); // 실시간 시간 보여주기

function showTime() {
    let divClock = document.getElementById('time');
    divClock.innerText = closeTimeInSeconds; // 50초 삽입 시작
    closeTimeInSeconds--; // 1초씩 감소
    setTimeout(showTime, 1000); // 1초마다 갱신
}

function closeWindow() {
    window.close(); // 윈도우 닫기
}
