// 전역 변수 추가, 맨 위 위치
const idsave_check = document.getElementById('idSaveCheck');

// 쿠키 설정 함수
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// 쿠키 가져오기 함수
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// 쿠키 검사 및 저장 함수
function check_input() {
    const emailInput = document.getElementById('floatingInput').value;
    if (idsave_check.checked == true) { // 아이디 체크 o
        alert("쿠키를 저장합니다.");
        setCookie("id", emailInput, 1); // 1일 저장
        alert("쿠키 값 :" + emailInput);
    } else { // 아이디 체크 x
        setCookie("id", emailInput, 0); // 날짜를 0으로 설정하여 쿠키 삭제
    }
}

// 초기화 함수 - 로그인 폼에 쿠키에서 가져온 아이디 입력
function init() {
    const emailInput = document.getElementById('floatingInput');
    const savedId = getCookie("id");
    if (savedId) {
        emailInput.value = savedId;
        idsave_check.checked = true;
    }
}

// 페이지 로딩 시 init 함수 실행
window.onload = init;
