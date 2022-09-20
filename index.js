var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name ? ");
console.log("                       ");
console.log("Welcome " + userName + "!" + " to HOW WELL DO YOU KNOW MANISHA?");
console.log("                        ");
console.log("RULES TO PLAY THE GAME:");
console.log(
  "1) Read the question properly and enter (a,b,c,d) as per your choice of answer."
);
console.log("2) Each correct answer will reward you 2 points. ");
console.log("3) Each wrong answer will cost you 1 point. ");
console.log("                                            ");

var score = 0;
function play(question, answer, correctAnswer) {
  var correctAnswer;
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yes that's correct! ");
    score = score + 2;
  } else {
    console.log("Nah that's incorrect! ");
    score = score - 1;
    console.log("The correct answer: " + correctAnswer);
  }
  console.log("Score is " + score);
  console.log("                       ");
}

var questions = [
  {
    question: `1. Where do I live?
    
    a. Mumbai
    b. Hyderabad
    c. Kerela
    d. Banglore\n`,

    answer: "a",
    correctAnswer: "Manisha Lives in Mumbai ",
  },

  {
    question: `2. What is my favorite TV show?
  
    a. Stranger Things
    b. The Flash
    c. Money Heist
    d. Friends\n`,

    answer: "b",
    correctAnswer: "The Flash",
  },

  {
    question: `3. If I could travel anywhere, where?
    
    a. Canada
    b. Australia
    c. USA
    d. London\n`,

    answer: "d",
    correctAnswer: "London",
  },

  {
    question: `4. Who is my favorite cricket player?
    
    a. Dhoni
    b. Hardik
    c. Virat
    d. Raina\n`,

    answer: "c",
    correctAnswer: "Virat",
  },

  {
    question: `5. What would I rather eat in dessert?
    
    a. Pastery
    b. Gulab Jamun
    c. Ice cream
    d. sweets\n`,

    answer: "b",
    correctAnswer: "Gulab Jamun",
  },

  {
    question: `6. Who is my favorite actor?
    
    a. Vijay Devarkonda
    b. Shahid Kapoor
    c. Dhanush 
    d. Ranveer Singh\n`,

    answer: "a",
    correctAnswer: "Vijay Devarkonda",
  },

  {
    question: `7. Who I like to listen to in my free time?
    
    a. Selena Gomez
    b. Ed Sheeran
    c. Shawn Mendes
    d. Taylor Swift\n`,

    answer: "c",
    correctAnswer: "Shawn Mendes",
  },

  {
    question: `8. Which is my favorite clothing brand?
    
  a. H&M
  b. Westside
  c. Zara
  d. Marks and spencer\n`,

    answer: "a",
    correctAnswer: "H&M",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(
    currentQuestion.question,
    currentQuestion.answer,
    currentQuestion.correctAnswer
  );
}
console.log("-------------------------------------------");
console.log("                       ");
if (score > 5) {
  console.log("YAY! YOU SCORED " + score);
  console.log("                       ");
}
console.log("Final score is: " + score);

var leaderBoard = [
  {
    name: "Tanya",
    score: "\t10",
  },

  {
    name: "Smriti",
    score: "\t14",
  },

  {
    name: "Vijay",
    score: "\t15",
  },

  {
    name: "Virat",
    score: "\t16",
  },
];

if (score <= 5) {
  console.log("\nThanks for playing. ");
} else if (score >= 6 && score <= 10) {
  console.log("\nWow! Seems like you know me pretty well.");
} else if (score >= 11 && score <= 15) {
  console.log("\nThat was impressive!");
} else {
  console.log(
    "\nCONGRATULATIONS!! YOU DESERVE A PLACE IN OUR LEADERBOARD. \nKindly Share The Screenshot of Your Score."
  );
}

console.log("\nLeaderboard");
console.log("\nName \t Score");
for (i = 0; i < leaderBoard.length; i++) {
  currentleaderBoard = leaderBoard[i];
  console.log(currentleaderBoard.name, currentleaderBoard.score);
}
