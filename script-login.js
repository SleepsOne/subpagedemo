'use strict'
function openRegisterForm() {
    window.location.href = "register.html";
}
function openLoginForm() {
    window.location.href = "user.html";
}

function openHomeTestForm() {
    window.location.href = "testing.html"
}
  

function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
        return false;
    }
    return true;
}
  
// function validateRegisterForm() {
//     var name = document.getElementById("name").value;
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirm-password").value;
  
//     if (username === "" || password === "" || confirmPassword === "") {
//       alert("Vui lòng điền đầy đủ thông tin.");
//       return false;
//     }
//     if (password !== confirmPassword) {
//         alert("Mật khẩu xác nhận không khớp.");
//         return false;
//     }
//     alert("Đăng kí thành công, vui lòng đăng nhập lại!");
//     return true;

// }




function validateAndRedirect(event) {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của form
    if (validateLoginForm()) {
        var username = document.getElementById("username").value;
        // Lưu giá trị username vào localStorage
        localStorage.setItem("username", username);

        window.location.replace("testing.html");
    }
    else {
        // console.log("ta dang o day");
    }
}


function validateAndRedirectRegister(event) {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của form
    if (validateForm()) {
        window.location.replace("user.html");
    }
}



function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Vui lòng điền đầy đủ thông tin");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp");
      return false;
    }

    // Nếu tất cả các trường hợp kiểm tra hợp lệ, chuyển hướng sang trang khác
    // window.location.href = "user.html";
    localStorage.setItem("successMessage", "Đăng kí thành công, vui lòng đăng nhập lại !");
    return true;
}

if (localStorage.getItem("successMessage")) {
    var successMessage = localStorage.getItem("successMessage");

    // Hiển thị thông báo thành công
    var successMessageElement = document.createElement("p");
    successMessageElement.innerText = successMessage;
    successMessageElement.classList.add("success-message"); // Thêm lớp CSS
    document.body.appendChild(successMessageElement);

    // Xóa thông báo thành công khỏi Local Storage
    localStorage.removeItem("successMessage");
  }

