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


var questionOne = function () {



};

var createButtons = function () {

    // create a header <h2> for the question
    var questionEl = document.createElement("h2");
    questionEl.className = "questions";
    
    // attach the header <h2> to the section of html for questions and answers
    qAndASection.appendChild(buttonContainerEl);

    // create ordered list for buttons
    var buttonListEl = document.createElement("ol");
    buttonListEl.className = "buttons";
    
    // attach the button list to the section of html for questions and answers
    qAndASection.appendChild(buttonlistEl);

    // create list items to hold buttons
    var buttonListItemEl = document.createElement("li")

    // create 4 buttons: A, B, C, and D, then attach the buttons to a button list items

    var buttonA = document.createElement("button");
    buttonListEl.appendChild(buttonListItemEl);

    var buttonB = document.createElement("button");
    buttonListEl.appendChild(buttonListItemEl);

    var buttonC = document.createElement("button");
    buttonListEl.appendChild(buttonListItemEl);

    var buttonD = document.createElement("button");
    buttonListEl.appendChild(buttonListItemEl);

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
