let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.getElementById("myList");
	let newItem = document.createElement("li");
	newItem.innerHTML = "Nuevo elemento";
	list.appendChild(newItem);
  

	//list.appendChild(element);
});
