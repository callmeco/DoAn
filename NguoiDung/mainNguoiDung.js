let btn = document.querySelector("#btn");
let nav = document.querySelector(".nav");
let logoutBtn = document.querySelector(".bx-log-out");

btn.onclick = function () {
    nav.classList.toggle("active");
}
logoutBtn.onclick = function () {
    location.assign("/Đăng nhập/indexLogin.html");
}
