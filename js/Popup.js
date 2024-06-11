// popup.js

// 팝업창을 열고 닫는 타이머 설정
var close_time; // 시간 정보
var close_time2 = 50; // 50초 설정
clearTimeout(close_time); // 재호출 정지
close_time = setTimeout(close_window, 50000); // 50초 후에 팝업 창 닫기
show_time(); // 실시간 시간 보여주기

function show_time() {
    let divClock = document.getElementById('Time');
    divClock.innerText = close_time2; // 50초 삽입 시작
    close_time2--; // 1초씩 감소
    setTimeout(show_time, 1000); // 1초마다 갱신
}

function close_window() {
    window.close(); // 윈도우 닫기
}
