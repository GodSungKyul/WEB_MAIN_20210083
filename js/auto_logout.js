let close_time;
let close_time2 = 50; // 50초 설정
clearTimeout(close_time); // 재호출 정지
close_time = setTimeout("close_window()", 50000); // 1/1000 초 지정, 바로 시작
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

// 추가된 자동 로그아웃 기능
let logoutTimer;

function logout() {
    alert('세션이 만료되었습니다. 로그아웃됩니다.');
    window.location.href = '/logout';
}

function resetLogoutTimer() {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(logout, 50000);
}

window.onload = function() {
    document.addEventListener('mousemove', resetLogoutTimer);
    document.addEventListener('keypress', resetLogoutTimer);
    resetLogoutTimer();
}

function manualLogout() {
    alert('로그아웃 버튼을 클릭하셨습니다.');
    window.location.href = '/logout';
}
