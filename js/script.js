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

var slides = document.querySelectorAll(".slider-item");
var slideBtn = document.querySelectorAll(".btn-slide");

for (i = 0; i < slideBtn.length; i++) {
	slideBtn[i].index = i;
	slideBtn[i].addEventListener("click", function() {
		var activeBtn = document.querySelector(".active");
		activeBtn.classList.remove("active");
		this.classList.add("active");
		var activeSlide = document.querySelector(".slide-show");
		activeSlide.classList.remove("slide-show");
		slides[this.index].classList.add("slide-show");
	});
}

var services = document.querySelectorAll(".services-description-item");
var serviceBtn = document.querySelectorAll(".btn-services");

for (i = 0; i < serviceBtn.length; i++) {
	serviceBtn[i].index = i;
	serviceBtn[i].addEventListener("click", function() {
		var currentBtn = document.querySelector(".current");
		currentBtn.classList.remove("current");
		this.classList.add("current");
		var selectedService = document.querySelector(".selected");
		selectedService.classList.remove("selected");
		services[this.index].classList.add("selected");
	});
}