// set empty arrays to store high scores and corresponding initials
var highScore = [
    {
        name: "",
        score: 0
    }
];

// initialize currentScore value to 0
var currentScore = 0;

// set initial time left at 200 sec until first question is given
var timeLeft = 200;

// set up the items that hold questions and answers for easy access in functions
var questionAndAnswers = [

    {
        question: "Bootstrap was built using _______.",
        a: "Javascript",
        b: "JQuery",
        c: "CSS", 
        d: "HTML",
        solution: "CSS"
    },
    {
        question: "JQuery was built using _______.",
        a: "CSS",
        b: "HTML",
        c: "BootStrap", 
        d: "Javascript",
        solution: "Javascript"
    },
    {
        question: "HTML is used for creating a website's _______.",
        a: "structure",
        b: "style",
        c: "Javascript", 
        d: "Web-API",
        solution: "structure"
    },
    {
        question: "CSS is used for creating a website's _______.",
        a: "structure",
        b: "Jquery",
        c: "HTML", 
        d: "style",
        solution: "style"
    },
    {
        question: "Javascript is used for creating a website's _______.",
        a: "style",
        b: "fine-tuned tasks",
        c: "Bootstrap", 
        d: "CSS",
        solution: "fine-tuned tasks"
    }

];

// link id's from html to javascript
var qAndASection = document.querySelector(".q-and-a");

// create an ordered list in which to store the buttons and use captial letters 
var buttonList = document.createElement("ol");
    buttonList.setAttribute("type", "A");

// save the user's initials alongside the highscore
var enterInitials = function () {

    highScore.name = window.prompt("Enter your initials: ");

    return highScore;

};

// creates buttons and fills in the text on each as the appropriate answer choices for the question
// n = which index in the array 'questions and answers' that we are at for the current function
var createButtons = function (n) {

    // create list items to hold buttons
    var buttonListItem1 = document.createElement("li");
    var buttonListItem2 = document.createElement("li");
    var buttonListItem3 = document.createElement("li");
    var buttonListItem4 = document.createElement("li");


    // create 4 buttons: A, B, C, and D, then attach the buttons to a button list items
    var buttonA = document.createElement("button");
    buttonA.type = "button";
    buttonA.id = "button-a";
    buttonA.textContent = questionAndAnswers[n].a;
    buttonListItem1.append(buttonA);
    console.log(buttonA);

    var buttonB = document.createElement("button");
    buttonB.type = "button";
    buttonB.id = "button-b";
    buttonB.textContent = questionAndAnswers[n].b;
    buttonListItem2.append(buttonB);
    console.log(buttonB);


    var buttonC = document.createElement("button");
    buttonC.type = "button";
    buttonC.id = "button-c";
    buttonC.textContent = questionAndAnswers[n].c;
    buttonListItem3.append(buttonC);
    console.log(buttonC);


    var buttonD = document.createElement("button");
    buttonD.type = "button";
    buttonD.id = "button-d";
    buttonD.textContent = questionAndAnswers[n].d;
    buttonListItem4.append(buttonD);
    console.log(buttonD);

    
    // add buttons to the ordered list
    buttonList.appendChild(buttonListItem1);
    buttonList.appendChild(buttonListItem2);
    buttonList.appendChild(buttonListItem3);
    buttonList.appendChild(buttonListItem4);

    // add ordered list to q-and-a section
    qAndASection.appendChild(buttonList);
};

var changeButtons = function (n) {
    // change the content of the 4 buttons
    var buttonA = document.querySelector("#button-a")
    buttonA.textContent = questionAndAnswers[n].a;
    //buttonListItem1.append(buttonA);
    console.log(buttonA);

    var buttonB = document.querySelector("#button-b")
    buttonB.textContent = questionAndAnswers[n].b;
    // buttonListItem2.append(buttonB);
    console.log(buttonB);

    var buttonC = document.querySelector("#button-c")
    buttonC.textContent = questionAndAnswers[n].c;
    // buttonListItem3.append(buttonC);
    console.log(buttonC);
    
    var buttonD = document.querySelector("#button-d")
    buttonD.textContent = questionAndAnswers[n].d;
    // buttonListItem4.append(buttonD);
    console.log(buttonD);
}

// copies the current score at the end of the quiz to the array 'highScore'
var finalScore = function () {

    highScore.score = currentScore;

};

// save the score and initials to local storage
var saveScore = function () {

    localStorage.setItem('highScore', JSON.stringify(highScore));

    console.log("score saved");
    console.log(JSON.parse(localStorage.getItem('highscore')));

};

// load score from local storage
var loadScore = function () {
    
    JSON.parse(localStorage.getItem('highscore'));

    console.log("score loaded");

};

// clear local memory
var clearScores = function () {

    localStorage.clear();

};

var buttonHandlerQ1 = function (event) {

    // get target element from event
    var targetEl = event.target;

    // if question is answered correctly, score increases
    if (targetEl.textContent === "CSS") {
     console.log("Correctly answered question 1", targetEl);
      currentScore += 10;
      questionTwo(); 
    } 

    // if question is answered incorrectly, the amount of time left decreases
    else {
      console.log("Incorrectly answered question 1", targetEl);
      timeLeft -=10;
      questionTwo();
    }
};

