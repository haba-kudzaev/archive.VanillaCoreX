/*!
 * @author      rx1310 <rx1310@inbox.ru>
 * @copyright   Copyright (c) o1310, 2020
 * @license     MIT License
 */

function init() {
	initBackdrop();
	initNavDrawer();
	initSnackbar();
}

function initSnackbar() {
	
	var a = document.createElement("div");
	
	a.className = "snackbar";
	a.id = "CoreX_UI_snackBar";
	a.style.bottom = "-48px";
	a.style.left = "0";
	a.appendChild(document.createElement("p"));
	
	document.body.appendChild(a);
	
}

/* Backdrop */
function initBackdrop() {

	var a = document.createElement("div");

	a.className = "backdrop";
	a.style.backgroundColor = "rgba(0, 0, 0, 0);";
	a.style.visibility = "hidden";
	a.id = "CoreX_UI_backDrop";
	a.onclick = function() {
		hideNavDrawer();
	};

	document.body.appendChild(a);

}

function showBackdrop() {
	document.getElementById("CoreX_UI_backDrop").style.visibility = "visible";
	document.getElementById("CoreX_UI_backDrop").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function hideBackdrop() {
	document.getElementById("CoreX_UI_backDrop").style.visibility = "hidden";
	document.getElementById("CoreX_UI_backDrop").style.backgroundColor = "rgba(0, 0, 0, 0)";
}

/* NavDrawer */
function initNavDrawer() {

	var a = document.getElementsByClassName("navdrawer")[0];

	if (a !== undefined) {
		a.style.left = "-300px";
	}

}

function showNavDrawer() {
	
	showBackdrop();

	var a = document.getElementsByClassName("navdrawer")[0];

	if (a !== undefined) {
		a.style.left = "0px";
		a.style.visibility = "visible";
	}

}

function hideNavDrawer() {
	
	hideBackdrop();

	var a = document.getElementsByClassName("navdrawer")[0];

	if (a !== undefined) {
		a.style.left = "-300px";
	}

}

function showSnackbar(m) {
	
	var a = document.getElementById("CoreX_UI_snackBar");
	
	a.firstChild.innerHTML = m;
	a.style.bottom = "0";
	a.style.left = "calc(50% -" + parseInt(parseInt(getComputedStyle(a).width) / 2) + "px";
	
	setTimeout(function(s) {
		s.style.bottom = "-1000px";
	}, 3500, a);
	
}

window.onload = init;
