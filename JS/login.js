if check_input


function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력

function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_test")) {
        alert("이미 로그인 되었습니다.");
        location.href=‘../login/index_login.html’; // 로그인된 페이지로 이동
    }
 }

 function session_del() {//세션 삭제
    if (sessionStorage) {
         sessionStorage.removeItem("Session_Storage_test");
         alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert(＂세션 스토리지 지원 x");
    }
}



if (emailValue.length < 5) {
    alert('아이디는 최소 5글자 이상 입력해야 합니다.');
    return false;
    }
    if (passwordValue.length < 12) {
    alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
    return false;
    }
    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-
    =\[\]{};':"\\|,.<>\/?]+/) !== null;
    if (!hasSpecialChar) {
    alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
    return false;
    }
    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    if (!hasUpperCase || !hasLowerCase) {
    alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
    return false;
    }

    function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
        const emailInput = document.getElementById('typeEmailX');
        const idsave_check = document.getElementById('idSaveCheck');
        let get_id = getCookie("id");
        if(get_id) {
        emailInput.value = get_id;
        idsave_check.checked = true;
        }
    }

    function session_set() { //세션 저장
        let session_id = document.querySelector("#typeEmailX");
        if (sessionStorage) {
        sessionStorage.setItem("Session_Storage_test", session_id.value);
        } else {
            alert("로컬 스토리지 지원 x");
        }
     }

     function session_get() { //세션 읽기
        if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_test");
        } else {
            alert("세션 스토리지 지원 x");
        }
    }

    function session_check() { //세션 검사
        if (sessionStorage.getItem("Session_Storage_test")) {
        alert("이미 로그인 되었습니다.");
        location.href=‘../login/index_login.html’; // 로그인된 페이지로 이동
        }
    }

    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        }else{
        session_set(); // 세션 생성
         form.submit();
    }

    if(get_id) {
        id.value = get_id;
        check.checked = true;
        }
       session_check(); // 세션 유무 검사
    }
    
    function encodeByAES256(key, data){
        const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(""),
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        });
        return cipher.toString();
    }

    function decodeByAES256(key, data){
        const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(""),
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        });
        return cipher.toString(CryptoJS.enc.Utf8);
    }

    function session_set() { //세션 저장
        let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
        let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
        if (sessionStorage) {
            let en_text = encrypt_text(session_pass.value);
            sessionStorage.setItem("Session_Storage_id", session_id.value);
            sessionStorage.setItem("Session_Storage_pass", en_text);
        } else {
            alert("로컬 스토리지 지원 x");
        }
    }

    function addJavascript(jsname) { // 자바스크립트 외부 연동
        var th = document.getElementsByTagName('head')[0];
        var s = document.createElement('script');
        s.setAttribute('type','text/javascript');
        s.setAttribute('src',jsname);
        th.appendChild(s);
    }
    addJavascript('/js/security.js'); // 암복호화 함수
    addJavascript('/js/session.js'); // 세션 함수
    addJavascript('/js/cookie.js'); // 쿠키 함수
        
        

    <body class="text-center" onload="init();">
