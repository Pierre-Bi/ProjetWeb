document.getElementById("spanpoeme").style.visibility = "hidden";

function togglePoeme() {
	if(document.getElementById("spanpoeme").style.visibility === "hidden"){
		document.getElementById("spanpoeme").style.visibility = "visible";
	} else {
		document.getElementById("spanpoeme").style.visibility = "hidden";
	}
}