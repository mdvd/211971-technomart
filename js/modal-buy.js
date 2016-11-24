var buylink = document.querySelectorAll(".buy-item");
var buymodal = document.querySelector(".modal-buy");
var buyclose = document.querySelector(".modal-buy .modal-close");
var overlay = document.querySelector(".modal-overlay");
var contshop = document.querySelector(".modal-buy-btn");

for(i = 0; i < buylink.length; i++) {
buylink[i].addEventListener("click", function(event) {
  event.preventDefault();
  buymodal.classList.add("modal-buy-show");
  overlay.classList.add("modal-overlay-show");
  });
};

buyclose.addEventListener("click", function(event) {
  event.preventDefault();
  buymodal.classList.remove("modal-buy-show");
  overlay.classList.remove("modal-overlay-show");
});

contshop.addEventListener("click", function(event) {
  event.preventDefault();
  buymodal.classList.remove("modal-buy-show");
  overlay.classList.remove("modal-overlay-show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  buymodal.classList.remove("modal-buy-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (buymodal.classList.contains("modal-buy-show")) {
      buymodal.classList.remove("modal-buy-show");
      overlay.classList.remove("modal-overlay-show");
    };
  };
});
