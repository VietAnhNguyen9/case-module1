function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ((username === "vietanh")&&(password === "vietanh")) {
        alert("Đăng nhập thành công !");
        window.location.href="case-study.html"
    }else if ((username === "") || (password === "")) {
        alert("Nhập lại");
    }else {
        alert("Thông tin tài khoản không đúng");
    }
}