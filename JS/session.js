function session_join_get() {
    if (sessionStorage) {
        const encryptedData = sessionStorage.getItem("Session_Storage_encrypted");
        if (encryptedData) {
            const decryptedData = decrypt_text(encryptedData);
            const sessionObject = JSON.parse(decryptedData);
            console.log('복호화된 회원가입 객체:', sessionObject);
            return sessionObject;
        }
    } else {
        alert("세션 스토리지를 지원하지 않습니다.");
        return null;
    }
}
