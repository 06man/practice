function showDetailPage() {
    alert("상세페이지로 이동합니다!");
    window.location.href = "mini_youtube.html";
}

function goLogin() {
    alert("로그인 페이지로 이동합니다!");
    window.location.href = "mini_login.html";
}

function goSignup() {
    alert("회원가입 페이지로 이동합니다!");
    window.location.href = "mini_signup.html";

}

function goIndex() {
    alert("메인 페이지로 이동합니다!");
    window.location.href = "mini_index.html";

}

function signup() {
    alert("회원가입 완료 메인페이지로 이동합니다!");
    window.location.href = "mini_index.html";
}


function login(event) {
    event.preventDefault(); // 폼의 기본 제출 기능을 막음

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // 이메일과 비밀번호 검증 (여기서 아이디/비밀번호를 원하는 값으로 설정)
    if (email === "admin@example.com" && password === "1234") {
        // 로그인 성공 시 메인 화면으로 이동
        alert("환영합니다")
        window.location.href = "mini_index.html"; // 실제 메인 화면 경로로 수정
    } else {
        // 로그인 실패 시 경고 메시지
        alert("이메일 또는 비밀번호가 틀렸습니다.");
    }
}
