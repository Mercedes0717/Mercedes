function encrypt_text(password) {
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = CryptoJS.AES.encrypt(b, rk).toString();
    return eb;
}

function decrypt_text(encryptedText) {
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const bytes = CryptoJS.AES.decrypt(encryptedText, rk);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}
