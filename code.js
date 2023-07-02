/*============================================================================
==============================================================================
I DID NOW WRITE THE CODE IN CLEAN MANNER.
I WILL WRITE THE CODE CLEAN WHEN I FINISH OTHER PROJECTS
==============================================================================
=============================================================================*/

function closeSubBox1() {
	var x = document.getElementById('m-link1');
	var y = document.getElementById('s-box1');
	var s = document.getElementById('s-box2');
	var n = document.getElementById('s-box3');
	if (y.style.display === 'none') {
		y.style.display = 'block';
		s.style.display = 'none';
		n.style.display = 'none';
	} else {
		y.style.display = 'none';
	}
}

function closeSubBox2() {
	var x = document.getElementById('m-link2');
	var y = document.getElementById('s-box2');
	var s = document.getElementById('s-box1');
	var n = document.getElementById('s-box3');
	if (y.style.display === 'none') {
		y.style.display = 'block';
		s.style.display = 'none';
		n.style.display = 'none';
	} else {
		y.style.display = 'none';
	}
}

function closeSubBox3() {
	var x = document.getElementById('m-link3');
	var y = document.getElementById('s-box3');
	var s = document.getElementById('s-box1');
	var n = document.getElementById('s-box2');
	if (y.style.display === 'none') {
		y.style.display = 'block';
		s.style.display = 'none';
		n.style.display = 'none';
	} else {
		y.style.display = 'none';
	}
}

function closeNav() {
	var x = document.getElementById('close-button');
	var y = document.getElementById('main-nav');
	if (y.style.display === 'none') {
		y.style.display = 'block';
	} else {
		y.style.display = 'none';
	}
}

function showNav() {
	var x = document.getElementById('mobbutton-box');
	var y = document.getElementById('main-nav');
	if (y.style.display === 'none') {
		y.style.display = 'block';
	} else {
		y.style.display = 'none';
	}
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		//document.getElementById("s-box1").style.display = "block";
		//document.getElementById("s-box2").style.display = "block";
		//document.getElementById("s-box3").style.display = "block";
	} else {
		document.getElementById('s-box1').style.display = 'none';
		document.getElementById('s-box2').style.display = 'none';
		document.getElementById('s-box3').style.display = 'none';
	}
	prevScrollpos = currentScrollPos;
};

window.onload = function() {
	var team1 = document.getElementById('teams-t1');
	team1.addEventListener('mouseenter', enterFunction);
	team1.addEventListener('mouseleave', leaveFunction);

	var team2 = document.getElementById('teams-t2');
	team2.addEventListener('mouseenter', enterFunction2);
	team2.addEventListener('mouseleave', leaveFunction2);

	var team3 = document.getElementById('teams-t3');
	team3.addEventListener('mouseenter', enterFunction3);
	team3.addEventListener('mouseleave', leaveFunction3);

	// header input focusin / focusout
	var headerInput = document.getElementById('header-input');
	headerInput.addEventListener('focusin', focusInFunction);
	headerInput.addEventListener('focusout', focusOutFunction);
};

function enterFunction() {
	document.getElementById('teams-pic1').style.opacity = '1';
	document.getElementById('teams-pic1').style.transition =
		'all 0.3s';
}

function leaveFunction() {
	document.getElementById('teams-pic1').style.opacity = '0';
	document.getElementById('teams-pic1').style.transition = 'all 0s';
}

function enterFunction2() {
	document.getElementById('teams-pic2').style.opacity = '1';
	document.getElementById('teams-pic2').style.transition =
		'all 0.3s';
}

function leaveFunction2() {
	document.getElementById('teams-pic2').style.opacity = '0';
	document.getElementById('teams-pic2').style.transition = 'all 0s';
}

function enterFunction3() {
	document.getElementById('teams-pic3').style.opacity = '1';
	document.getElementById('teams-pic3').style.transition =
		'all 0.3s';
}

function leaveFunction3() {
	document.getElementById('teams-pic3').style.opacity = '0';
	document.getElementById('teams-pic3').style.transition = 'all 0s';
}

// header input focusin / focusout

function focusOutFunction() {
	document
		.getElementById('pen-div')
		.removeAttribute('class', 'hide-pen');
}

function focusInFunction() {
	document
		.getElementById('pen-div')
		.setAttribute('class', 'hide-pen');
}
