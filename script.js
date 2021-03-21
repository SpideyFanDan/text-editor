/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText() {
	let text = document.getElementById('text-input').value;
	document.getElementById('text-output').innerText = text;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function inside HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
	elem.classList.toggle('active');
	document.getElementById('text-output').classList.toggle('bold');
}

function makeItalic(elem) {
	elem.classList.toggle('active');
	document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
	elem.classList.toggle('active');
	let formattedText = document.getElementById('text-output');
	if (formattedText.classList.contains('underline')) {
		formattedText.classList.remove('underline');
	} else {
		formattedText.classList.add('underline');
	}
}


function alignText(elem, alignType) {
	elem.classList.toggle('active');
	document.getElementById('text-output').style.textAlign = alignType;
	let buttonsList = document.getElementsByClassName('align');
	for (let i = 0; i < buttonsList.length; i++) {
		buttonsList[i].classList.remove('active');
	}
	elem.classList.add('active');
}
