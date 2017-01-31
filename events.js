var articleEl = document.getElementsByClassName("article-section");
var outputEl = document.getElementById("output-target");
console.log("articleEl", articleEl);

// When any section is clicked the output target text should
// be "You clicked on the {text of the section} section"	
function handleSectionClick(event) {
	console.log(event);
	var elementText = event.target.innerHTML;
	outputEl.innerHTML = "You clicked on the " + elementText + " section";
}

for (var i=0; i<articleEl.length; i++) {
	articleEl.item(i).addEventListener("click", handleSectionClick);
}

// When the mouse is over the h1 tag, the output element 
// should contain the text "You moved your mouse over the header"
var header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(event) {
	outputEl.innerHTML = "You moved your mouse over the header";
}

// When the mouse leaves the h1 tag, the output element should 
// contain the text "You left me!!"
function handleHeaderMouseOut(event) {
	outputEl.innerHTML = "You left me!!";
}

// When you type characters into the input field, the 
// output element should mirror the text in the input field.
var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function(event) {
	console.log("event", event);
	outputEl.innerHTML = event.target.value;
})

// When you click the "Add color" button, 
// the guinea-pig element's text color should change to blue.

var guineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color")
	.addEventListener("click", function(event){
		guineaPig.classList.toggle("blue");
	});

document.getElementById("make-large")
	.addEventListener("click", function(event){
		guineaPig.classList.toggle("makeMeLarge");
	});

document.getElementById("add-border")
	.addEventListener("click", function(event){
		guineaPig.classList.toggle("bordered");
	});

document.getElementById("add-rounding")	
	.addEventListener("click", function(event){
		guineaPig.classList.toggle("rounded");
	});











