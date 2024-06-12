var close_time; // 시간 정보
var close_time2 = 50; // 50초 설정
clearTimeout(close_time); // 재호출 정지
close_time = setTimeout("close_window()", 50000); // 50초 후 닫기
show_time(); // 실시간 시간 보여주기

function show_time() {
    let divClock = document.getElementById('Time');
    divClock.innerText = close_time2; // 50초 삽입 시작
    close_time2--; // 1초씩 감소
    if (close_time2 >= 0) {
        setTimeout(show_time, 1000); //1초마다 갱신
    }
}

function close_window() { // 함수 정의
    window.close(); // 윈도우 닫기
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=None; Secure";
}

function closeAndSetCookie() {
    setCookie("popupYN", "N", 1); // 1일 동안 쿠키 저장
    close_window();
}
