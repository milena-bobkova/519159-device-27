var writeUsLink = document.querySelector(".info-button-modal");
var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsClose = writeUsPopup.querySelector(".modal-close");
var writeUsName = writeUsPopup.querySelector("[name=user-name]");
var writeUsForm = writeUsPopup.querySelector("form");
var writeUsMail = writeUsPopup.querySelector("[name=user-email]");
var writeUsComment = writeUsPopup.querySelector("[name=comment]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  if (storage) {
    writeUsName.value = storage;
    writeUsMail.focus();
  } else {
    if (storage) {
      writeUsMail.value = storage;
      writeUsComment.focus();
    } else
      writeUsName.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
})

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsMail.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("writeUsName", writeUsName.value);
      localStorage.setItem("writeUsMail", writeUsMail.value);
    }
  }
});

var mapLink = document.querySelector(".contact-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});