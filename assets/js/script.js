// set empty arrays to store high scores and corresponding initials
var highScore = [
    {
        name: "",
        score: 0
    }
];

var currentScore = 0;

// set initial time left at 200 sec until first question is given
var timeLeft = 200;

// set up the items that hold questions and answers for easy access in functions
var questionAndAnswers = [

    {
        question: "Bootstrap was built using _______.",
        answers: {
            a: "Javascript",
            b: "JQuery",
            c: "CSS", 
            d: "HTML"
        },
        solution: "c"
    },
    {
        question: "JQuery was built using _______.",
        answers: {
            a: "CSS",
            b: "HTML",
            c: "BootStrap", 
            d: "Javascript"
        },
        solution: "d"
    },
    {
        question: "HTML is used for creating a website's _______.",
        answers: {
            a: "structure",
            b: "style",
            c: "Javascript", 
            d: "Web-API"
        },
        solution: "a"
    },
    {
        question: "CSS is used for creating a website's _______.",
        answers: {
            a: "structure",
            b: "Jquery",
            c: "HTML", 
            d: "style"
        },
        solution: "d"
    },
    {
        question: "Javascript is used for creating a website's _______.",
        answers: {
            a: "style",
            b: "fine-tuned tasks",
            c: "Bootstrap", 
            d: "CSS"
        },
        solution: "b"
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
    buttonA.textContent = questionAndAnswers[n].answers.a;
    buttonListItem1.appendChild(buttonA);

    var buttonB = document.createElement("button");
    buttonB.type = "button";
    buttonB.id = "button-b";
    buttonB.textContent = questionAndAnswers[n].answers.b;
    buttonListItem2.appendChild(buttonB);

    var buttonC = document.createElement("button");
    buttonC.type = "button";
    buttonC.id = "button-c";
    buttonC.textContent = questionAndAnswers[n].answers.c;
    buttonListItem3.appendChild(buttonC);

    var buttonD = document.createElement("button");
    buttonD.type = "button";
    buttonD.id = "button-d";
    buttonD.textContent = questionAndAnswers[n].answers.d;
    buttonListItem4.appendChild(buttonD);
    
    // add buttons to the ordered list
    buttonList.appendChild(buttonListItem1);
    buttonList.appendChild(buttonListItem2);
    buttonList.appendChild(buttonListItem3);
    buttonList.appendChild(buttonListItem4);

    // add ordered list to q-and-a section
    qAndASection.appendChild(buttonList);
};

// copies the current score at the end of the quiz to the array 'highScore'
var finalScore = function () {

    highScore.score = currentScore;

};

// save the score and initials to local storage
var saveScore = function () {

    localStorage.setItem('highScore', JSON.stringify(highScore));

    console.log("score saved");
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

var questionOne = function () {
    
    // create a h2 header that holds the first question
    var question1 = document.createElement("h2");
    question1.textContent = questionAndAnswers[0].question;

    // attach the question in the h2 to the q-and-a section
    qAndASection.appendChild(question1);

    // create buttons that hold answer choices for the first question
    createButtons(0);

};

var questionTwo = function () {

    // create a h2 header that holds the second question
    var question2 = document.createElement("h2");
    question2.textContent = questionAndAnswers[1].question;

    // attach the question in the h2 to the q-and-a section
    qAndASection.appendChild(question2);

    // create buttons that hold answer choices for the second question
    createButtons(1);

};

var questionThree = function () {

    // create a h2 header that holds the third question
    var question3 = document.createElement("h2");
    question3.textContent = questionAndAnswers[2].question;

    // attach the question in the h2 to the q-and-a section
    qAndASection.appendChild(question3);

    // create buttons that hold answer choices for the third question
    createButtons(2);

};

var questionFour = function () {

    // create a h2 header that holds the fourth question
    var question4 = document.createElement("h2");
    question4.textContent = questionAndAnswers[3].question;

    // attach the question in the h2 to the q-and-a section
    qAndASection.appendChild(question4);

    // create buttons that hold answer choices for the fourth question
    createButtons(3);

};

var questionFive = function () {

    // create a h2 header that holds the fifth question
    var question5 = document.createElement("h2");
    question5.textContent = questionAndAnswers[4].question;

    // attach the question in the h2 to the q-and-a section
    qAndASection.appendChild(question5);

    // create buttons that hold answer choices for the fifth question
    createButtons(4);

};

var buttonHandler = function (event) {

    // get target element from event
    var targetEl = event.target;


    // if question is answered correctly, score increases
    if (targetEl.matches(questionAndAnswers[0].solution)) {
      console.log("Correctly answered question 1", targetEl);
      currentscore += 10;
    } 

    // if question is answered incorrectly, the amount of time left decreases
    else {
      console.log("Incorrectly answered question 1", targetEl);
      timeLeft -=10;
    }
};

var endQuiz = function () {

    window.alert("You're out of time!");
    
    finalScore();

    enterInitials();

    saveScore();

};

// main function
var beginQuiz = function() {

    var start = window.prompt("Are you ready to begin?");

    start = start.toLowerCase();

    if (start === "yes"){

        timeLeft = setInterval(timeLeft, 1000);

        if (timeLeft > 0) {

            questionOne();

            if (timeLeft > 0){

                questionTwo();

                if (timeLeft > 0){

                    questionThree();
    
                    if (timeLeft > 0){

                        questionFour();
        
                        if (timeLeft > 0){

                            questionFive();
            
                        }

                        else {
        
                            endQuiz();

                        }

                    }

                    else {
        
                        endQuiz();

                    }

                }

                else {
        
                    endQuiz();

                }

            }

            else {

                endQuiz();

            }

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

buttonList.addEventListener("click", buttonHandler);