// security.js

// DOMPurify를 사용하여 입력값을 정화하는 함수
function sanitizeInput(input) {
    return DOMPurify.sanitize(input);
}

// 해시 함수를 사용하여 비밀번호를 해싱하는 함수 (예: SHA-256 사용)
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return bufferToHex(hash);
}

function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// 세션 만료 시간을 설정하는 함수
function setSessionTimeout(minutes) {
    const expirationTime = new Date().getTime() + minutes * 60000;
    sessionStorage.setItem('session_expiration', expirationTime);
}

function checkSessionTimeout() {
    const expirationTime = sessionStorage.getItem('session_expiration');
    if (new Date().getTime() > expirationTime) {
        alert('세션이 만료되었습니다. 다시 로그인해 주세요.');
        // 여기서 세션 만료 시 로그아웃 처리 로직을 추가합니다.
        logout();
    }
}

function logout() {
    // 로그아웃 처리 로직
    sessionStorage.clear();
    window.location.href = 'login.html'; // 로그인 페이지로 리디렉션
}

// 예제 사용법
document.addEventListener('DOMContentLoaded', () => {
    // 페이지 로드 시 세션 타임아웃 체크
    checkSessionTimeout();

    // 예제 입력값 검증
    const userInput = '<script>alert("XSS")</script>';
    const sanitizedInput = sanitizeInput(userInput);
    console.log('Sanitized Input:', sanitizedInput);

    // 예제 비밀번호 해싱
    const password = 'my_secure_password';
    hashPassword(password).then(hashedPassword => {
        console.log('Hashed Password:', hashedPassword);
    });

    // 예제 세션 타임아웃 설정 (30분 후 만료)
    setSessionTimeout(30);
});
