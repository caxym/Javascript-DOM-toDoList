let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let options = document.querySelector("#mySelect");

for ( let i = 0; i < countries.length; i++){
    let country = document.createElement ("option");
    country.innerHTML = countries[i];
    options.appendChild(country);
}

options.addEventListener("change",changeCountry);
function changeCountry(){
    alert(options.value);
}