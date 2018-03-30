var writePopup = document.querySelector(".modal-write-us");
var writeBtn = document.querySelector(".btn-contacts");
var writeClose = writePopup.querySelector(".modal-close");

writeBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
});

writeClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	writePopup.classList.remove("modal-show");
});

var mapPopup = document.querySelector(".modal-map");
var mapBtn = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".modal-close");

mapBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});