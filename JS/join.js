class SignUp {
    constructor(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdayDate = birthdayDate;
        this.gender = gender;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.classNumber = classNumber;
        this.random = random;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get contactInfo() {
        return `${this.emailAddress} ${this.phoneNumber} ${this.random}`;
    }

    set contactInfo(contactInfo) {
        const [emailAddress, phoneNumber, random] = contactInfo.split(" ");
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.random = random;
    }
}

function join() {
    let form = document.querySelector("#form_main");
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let birthdayDate = document.querySelector("#birthdayDate").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let emailAddress = document.querySelector("#emailAddress").value;
    let phoneNumber = document.querySelector("#phoneNumber").value;
    let classNumber = document.querySelector("#userRole").value;
    let termsCheck = document.querySelector("#termsCheck").checked;
    let random = new Date(); // 랜덤 타임스탬프

    if (firstName.length === 0 || lastName.length === 0 || birthdayDate.length === 0 || emailAddress.length === 0 || phoneNumber.length === 0) {
        alert("회원가입 폼에 필수 정보를 입력해주세요.");
    } else if (!termsCheck) {
        alert("약관에 동의해주세요.");
    } else {
        const newUser = new SignUp(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random);
        console.log(newUser);

        // 세션에 객체 저장
        if (sessionStorage) {
            const objString = JSON.stringify(newUser); // 객체 -> JSON 문자열 변환
            let en_text = encrypt_text(objString); // 암호화
            sessionStorage.setItem("Session_Storage_object", objString);
            sessionStorage.setItem("Session_Storage_encrypted", en_text);
        } else {
            alert("세션 스토리지를 지원하지 않습니다.");
        }

        form.submit();
    }

};

