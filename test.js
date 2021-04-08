var navOpen= false;
var headerBarHidden= false;



var btnMenu= document.getElementById('menu-button');
var nav= document.getElementById('navigation');
var header= document.getElementById('header');
var coating= document.getElementById('coating');
var viewport= document.getElementById('viewport');
var oldScroll= viewport.scrollTop;
function hiddenHeader() {
	document.getElementById('header-bar').className= 'hidden';

}
function showHeader() {
	document.getElementById('header-bar').className= '';
}
function openMenu() {
	navOpen= true;
	showHeader();
	document.getElementById('coating').className= 'active';
	document.getElementById('viewport').className= 'open-menu';
}

function closeMenu() {
	navOpen= false;
	if (headerBarHidden == true) {
		hiddenHeader();
	} else {
		showHeader();
	}
	document.getElementById('coating').className= '';
	document.getElementById('viewport').className= '';

}


btnMenu.addEventListener('click', function() {
	console.log('Open nav');
	if (navOpen == true) {
	closeMenu();
	console.log('open')
	} else {
	openMenu();

	}
});


coating.addEventListener('click', function() {
	closeMenu();
	console.log('open');
});

viewport.addEventListener('scroll', function() {

	var currentScroll= viewport.scrollTop;

	if ((currentScroll - oldScroll) > 10) {
		headerBarHidden= true;
		hiddenHeader();
	} else if ((currentScroll - oldScroll) < -10) {
		headerBarHidden= false;
		showHeader();
	}


	oldScroll= currentScroll;
});

