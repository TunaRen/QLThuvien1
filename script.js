const wrapper = document.querySelector('.wrapper');
//Khai báo class wrapper

const navigation = document.querySelector(".navigation");

const loginLink = document.querySelector('.login-link');
//Khai báo class Login Link trong Resigtration, nhiệm vụ là biến về Login

const registerLink = document.querySelector('.register-link');

const registerLink1 = document.querySelector('.register-link1');

const forgotLink = document.querySelector('.forgot-link');

const btnPopup = document.querySelector('.btnLogin');

const iconClose = document.querySelector('.icon-close');

const btnFind = document.querySelector('.btn-find');

const btnConfirm = document.querySelector('.btn-find');

const btnRegister = document.querySelector('.btn-register');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
//Chuyển đổi từ Login sang Registration

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
//Huỷ hoạt ảnh, quay trở lại Login

forgotLink.addEventListener('click', () => {
    wrapper.classList.add('active1');
});
//Chuyển đổi từ Login sang Forgot Password

registerLink1.addEventListener('click', () => {
    wrapper.classList.remove('active1');
});
//Huỷ hoạt ảnh, quay trở lại Login

registerLink1.addEventListener('click', () => {
    wrapper.classList.add('active2');
});
//Chuyển đổi từ Login sang Registration

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active2');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
//Bật hộp Login

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
//Huỷ hoạt ảnh, tắt hộp Login

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active1');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active2');
});