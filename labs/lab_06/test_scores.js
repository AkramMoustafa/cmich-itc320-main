var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function(id) {
    return document.getElementById(id);
};

function addScore() {
    var name = $("name").value;
    var score = $("score").value;
    var nameError = $("nameError");
    var scoreError = $("scoreError");

    nameError.innerHTML = "";
    scoreError.innerHTML = "";

    if (name === "") {

		nameError.innerHTML = "Please enter a name";   
    }else{
		names.push(name);
	}

    if (score === "" || isNaN(score)) {

		scoreError.innerHTML = "Please enter a valid score";        
    }else{
		scores.push(parseFloat(score));
	}

    
   
}

function displayResults() {
	var avg = 0.0,
	highest = 0;
	
	for (var i = 0; i < scores.length; i++) {
		avg += parseFloat(scores[i]);
		
		if (scores[highest] < scores[i]){
			highest = i;
	}
}

	avg = avg / scores.length;

	$("results").innerHTML = "Average score = " + avg + "<br />";

	$("results").innerHTML += "High Score = " + names[highest] + " with a score of " + scores[highest];

}

function displayScores() {

	var str = "<table>";
	str += "<tr align='left'><th>Name</th><th>Score</th></tr>";

	for (var i = 0; i < scores.length; i++) {

		str += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";

	}

	str += "</table>";
		$("scores_table").innerHTML = str;

}
window.onload = function() {

	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

window.onload = function() {
	$("name").focus();
	document.getElementById("add").addEventListener("click", function (e) {
		e.preventDefault(); 
		document.getElementById("name").focus();
	});
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


