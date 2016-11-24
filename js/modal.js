// попап обратной связи
var wrlink = document.querySelector(".write-company");
var wrmodal = document.querySelector(".modal-write");
var wrclose = document.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var form = wrmodal.querySelector("form");
var wrname = wrmodal.querySelector("#modal-name");
var wremail = wrmodal.querySelector("#modal-email");
var wrmessage = wrmodal.querySelector("#modal-message");
var storagename = window.localStorage.getItem("wrname");
var storageemail = window.localStorage.getItem("wremail");


var maplink = document.querySelector(".map-link");
var mapmodal = document.querySelector(".modal-map");
var mapclose = document.querySelector(".modal-map .modal-close");
var overlay = document.querySelector(".modal-overlay");

wrlink.addEventListener("click", function(event) {
  event.preventDefault();
  wrmodal.classList.add("modal-write-show");
  wrname.focus();
  overlay.classList.add("modal-overlay-show");
  if (storagename) {
      wrname.value = storagename;
      wremail.focus();
    } else {
      wrname.focus();
    };
  if (storageemail) {
      wremail.value = storageemail;
      wrmessage.focus();
    } else {
      wremail.focus();
    };
});

wrclose.addEventListener("click", function(event) {
  event.preventDefault();
  wrmodal.classList.remove("modal-write-show");
  overlay.classList.remove("modal-overlay-show");
  wrmodal.classList.remove("modal-write-error");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  wrmodal.classList.remove("modal-write-show");
  overlay.classList.remove("modal-overlay-show");
  wrmodal.classList.remove("modal-write-error");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (wrmodal.classList.contains("modal-write-show")) {
      wrmodal.classList.remove("modal-write-show");
      overlay.classList.remove("modal-overlay-show");
      wrmodal.classList.remove("modal-write-error");
    };
  };
});

form.addEventListener("submit", function(event) {
  if (!wrname.value || !wremail.value || !wrmessage.value) {
    event.preventDefault();
    wrmodal.classList.remove("modal-write-error");
    wrmodal.offsetWidth = wrmodal.offsetWidth;
    wrmodal.classList.add("modal-write-error");
    if (!wrname.value) {
      wrname.classList.add("input-error");
    };
    if (!wremail.value) {
      wremail.classList.add("input-error");
    } ;
    if (!wrmessage.value) {
      wrmessage.classList.add("input-error");
    };
    console.log("Нужно что-то ввести!");
  } else {
    localStorage.setItem("wrname", wrname.value);
    localStorage.setItem("wremail", wremail.value);
  }
});

form.addEventListener("keypress", function() {
  if (wrname.classList.contains("input-error")) {
    wrname.classList.remove("input-error");
  };
  if (wremail.classList.contains("input-error")) {
    wremail.classList.remove("input-error")
  };
  if (wrmessage.classList.contains("input-error")) {
    wrmessage.classList.remove("input-error");
  };
});


maplink.addEventListener("click", function(event) {
  event.preventDefault();
  mapmodal.classList.add("modal-map-show");
  overlay.classList.add("modal-overlay-show");
});

mapclose.addEventListener("click", function(event) {
  event.preventDefault();
  mapmodal.classList.remove("modal-map-show");
  overlay.classList.remove("modal-overlay-show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  mapmodal.classList.remove("modal-map-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapmodal.classList.contains("modal-map-show")) {
      mapmodal.classList.remove("modal-map-show");
      overlay.classList.remove("modal-overlay-show");
    };
  };
});
