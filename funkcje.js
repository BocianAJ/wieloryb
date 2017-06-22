//Changing the page look for active JavaScript 
function prepareContent() {
	//adding the mobile js menu
	document.querySelector("nav").className = "js-menu";
	document.querySelector(".mobile-menu").classList.add("js-mobile-menu");
	//making all the buttons visible
	var btnToDisplay = document.querySelectorAll("#oferta button");
	for (i = 0; i < btnToDisplay.length; i++) {
		btnToDisplay[i].style.display = "block";
	}
	//hiding extra content
	var contentToHide = document.querySelectorAll("#oferta .visible-content");
	for (i = 0; i < contentToHide.length; i++) {
		contentToHide[i].classList.remove("visible-content");
		contentToHide[i].classList.add("hidden-content");
	}
	//main page header - making it fit the screen 
}

//category selection
function showCategory() {
	var clickedCategory, allCategories;
	clickedCategory = document.activeElement.classList[0];
	allCategories = document.querySelectorAll("#oferta :not(footer) div section");
	for (var x = 0; x < allCategories.length; x++) {
		if (allCategories[x].classList[0] == clickedCategory) {
			allCategories[x].classList.remove("hidden-content");
			allCategories[x].classList.add("visible-content");
		}
		else {
			allCategories[x].classList.remove("visible-content");
			allCategories[x].classList.add("hidden-content");
		}
	}
	if (showAllBtn = document.querySelector("#oferta button.mniej-calosc")) {
		if (showAllBtn.classList.contains("mniej-calosc")) {
		showAllBtn.classList.remove("mniej-calosc");
		showAllBtn.classList.add("wiecej-calosc");
		showAllBtn.children[0].innerHTML = "więcej";
		}
	}
	if (showBtn = document.querySelectorAll("#oferta button.mniej")) {
		for (i = 0; i < showBtn.length; i++) {
			if (showBtn[i].classList.contains("mniej")) {
				showBtn[i].classList.remove("mniej");
				showBtn[i].classList.add("wiecej");
				showBtn[i].innerHTML = "więcej";
				var choosenContent = findContent("visible-content", "wiecej", "więcej");
				choosenContent.classList.remove("visible-content");
				choosenContent.classList.add("hidden-content");
			}
		}
	}
}
//for showing hidden text inside one box
function showHide() {
	var clickedButton, choosenContent;
	clickedButton = document.activeElement.classList;
	if (clickedButton.contains("wiecej")) {
		clickedButton.remove("wiecej");
		clickedButton.add("mniej");
		choosenContent = findContent("hidden-content", "mniej", "mniej");
		choosenContent.classList.remove("hidden-content");
		choosenContent.classList.add("visible-content");
	}
	else {
		clickedButton.remove("mniej");
		clickedButton.add("wiecej");
		choosenContent = findContent("visible-content", "wiecej", "więcej");
		choosenContent.classList.remove("visible-content");
		choosenContent.classList.add("hidden-content");
	}	
}
function findContent(searchedContentClass, searchedButtonClass, buttonText) {
		var content, elementToCheck;
		content = document.getElementsByClassName(searchedContentClass);
		for (var x in content) {
			elementToCheck = content[x].nextElementSibling;
			if (elementToCheck == document.querySelector("." + searchedContentClass + " + button." + searchedButtonClass)) {
				elementToCheck.innerHTML = buttonText;
				return content[x];
			}
		}	
	}
// for showing all hidden text
function showHideAll() {
	var clickedButton, choosenContent;
	clickedButton = document.activeElement.classList;
	if (clickedButton.contains("wiecej-calosc")) {
		clickedButton.remove("wiecej-calosc");
		clickedButton.add("mniej-calosc");
		choosenContent = document.querySelectorAll("#oferta div section.hidden-content");
		document.activeElement.children[0].innerHTML = "mniej";
		for (x = 0; x < choosenContent.length; x++ ) {
			choosenContent[x].classList.remove("hidden-content");
			choosenContent[x].classList.add("visible-content");
		}
	}
	else {
		clickedButton.remove("mniej-calosc");
		clickedButton.add("wiecej-calosc");
		choosenContent = document.querySelectorAll("#oferta div section.visible-content");
		document.activeElement.children[0].innerHTML = "więcej";
		var x;
		for (x = 0; x < 6; x++) {
			choosenContent[x].classList.remove("visible-content");
			choosenContent[x].classList.add("hidden-content");
		}
	
	}
}

// Styling input type tel
 function nextTelNumber() {
	var telFragment = document.activeElement.value.length;
	if (telFragment == 3) {
		document.activeElement.nextElementSibling.focus();
	}
}

//mobile menu
function showMenu() {
	var menuToShow = document.getElementsByTagName("nav")[0];
	var menuImage = document.querySelectorAll(".mobile-menu > img");
	if (menuToShow.classList.contains("clicked")) {
		toggleMenuImage();
		menuToShow.classList.remove("clicked");	
	}
	else {
		toggleMenuImage();
		menuToShow.classList.add("clicked");
	}
		function toggleMenuImage() {
		for (i = 0; i < menuImage.length; i++) {
			var images = menuImage[i].classList;
			images.toggle("mobile-menu-open");
			images.toggle("mobile-menu-close");
		}
	}
}