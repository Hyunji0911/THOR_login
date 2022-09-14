// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector('#username');
let SuccessMsg = document.querySelector('.success-message');
let FailureMsg = document.querySelector('.failure-message');

elInputUsername.setAttribute('required', '');
elInputUsername.removeAttribute('required');


elInputUsername.onkeyup = function () {
  console.log(elInputUsername.value);

  if (isMoreThan4Length(elInputUsername.value)) {
    SuccessMsg.classList.remove('hide');
    FailureMsg.classList.add('hide');
  } else {
    SuccessMsg.classList.add('hide');
    FailureMsg.classList.remove('hide');
  }
}

function isMoreThan4Length(value) {
  return value.length >= 4;
}


let elInputPassword = document.querySelector('#password');
let elInputPassword2 = document.querySelector('#password-retype');
let mismatchMsg = document.querySelector('.mismatch-message');

function isMatch (password1, password2) {
  return password1 === password2;
}

elInputPassword2.onkeyup = function () {
  console.log(elInputPassword2.value);

  if (elInputPassword.value === elInputPassword2.value) {
    mismatchMsg.classList.add('hide');
  } else {
    mismatchMsg.classList.remove('hide');
  }
}


// function alertMsg() {
//   if (elInputUsername.value >- 4) {
//     if (elInputPassword.value === elInputPassword2.value) {
//       alert("회원가입 완료!");
//     } else {
//       alert('비밀번호가 일치하지 않습니다.')
//     }
//   } else {
//     alert('아이디는 네 글자 이상이어야 합니다.')
//   }
// }
