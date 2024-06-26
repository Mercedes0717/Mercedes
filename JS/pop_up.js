function getCookie(name) {
    var cookie = document.cookie;
    console.log("쿠키를 요청합니다.");
    if (cookie != "") {
        var cookie_array = cookie.split("; ");
        for (var index in cookie_array) {
            var cookie_name = cookie_array[index].split("=");
            if (cookie_name[0] == name) {
                return cookie_name[1];
            }
        }
    }
    return null;
}

function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/; SameSite=None; Secure";
}

function pop_up() {
    var popupYN = getCookie("popupYN");
    if (popupYN != "N") {
        window.open("../popup/pop_up.html", "팝업테스트", "width=400, height=300, top=10, left=10");
    }
}

function closePopup() {
    var checkPopup = document.getElementById('check_popup');
    if (checkPopup && checkPopup.checked) {
        setCookie("popupYN", "N", 1);
        console.log("쿠키를 설정합니다.");
        self.close();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    pop_up();
});
