function addJavascript(jsname) { // 자바스크립트 외부 연동
    var th = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', jsname);
    th.appendChild(s);
}

addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수

const check_xss = (input) => {
    const sanitizedInput = DOMPurify.sanitize(input);
    if (sanitizedInput !== input) {
        alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
        return false;
    }
    return sanitizedInput;
};

const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    const idSaveCheck = document.getElementById('idSaveCheck');
    const c = '아이디와 비밀번호를 체크합니다';
    alert(c);
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // 로그인 실패 제한 체크
    if (isLoginRestricted()) {
        alert('로그인 실패 횟수가 3번을 초과하여 로그인이 제한됩니다.');
        return false;
    }

    if (emailValue === '' || passwordValue === '') {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        login_failed();
        return false;
    }

    if (emailValue.length > 10) {
        alert('아이디는 최대 10글자 이하로 입력해야 합니다.');
        login_failed();
        return false;
    }

    if (passwordValue.length > 15) {
        alert('비밀번호는 최대 15글자 이하로 입력해야 합니다.');
        login_failed();
        return false;
    }

    const repeatedCharPattern = /(.)\1{2,}/;
    if (repeatedCharPattern.test(emailValue) || repeatedCharPattern.test(passwordValue)) {
        alert('아이디와 비밀번호는 동일 문자를 3회 이상 반복할 수 없습니다.');
        login_failed();
        return false;
    }

    const repeatedNumberPattern = /(\d{2,})/;
    if (repeatedNumberPattern.test(emailValue) || repeatedNumberPattern.test(passwordValue)) {
        alert('아이디와 비밀번호는 연속되는 숫자를 2회 이상 반복할 수 없습니다.');
        login_failed();
        return false;
    }

    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !== null;
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        login_failed();
        return false;
    }

    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        login_failed();
        return false;
    }

    const invalidChars = /[\\`"'%?&|,;]/;
    if (invalidChars.test(passwordValue)) {
        alert('비밀번호에 적절하지 않은 특수문자가 포함되어 있습니다.');
        login_failed();
        return false;
    }

    const sanitizedEmail = check_xss(emailValue);
    const sanitizedPassword = check_xss(passwordValue);
    if (!sanitizedEmail || !sanitizedPassword) {
        login_failed();
        return false;
    }

    if (idSaveCheck.checked) {
        alert("쿠키를 저장합니다: " + emailValue);
        setCookie("id", emailValue, 1);
        alert("쿠키 값: " + emailValue);
    } else {
        setCookie("id", "", 0); // 쿠키 삭제
    }

    session_set(); // 세션 생성

    const encryptedPassword = encrypt_text(passwordValue);
    console.log('암호화된 비밀번호:', encryptedPassword);

    incrementLoginCount();
    console.log('이메일:', sanitizedEmail);
    console.log('비밀번호:', sanitizedPassword);
    loginForm.submit();
};

const incrementLoginCount = () => {
    let loginCount = parseInt(getCookie("login_cnt")) || 0;
    loginCount++;
    setCookie("login_cnt", loginCount, 365);
    console.log("로그인 횟수: " + loginCount);
};

const incrementLogoutCount = () => {
    let logoutCount = parseInt(getCookie("logout_cnt")) || 0;
    logoutCount++;
    setCookie("logout_cnt", logoutCount, 365);
    console.log("로그아웃 횟수: " + logoutCount);
};

const login_failed = () => {
    let failedCount = parseInt(getCookie("login_failed_cnt")) || 0;
    failedCount++;
    setCookie("login_failed_cnt", failedCount, 1);
    console.log("로그인 실패 횟수: " + failedCount);
    if (failedCount >= 3) {
        alert('로그인 실패 횟수가 3번을 초과하여 로그인이 제한됩니다.');
    }
};

const isLoginRestricted = () => {
    let failedCount = parseInt(getCookie("login_failed_cnt")) || 0;
    return failedCount >= 3;
};

function init() {
    const emailInput = document.getElementById('typeEmailX');
    const idSaveCheck = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");
    if (get_id) {
        emailInput.value = get_id;
        idSaveCheck.checked = true;
    }

    let session_data = session_get();
    if (session_data) {
        emailInput.value = session_data.id;
        document.getElementById('typePasswordX').value = decrypt_text(session_data.encryptedPass);
        idSaveCheck.checked = true;
    }

    session_check(); // 세션 유무 검사
}

function init_logined() {
    if (sessionStorage) {
        let session_data = session_get();
        if (session_data) {
            const decryptedPass = decrypt_text(session_data.encryptedPass);
            console.log('복호화된 비밀번호:', decryptedPass);
        }
        // 5분 후 자동 로그아웃
        setTimeout(logout, 5 * 60 * 1000);
    } else {
        alert("세션 스토리지를 지원하지 않습니다.");
    }
}

function logout() {
    session_del(); // 세션 삭제
    setCookie("id", "", 0); // 쿠키 삭제
    location.href = '../index.html';
}

document.getElementById("login_btn").addEventListener('click', check_input);

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});