var buttonHandlerQ2 = function (event) {

    // get target element from event
    var targetEl = event.target;


    // if question is answered correctly, score increases
    if (targetEl.textContent === "Javascript") {
     console.log("Correctly answered question 2", targetEl);
      currentScore += 10;
      questionThree();
    } 

    // if question is answered incorrectly, the amount of time left decreases
    else {
      console.log("Incorrectly answered question 2", targetEl);
      timeLeft -=10;
      questionThree();
    }
};

var buttonHandlerQ3 = function (event) {

    // get target element from event
    var targetEl = event.target;


    // if question is answered correctly, score increases
    if (targetEl.textContent === "structure") {
     console.log("Correctly answered question 3", targetEl);
      currentScore += 10;
      questionFour();
    } 

    // if question is answered incorrectly, the amount of time left decreases
    else {
      console.log("Incorrectly answered question 3", targetEl);
      timeLeft -=10;
      questionFour();
    }
};

var buttonHandlerQ4 = function (event) {

    // get target element from event
    var targetEl = event.target;


    // if question is answered correctly, score increases
    if (targetEl.textContent === "style") {
     console.log("Correctly answered question 4", targetEl);
      currentScore += 10;
      questionFive();
    } 

    // if question is answered incorrectly, the amount of time left decreases
    else {
      console.log("Incorrectly answered question 4", targetEl);
      timeLeft -=10;
      questionFive();
    }
};

var buttonHandlerQ5 = function (event) {

    // get target element from event
    var targetEl = event.target;


    // if question is answered correctly, score increases
    if (targetEl.textContent === "fine-tuned tasks") {
     console.log("Correctly answered question 5", targetEl);
      currentScore += 10;
      endQuiz();
    } 

    // if question is answered incorrectly, the amount of time left decreases
    else {
      console.log("Incorrectly answered question 5", targetEl);
      timeLeft -=10;
      endQuiz();
    }
};

var questionOne = function () {
    
    // create a h2 header that holds the first question
    var question1 = document.createElement("h2");
    question1.id = "question-header"
    question1.textContent = questionAndAnswers[0].question;

    // attach the question in the h2 to the q-and-a section
    qAndASection.appendChild(question1);

    // create buttons that hold answer choices for the first question
    createButtons(0);

    buttonList.addEventListener("click", buttonHandlerQ1);

};

var questionTwo = function () {

    // create a h2 header that holds the second question
    var question2 = document.querySelector("#question-header");
    question2.textContent = questionAndAnswers[1].question;

    // attach the question in the h2 to the q-and-a section
    // qAndASection.appendChild(question2);

    // change content buttons that hold answer choices for the second question
    changeButtons(1);

    buttonList.addEventListener("click", buttonHandlerQ2);

    
};

var questionThree = function () {

    // create a h2 header that holds the third question
    var question3 = document.querySelector("#question-header");
    question3.textContent = questionAndAnswers[2].question;

    // attach the question in the h2 to the q-and-a section
    // qAndASection.appendChild(question3);

    // create buttons that hold answer choices for the third question
    changeButtons(2);

    buttonList.addEventListener("click", buttonHandlerQ3);

    
};

var questionFour = function () {

    // create a h2 header that holds the fourth question
    var question4 = document.querySelector("#question-header");
    question4.textContent = questionAndAnswers[3].question;

    // attach the question in the h2 to the q-and-a section
    // qAndASection.appendChild(question4);

    // create buttons that hold answer choices for the fourth question
    changeButtons(3);
    
    buttonList.addEventListener("click", buttonHandlerQ4);

};

var questionFive = function () {

    // create a h2 header that holds the fifth question
    var question5 = document.querySelector("#question-header");
    question5.textContent = questionAndAnswers[4].question;

    // attach the question in the h2 to the q-and-a section
    // qAndASection.appendChild(question5);

    // create buttons that hold answer choices for the fifth question
    changeButtons(4);

    buttonList.addEventListener("click", buttonHandlerQ5);

};



var endQuiz = function () {

    if (time = 0) {
        window.alert("You're out of time!");
        
        finalScore();

        enterInitials();

        saveScore();

    }

    else {

        window.alert("You finished the quiz! Your final score is: " + currentScore);

        finalScore();

        enterInitials();

        saveScore();

    }
};

// main function
var beginQuiz = function() {

    var start = window.prompt("Are you ready to begin?");

    start = start.toLowerCase();

    if (start === "yes"){

        timeLeft = setInterval(timeLeft, 1000);
        console.log(timeLeft);

            if (timeLeft > 0) {
        
                questionOne();
        
            }

            else if (timeLeft > 0 && i === 1) {
        
                questionTwo();
        
            }
        
            else if (timeLeft > 0 && i === 2) {
        
                questionThree();
        
            }
        
            else if (timeLeft > 0 && i === 3) {
        
                questionFour();
        
            }
        
            else if (timeLeft > 0 && i === 4) {
        
                questionFive();
        
            }
        
            else {
                endQuiz();
            }
    }

    else {

        beginQuiz();

    }

};

beginQuiz();






