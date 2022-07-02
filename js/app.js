"use strict";

let value = "";
let add = document.querySelectorAll("#change");
let count = document.querySelectorAll("#count");

for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", function () {
    value = count[i].innerHTML;
    value++;
    count[i].innerHTML = value;

    if (value > 10) {
      add[i].style.color = "black";
      add[i].style.transform = "scale(1.2)";
    }
  });
}

function rotateChevron() {
  document.querySelector(".fa-chevron-down").style.transform = "rotate(180deg)";
}


// Modal javascript

const modal = document.querySelector(".popup-content");
const modalParent = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".open-modal");

const toggleModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  modalParent.classList.toggle("hidden");
};

btnsOpenModal.addEventListener("click", toggleModal);

btnCloseModal.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

//Handling and escape keypress
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    toggleModal();
  }
});

let swap = document.querySelector(".swap");
let swap1 = document.querySelector(".swap1");
let swap2 = document.querySelector(".swap2");
let swap3 = document.querySelector(".swap3");
let swap4 = document.querySelector(".swap4");
let swap5 = document.querySelector(".swap5");

swap.addEventListener("click", function () {

  let value = swap.innerHTML;

  if (value === "Sign In") {
    swap.innerHTML = "Sign Up";
    swap1.innerHTML = "Welcome Back";
    swap2.innerHTML = "Sign In with Google";
    swap3.innerHTML = "Sign In with Facebook";
    swap4.innerHTML = "Sign In with Email";
    swap5.innerHTML = "'Sign In'";
  }

  else {
    swap.innerHTML = "Sign In";
    swap1.innerHTML = "Join KodeBlog";
    swap2.innerHTML = "Sign Up with Google";
    swap3.innerHTML = "Sign Up with Facebook";
    swap4.innerHTML = "Sign Up with Email";
    swap5.innerHTML = "'Sign Up'";
  }



});


const modalNotify = document.querySelector(".popup-content-notify");
const modalParentNotify = document.querySelector(".popup-notify");
const overlayNotify = document.querySelector(".overlay-notify");
const btnCloseModalNotify = document.querySelector(".close-modal-notify");
const btnsOpenModalNotify = document.querySelector(".open-modal-notify");

const toggleModalNotify = function () {
  modalNotify.classList.toggle("hidden-notify");
  overlayNotify.classList.toggle("hidden-notify");
  modalParentNotify.classList.toggle("hidden-notify");
};

btnsOpenModalNotify.addEventListener("click", toggleModalNotify);

btnCloseModalNotify.addEventListener("click", toggleModalNotify);
overlayNotify.addEventListener("click", toggleModalNotify);

//Handling and escape keypress
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden-notify")) {
    toggleModalNotify();
  }
});
