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
            b: "fine-tuend tasks",
            c: "Bootstrap", 
            d: "CSS"
        },
        solution: "b"
    }

];


// link id's from html to javascript
var qAndASection = document.querySelector("#q-and-a-section");
var buttonList = document.querySelector("#button-list");


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
        
                            window.alert("You're out of time!");
                    
                            finalScore();
                    
                            saveScore();
                        }

                    }

                    else {
        
                        window.alert("You're out of time!");
                
                        finalScore();
                
                        saveScore();
                    }

                }

                else {
        
                    window.alert("You're out of time!");
            
                    finalScore();
            
                    saveScore();
                }

            }

            else {
        
                window.alert("You're out of time!");
        
                finalScore();
        
                saveScore();
            }

        }

        else {
        
            window.alert("You're out of time!");
    
            finalScore();
    
            saveScore();
        }
       
    }

    else {
        beginQuiz();
    }
};

// save the user's initials alongside the highscore
var enterInitials = function () {

    highScore.name = window.prompt("Enter your initials: ");

    highScore.score = currentScore;

    return highScore;

};




var createButtons = function (n) {
  
    // create list items to hold buttons
    for (var i = 0; i < 4; i++) {
    var buttonListItemEl = document.createElement("li");
    }

    // create 4 buttons: A, B, C, and D, then attach the buttons to a button list items

    var buttonA = document.createElement("button");
    buttonA.type = "button";
    buttonA.id = "button-a";
    buttonA.value = questionAndAnswers[n].answers.a;
    buttonListItemEl.appendChild(buttonA);

    var buttonB = document.createElement("button");
    buttonB.type = "button";
    buttonB.id = "button-b";
    buttonB.value = questionAndAnswers[n].answers.b;
    buttonListItemEl.appendChild(buttonB);

    var buttonC = document.createElement("button");
    buttonC.type = "button";
    buttonC.id = "button-c";
    buttonC.value = questionAndAnswers[n].answers.c;
    buttonListItemEl.appendChild(buttonC);

    var buttonD = document.createElement("button");
    buttonD.type = "button";
    buttonD.id = "button-d";
    buttonD.value = questionAndAnswers[n].answers.d;
    buttonListItemEl.appendChild(buttonD);


    
    buttonList.appendChild(buttonListItemEl);

};

// save the score to local storage
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

// var questionOne = function () {

//     for(var i = 0; i<questionAndAnswers.length; i++) {

//         // change the text of the html for the question
//         document.getElementsByClassName("question").innerHTML = questionAndAnswers[0].question;

//         createButtons();


        
//         if (timeLeft === 0) {
//             break;
//         }
//     }
// }

var questionOne = function () {

    debugger;
    
    // change the text of the html for the question
    document.getElementsByClassName("question").innerHTML = questionAndAnswers[0].question;

    console.log(document.getElementsByClassName("question").innerHTML = questionAndAnswers[0].question);

    createButtons(0);

};

questionOne();