const danhSachKyThi = [
    {
        ten: "Luyện tập trước kỳ thi 1",
        loai: "Luyện tập",
        trangThai: "co-the-truy-cap",
        daHoanThanh: false,
    },
    {
        ten: "Giữa kỳ 1",
        loai: "Kỳ thi",
        trangThai: "da-hoan-thanh",
        daHoanThanh: true,
    },
    {
        ten: "Cuối kỳ 1",
        loai: "Kỳ thi",
        trangThai: "co-the-truy-cap",
        daHoanThanh: false,
    },
    {
        ten: "Luyện tập trước kỳ thi 2",
        loai: "Luyện tập",
        trangThai: "co-the-truy-cap",
        daHoanThanh: false,
    },
    {
        ten: "Giữa kỳ 2",
        loai: "Kỳ thi",
        trangThai: "da-hoan-thanh",
        daHoanThanh: true,
    },
    {
        ten: "Cuối kỳ 2",
        loai: "Kỳ thi",
        trangThai: "co-the-truy-cap",
        daHoanThanh: false,
    },
    {
        ten: "Luyện tập trước kỳ thi 3",
        loai: "Luyện tập",
        trangThai: "co-the-truy-cap",
        daHoanThanh: false,
    },
    {
        ten: "Giữa kỳ 3",
        loai: "Kỳ thi",
        trangThai: "da-hoan-thanh",
        daHoanThanh: true,
    },
    {
        ten: "Cuối kỳ 3",
        loai: "Kỳ thi",
        trangThai: "co-the-truy-cap",
        daHoanThanh: false,
    },
    {
        ten: "Luyện tập trước kỳ thi 4",
        loai: "Luyện tập",
        trangThai: "co-the-truy-cap",
        daHoanThanh: false,
    },
];

const elementDanhSachKyThi = document.querySelector(".danh-sach-ky-thi");
const elementTimKiemTen = document.querySelector("#tim-kiem-ten");
const elementTimKiemTrangThai = document.querySelector("#tim-kiem-trang-thai");

function hienThiDanhSachKyThi(danhSachKyThi) {
    elementDanhSachKyThi.innerHTML = "";
    for (const kyThi of danhSachKyThi) {
        const elementKyThi = document.createElement("div");
        elementKyThi.classList.add("ky-thi");

        const elementTenKyThi = document.createElement("h3");
        elementTenKyThi.classList.add("ten-ky-thi");
        elementTenKyThi.innerText = kyThi.ten;

        const elementLoaiKyThi = document.createElement("p");
        elementLoaiKyThi.classList.add("loai-ky-thi");
        elementLoaiKyThi.innerText = `Loại: ${kyThi.loai}`;

        const elementTrangThai = document.createElement("p");
        elementTrangThai.classList.add("trang-thai");
        if (kyThi.daHoanThanh) {
            elementTrangThai.innerText = "✅ Đã hoàn thành";
            elementTrangThai.classList.add("da-hoan-thanh");
        } else {
            elementTrangThai.innerText = "👉 Có thể truy cập";
        }

        elementKyThi.appendChild(elementTenKyThi);
        elementKyThi.appendChild(elementLoaiKyThi);
        elementKyThi.appendChild(elementTrangThai);

        elementDanhSachKyThi.appendChild(elementKyThi);
    }
}

function timKiemKyThi(ten, trangThai) {
    let danhSachKyThiDuocLoc = danhSachKyThi.filter(kyThi => {
        return kyThi.ten.toLowerCase().includes(ten.toLowerCase()) && (trangThai === "all" || kyThi.trangThai === trangThai);
    });
    hienThiDanhSachKyThi(danhSachKyThiDuocLoc);
}

elementTimKiemTen.addEventListener("input", () => {
    const ten = elementTimKiemTen.value;
    const trangThai = elementTimKiemTrangThai.value;
    timKiemKyThi(ten, trangThai);
});

elementTimKiemTrangThai.addEventListener("change", () => {
    const ten = elementTimKiemTen.value;
    const trangThai = elementTimKiemTrangThai.value;
    timKiemKyThi(ten, trangThai);
});



// Thêm chức năng cho tên kỳ thi
const elementTenKyThiList = document.querySelectorAll(".ten-ky-thi");
for (const elementTenKyThi of elementTenKyThiList) {
    elementTenKyThi.addEventListener("click", () => {
        // xử lý khi click vào tên kỳ thi
        // mở trang chi tiết kỳ thi
    });
}
// Hàm thực hiện đăng xuất
function logout() {
    window.location.href = "user.html"; // Chuyển hướng về trang đăng nhập
}

document.getElementById("logout-btn").addEventListener("click", function() {
    logout();
});
// // Thay đổi trang đích của nút "đăng xuất" và hiển thị tên người dùng
// // Lấy thông tin người dùng từ tệp "user.html" và hiển thị tên người dùng
// fetch("user.html")
// .then(response => response.text())
// .then(data => {
//     const parser = new DOMParser();
//     const userHTML = parser.parseFromString(data, "text/html");
//     const usernameElement = userHTML.getElementById("username");
//     if (usernameElement) {
//         const username = usernameElement.innerText;
//         document.getElementById("user-name").innerText = "Xin chào, " + username;
//         document.getElementById("logout-btn").addEventListener("click", function() {
//             logout();
//         });
//     }
// });

  // Lấy giá trị username từ localStorage
  var username = localStorage.getItem("username");

  // Hiển thị giá trị username trong phần tử có id "username-display"
  var usernameDisplay = document.getElementById("user-name");
  usernameDisplay.textContent = "Xin chào, " + username;


hienThiDanhSachKyThi(danhSachKyThi);


