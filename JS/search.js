document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById("search_btn");
    
    if (searchBtn) {
        searchBtn.addEventListener('click', (event) => {
            event.preventDefault();
            search_message();
            googleSearch();
        });
    }
});

const search_message = () => {
    const c = '검색을 수행합니다';
    alert(c);
};

const googleSearch = () => {
    const searchTerm = document.getElementById("search_input").value.trim(); // 검색어로 설정 및 공백 제거
    const badWords = ["씨발", "병신", "개새끼", "씹새끼", "병신놈"]; // 비속어 목록

    // 공백 검사
    if (searchTerm.length === 0) {
        alert("검색어를 입력해주세요.");
        return false;
    }

    // 비속어 검사
    for (let i = 0; i < badWords.length; i++) {
        if (searchTerm.includes(badWords[i])) {
            alert("부적절한 검색어입니다.");
            return false;
        }
    }

    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    // 새 창에서 구글 검색을 수행
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
    return false;
};
