// generate a random number
function minMaxRandom (min,max){
	var randomNumber = Math.floor((Math.random() * (max-min +1)+ min));
	console.log(randomNumber);
	return randomNumber;
}
var rando = minMaxRandom (19,120);
// make random number show up on page
$("#numberToGuess").text(rando);


// set total score to 0
var totalScore = 0;

// make random number show up on page
$("#totalNumber").text(totalScore);

// assign each crystal a random number
// make sure numbers do not change until reset
var crystal1 = minMaxRandom(1,12);
var crystal2 = minMaxRandom(1,12);
var crystal3 = minMaxRandom(1,12);
var crystal4 = minMaxRandom(1,12);


var wins = 0;
var losses = 0;
// add to total score when crystal is clicked
function blah(totalScore,rando) {
	// if total score is equal to random number- win
	// update wins by 1 (show in html)
	if (totalScore === rando){
		wins++; 
		$("#winsScore").text(wins);
	// if total score is more than random number- lose
	// update losses by 1 (show in html)	
	} else if (totalScore > rando){
		losses++;
		$("#lossesScore").text(losses);

	};
}
  $("#crystal1").on("click", function() {
  	totalScore += crystal1;
  	$("#totalNumber").text(totalScore);
  	console.log(crystal1);
  	blah(totalScore,rando);
  });

  $("#crystal2").on("click", function() {
  	totalScore += crystal2;
  	$("#totalNumber").text(totalScore);
  	console.log(crystal2);
	blah(totalScore,rando);
  });

  $("#crystal3").on("click", function() {
  	totalScore += crystal3;
  	$("#totalNumber").text(totalScore);
  	console.log(crystal3);
  	blah(totalScore,rando);  });

  $("#crystal4").on("click", function() {
  	totalScore += crystal4;
  	$("#totalNumber").text(totalScore);
  	console.log(crystal4);
  	blah(totalScore,rando);
  });

// reset session when user wins/loses
 $("#resetbtn").on("click", function() {
 	// reset total score
  	totalScore = 0;
  	$("#totalNumber").text(totalScore);
  	// generate new random number
  	rando = minMaxRandom (19,120);
	$("#numberToGuess").text(rando);
	// assign new random numbers to crystals
	crystal1 = minMaxRandom(1,12);
	crystal2 = minMaxRandom(1,12);
	crystal3 = minMaxRandom(1,12);
	crystal4 = minMaxRandom(1,12);

  });


