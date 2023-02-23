"use strict";
// An hien thong tin ca nhan
const ttcanhan = document.querySelector(".ttcanhan");
const inputEmail = document.querySelector(".inputEmail");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = document.getElementById("email");
function checkmail() {
  if (regex.test(email.value)) {
    ttcanhan.classList.remove("hidden");
    inputEmail.classList.add("hidden");
  } else {
    alert("Bạn nhập email không hợp lệ. Vui lòng nhập lại");
  }
}

//View more
const viecdalam = document.querySelectorAll(".viecdalam");
const viewmore = document.querySelectorAll(".viewmore");
const hoverview = document.querySelectorAll(".hoverview");
const viewless = document.querySelectorAll(".viewless");

for (let i = 0; i < hoverview.length; i++) {
  hoverview[i].addEventListener("click", function () {
    viewless[i].classList.toggle("hiddenclick");
    viecdalam[i].classList.toggle("hiddenclick");
    viewmore[i].classList.toggle("hiddenclick");
  });
}
