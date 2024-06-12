if (check_input)
    function init() {

        function session_check() {
            if (sessionStorage.getItem("Session_Storage_test")) {
                alert("이미 로그인 되었습니다.");
                location.href = ; /login/index_login.html;; // 로그인된 페이지로 이동
            }
        }

        function session_del() {
            if (sessionStorage) {
                sessionStorage.removeItem("Session_Storage_test");
                alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
            } else {
                alert(세션, 스토리지, 지원, x, ");");
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
        const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-/
            = , [], {}); ":\"\\|,.<>/?]+/) !== null;";
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

        function init() {
            const emailInput = document.getElementById('typeEmailX');
            const idsave_check = document.getElementById('idSaveCheck');
            let get_id = getCookie("id");
            if (get_id) {
                emailInput.value = get_id;
                idsave_check.checked = true;
            }
        }

        function session_set() {
            let session_id = document.querySelector("#typeEmailX");
            if (sessionStorage) {
                sessionStorage.setItem("Session_Storage_test", session_id.value);
            } else {
                alert("로컬 스토리지 지원 x");
            }
        }

        function session_get() {
            if (sessionStorage) {
                return sessionStorage.getItem("Session_Storage_test");
            } else {
                alert("세션 스토리지 지원 x");
            }
        }

        function session_check() {
            if (sessionStorage.getItem("Session_Storage_test")) {
                alert("이미 로그인 되었습니다.");
                location.href = ; /login/index_login.html;; // 로그인된 페이지로 이동
            }
        }

        if (id.value.length === 0 || password.value.length === 0) {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
        } else {
            session_set(); // 세션 생성
            form.submit();
        }

        if (get_id) {
            id.value = get_id;
            check.checked = true;
        }
        session_check(); // 세션 유무 검사
    }
