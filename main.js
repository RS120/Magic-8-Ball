// Button Event Listener

document.getElementById("magic8ball").addEventListener("click", imgClicked);

function imgClicked() {
  let randNum = Math.random();
  console.log(randNum);
  
  // Define Variables
  let q1 = "Does a magic 8 ball actually work?";
  let q2 = "Is JavaScript awesome?";
  let q3 = "Are you real?";
  let question = document.getElementById("question").value;

  // Random Response
  if (question.length === 0) {
    document.getElementById("answer-in").innerHTML = "Please ask a question...";
  } else if (question === q1) {
    document.getElementById("answer-in").innerHTML = "How dare you doubt me!";
  } else if (question === q2) {
    document.getElementById("answer-in").innerHTML = "Of Course!";
  } else if (question === q3) {
    document.getElementById("answer-in").innerHTML = "I might be...";
  } else if (randNum < 0.2) {
    document.getElementById("answer-in").innerHTML = "Without a Doubt";
  } else if (randNum < 0.4) {
    document.getElementById("answer-in").innerHTML = "As I see it, yes";
  } else if (randNum < 0.6) {
    document.getElementById("answer-in").innerHTML =
      "Concentrate and ask again";
    // Specific Responses
  } else if (randNum < 0.8) {
    document.getElementById("answer-in").innerHTML = "Don't count on it";
  } else if (randNum < 1) {
    document.getElementById("answer-in").innerHTML = "Outlook not so good";
  }
}
