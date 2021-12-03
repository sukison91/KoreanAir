const mainHeaderClose = document.querySelector(".headerRight .cross");
const popUpOpenBtn = document.querySelector(".headerLeft .warningText");
const popUpClose = document.querySelector(".warningPopUp .cross");
const header = document.querySelector("header");
const modal = document.querySelector(".modal");

mainHeaderClose.addEventListener("click", function () {
	header.style.display = "none";
});

popUpClose.addEventListener("click", function () {
	modal.style.display = "none";
});

popUpOpenBtn.addEventListener("click", function () {
	modal.style.display = "block";
});
