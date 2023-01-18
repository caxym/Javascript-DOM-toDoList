let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let container = document.createElement ("div");
	container.style.background = "yellow";
	container.innerHTML = "Hello World";
	document.body.appendChild(container);

});