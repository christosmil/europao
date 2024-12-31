const decades = [2020, 2010, 2000, 1990, 1980, 1970, 1960];
let seasonsOfLastDecade = 5;
let startPoint;
let endPoint = 0;

let textMenu = `
<nav class="navbar navbar-expand-lg navbar-light static-top mytopnavbar">
<a class="navbar-brand" href="./index.html"><img src="../images/Panathinaikos 
FC.png" height="31.3" alt="Panathinaikos FC"></a><button
class="navbar-toggler" type="button" data-toggle="collapse"
data-target="\#navbarResponsive"
aria-controls="navbarResponsive" aria-expanded="false" 
aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
</button><div class="collapse navbar-collapse" id="navbarResponsive">
<ul class="navbar-nav mr-auto">`;
for (let decade of decades) {
	textMenu += `<li class="nav-item dropdown">
	<a class="nav-link dropdown-toggle" href="" id="navbarDropdown"
	role="button" data-toggle="dropdown" aria-haspopup="false"
	aria-expanded="false">${decade}-${decade+9}</a>
	<div class="dropdown-menu" aria-labelledby="navbarDropdown">`;
	if (decade == decades[0]) {
		startPoint = seasonsOfLastDecade;
	} else {
		startPoint = 10;
	}
	for (let year = startPoint; year > endPoint; year--) {
			textMenu += `<a class="dropdown-item"
			href="./${decade+year-1}-${decade+year}.html">
			${decade+year-1}/${decade+year}</a>`;
			if (year != (endPoint + 1)) {
				textMenu += `<div class="dropdown-divider"></div>`;
			}
	}
}
textMenu += `</div></li></ul></div></nav>`;
document.getElementById("menu").innerHTML = textMenu;