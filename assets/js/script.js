// Next Task: recreate the highscore array into two separate arrays to store in localStorage, then pull from localStorage

// selct the ids for the 3 main pieces of ui: scores, quiz, and start button
var highScoreRecord = document.querySelector("#high-scores")
var startButton = document.querySelector("#start-button");
var codeQuizContent = document.querySelector("#quiz-content");

// set initial time left at 60 sec until first question is given
var timeLeft = 100;

// create empty arrays to store the player names for highscores and highscores themselves
var players = [];
var highscores = [];

// initialize timer variable as a global variable
var timer;

// set up the items that hold questions and answers for easy access in functions
var questionAndAnswers = [

    {
        question: "Bootstrap was built using _______.",
        choices: {
            1: "Javascript",
            2: "JQuery",
            3: "CSS", 
            4: "HTML"
        }
        // solution: "CSS"
    },
    {
        question: "JQuery was built using _______.",
        choices: {
            1: "CSS",
            2: "HTML",
            3: "BootStrap", 
            4: "Javascript"
        }
        // solution: "Javascript"
    },
    {
        question: "HTML is used for creating a website's _______.",
        choices: {
            1: "structure",
            2: "style",
            3: "Javascript", 
            4: "Web-API"
        }
        // solution: "structure"
    },
    {
        question: "CSS is used for creating a website's _______.",
        choices: {
            1: "structure",
            2: "Jquery",
            3: "HTML", 
            4: "style"
        }
        // solution: "style"
    },
    {
        question: "Javascript is used for creating a website's _______.",
        choices: {
            1: "style",
            2: "fine-tuned tasks",
            3: "Bootstrap", 
            4: "CSS"
        }
        // solution: "fine-tuned tasks"
    }
];

// set up quiz timer to count down every 1000ms (1 sec)
var createTimer = function () {

    var timer = setInterval(function () {

        // find the time left and print it to screen
        document.querySelector("timer").textContent = "You have " + timeLeft + " seconds remaining."

        // reduce time by 1
        timeLeft--;

        // if timer hits zero or skips past zero (due to incorrect responses)
        if (timeLeft === 0 || timeLeft < 0) {

            // stop timer 
            document.querySelector("timer").textContent = "There is no time remaining."
            alert("The quiz is now finished. Thanks for playing!")

            // end quiz processes
                endQuiz()
        }

    }, 1000);

};

// function begins quiz and asks first question
function questionOne() {

    // clear content from codeQuizContent
    codeQuizContent = innerHTML = "";

    // print question to the quiz area
    questionText = document.querySelector("h2");
    // set class for styling
    questionText.className = "question-text";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

        // class declaration for styling buttons
        buttonA.className = "answer";
        buttonB.className = "answer";
        buttonC.className = "answer";
        buttonD.className = "answer";

        // id declaration for styling buttons
        buttonA.id = "answer-to-question";
        buttonB.id = "answer-to-question";
        buttonC.id = "answer-to-question";
        buttonD.id = "answer-to-question";

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[0].question;
    buttonA.textContent = questionAndAnswers[0].choices[1];
    buttonB.textContent = questionAndAnswers[0].choices[2];
    buttonC.textContent = questionAndAnswers[0].choices[3];
    buttonD.textContent = questionAndAnswers[0].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "incorrect");
    buttonB.setAttribute("data-isValid", "incorrect");
    buttonC.setAttribute("data-isValid", "correct");
    buttonD.setAttribute("data-isValid", "incorrect");

    // set onClick attr to allow functionality to buttons when clicked
    buttonA.setAttribute("onclick", "questionOneValidation()");
    buttonB.setAttribute("onclick", "questionOneValidation()");
    buttonC.setAttribute("onclick", "questionOneValidation()");
    buttonD.setAttribute("onclick", "questionOneValidation()");

    // append the elements for questions/answers to the page
    codeQuizContent.appendChild(questionText);
    codeQuizContent.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonA);
    buttonContainer.appendChild(buttonB);
    buttonContainer.appendChild(buttonC);
    buttonContainer.appendChild(buttonD);

    questionAndAnswers.shift();
};

// function asks second question
function questionTwo() {

    // clear content from codeQuizContent
    codeQuizContent = innerHTML = "";

    // print question to the quiz area
    questionText = document.querySelector("h2");
    // set class for styling
    questionText.className = "question-text";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

        // class declaration for styling buttons
        buttonA.className = "answer";
        buttonB.className = "answer";
        buttonC.className = "answer";
        buttonD.className = "answer";

        // id declaration for styling buttons
        buttonA.id = "answer-to-question";
        buttonB.id = "answer-to-question";
        buttonC.id = "answer-to-question";
        buttonD.id = "answer-to-question";

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[1].question;
    buttonA.textContent = questionAndAnswers[1].choices[1];
    buttonB.textContent = questionAndAnswers[1].choices[2];
    buttonC.textContent = questionAndAnswers[1].choices[3];
    buttonD.textContent = questionAndAnswers[1].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "incorrect");
    buttonB.setAttribute("data-isValid", "incorrect");
    buttonC.setAttribute("data-isValid", "incorrect");
    buttonD.setAttribute("data-isValid", "correct");

    // set onClick attr to allow functionality to buttons when clicked
    buttonA.setAttribute("onclick", "questionTwoValidation()");
    buttonB.setAttribute("onclick", "questionTwoValidation()");
    buttonC.setAttribute("onclick", "questionTwoValidation()");
    buttonD.setAttribute("onclick", "questionTwoValidation()");

    // append the elements for questions/answers to the page
    codeQuizContent.appendChild(questionText);
    codeQuizContent.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonA);
    buttonContainer.appendChild(buttonB);
    buttonContainer.appendChild(buttonC);
    buttonContainer.appendChild(buttonD);

    questionAndAnswers.shift();
};


// function asks third question
function questionThree() {

    // clear content from codeQuizContent
    codeQuizContent = innerHTML = "";

    // print question to the quiz area
    questionText = document.querySelector("h2");
    // set class for styling
    questionText.className = "question-text";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

        // class declaration for styling buttons
        buttonA.className = "answer";
        buttonB.className = "answer";
        buttonC.className = "answer";
        buttonD.className = "answer";

        // id declaration for styling buttons
        buttonA.id = "answer-to-question";
        buttonB.id = "answer-to-question";
        buttonC.id = "answer-to-question";
        buttonD.id = "answer-to-question";

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[2].question;
    buttonA.textContent = questionAndAnswers[2].choices[1];
    buttonB.textContent = questionAndAnswers[2].choices[2];
    buttonC.textContent = questionAndAnswers[2].choices[3];
    buttonD.textContent = questionAndAnswers[2].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "correct");
    buttonB.setAttribute("data-isValid", "incorrect");
    buttonC.setAttribute("data-isValid", "incorrect");
    buttonD.setAttribute("data-isValid", "incorrect");

    // set onClick attr to allow functionality to buttons when clicked
    buttonA.setAttribute("onclick", "questionThreeValidation()");
    buttonB.setAttribute("onclick", "questionThreeValidation()");
    buttonC.setAttribute("onclick", "questionThreeValidation()");
    buttonD.setAttribute("onclick", "questionThreeValidation()");

    // append the elements for questions/answers to the page
    codeQuizContent.appendChild(questionText);
    codeQuizContent.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonA);
    buttonContainer.appendChild(buttonB);
    buttonContainer.appendChild(buttonC);
    buttonContainer.appendChild(buttonD);

    questionAndAnswers.shift();
};


// function asks fourth question
function questionFour() {

    // clear content from codeQuizContent
    codeQuizContent = innerHTML = "";

    // print question to the quiz area
    questionText = document.querySelector("h2");
    // set class for styling
    questionText.className = "question-text";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

        // class declaration for styling buttons
        buttonA.className = "answer";
        buttonB.className = "answer";
        buttonC.className = "answer";
        buttonD.className = "answer";

        // id declaration for styling buttons
        buttonA.id = "answer-to-question";
        buttonB.id = "answer-to-question";
        buttonC.id = "answer-to-question";
        buttonD.id = "answer-to-question";

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[3].question;
    buttonA.textContent = questionAndAnswers[3].choices[1];
    buttonB.textContent = questionAndAnswers[3].choices[2];
    buttonC.textContent = questionAndAnswers[3].choices[3];
    buttonD.textContent = questionAndAnswers[3].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "incorrect");
    buttonB.setAttribute("data-isValid", "incorrect");
    buttonC.setAttribute("data-isValid", "incorrect");
    buttonD.setAttribute("data-isValid", "correct");

    // set onClick attr to allow functionality to buttons when clicked
    buttonA.setAttribute("onclick", "questionFourValidation()");
    buttonB.setAttribute("onclick", "questionFourValidation()");
    buttonC.setAttribute("onclick", "questionFourValidation()");
    buttonD.setAttribute("onclick", "questionFourValidation()");

    // append the elements for questions/answers to the page
    codeQuizContent.appendChild(questionText);
    codeQuizContent.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonA);
    buttonContainer.appendChild(buttonB);
    buttonContainer.appendChild(buttonC);
    buttonContainer.appendChild(buttonD);

    questionAndAnswers.shift();
};


// function asks fifth question
function questionFive() {

    // clear content from codeQuizContent
    codeQuizContent = innerHTML = "";

    // print question to the quiz area
    questionText = document.querySelector("h2");
    // set class for styling
    questionText.className = "question-text";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

        // class declaration for styling buttons
        buttonA.className = "answer";
        buttonB.className = "answer";
        buttonC.className = "answer";
        buttonD.className = "answer";

        // id declaration for styling buttons
        buttonA.id = "answer-to-question";
        buttonB.id = "answer-to-question";
        buttonC.id = "answer-to-question";
        buttonD.id = "answer-to-question";

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[4].question;
    buttonA.textContent = questionAndAnswers[4].choices[1];
    buttonB.textContent = questionAndAnswers[4].choices[2];
    buttonC.textContent = questionAndAnswers[4].choices[3];
    buttonD.textContent = questionAndAnswers[4].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "incorrect");
    buttonB.setAttribute("data-isValid", "correct");
    buttonC.setAttribute("data-isValid", "incorrect");
    buttonD.setAttribute("data-isValid", "incorrect");

    // set onClick attr to allow functionality to buttons when clicked
    buttonA.setAttribute("onclick", "questionFiveValidation()");
    buttonB.setAttribute("onclick", "questionFiveValidation()");
    buttonC.setAttribute("onclick", "questionFiveValidation()");
    buttonD.setAttribute("onclick", "questionFiveValidation()");

    // append the elements for questions/answers to the page
    codeQuizContent.appendChild(questionText);
    codeQuizContent.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonA);
    buttonContainer.appendChild(buttonB);
    buttonContainer.appendChild(buttonC);
    buttonContainer.appendChild(buttonD);

    questionAndAnswers.shift();
};

// // set empty arrays to store high scores and corresponding initials
// var highScore = [
//     {
//         name: "",
//         score: 0
//     }
// ];
// // initialize currentScore value to 0
// var currentScore = 0;

// // link id's from html to javascript
// var qAndASection = document.querySelector(".q-and-a");

// // save the user's initials alongside the highscore
// var enterInitials = function () {

//     highScore.name = window.prompt("Enter your initials: ");

// };

// // copies the current score at the end of the quiz to the array 'highScore'
// var finalScore = function () {

//     highScore.score = currentScore;

// };

// // save the score and initials to local storage
// var saveScore = function () {

//     storeName = localStorage.setItem('highScore', JSON.stringify(highScore.name) + ", " + JSON.stringify(highScore.score));

//     //var storeScore = localStorage.setItem('highScore', JSON.stringify(highScore.score));
//     console.log("score saved");

// };

// var saveButtonHandler = function (event) {

//     // get target element from event
//     var targetEl = event.target;

//     // if user clicks on save button
//     if (targetEl.textContent === "Save") {

//         finalScore();
//         enterInitials();
//         saveScore();

//     } 

// };

// // load score from local storage
// var loadScore = function () {

//     var loadContainer = document.createElement("ol");
//     loadContainer.className = "load-list";

//     var loadListItem1 = document.createElement("li");
//     var test = localStorage.getItem(JSON.parse(JSON.stringify(storeName)));
//     loadListItem1.textContent = test;

//     var loadListItem2 = document.createElement("li");
//     loadListItem1.textContent = localStorage.getItem("highscore", highScore[1]);

//     var loadListItem3 = document.createElement("li");
//     loadListItem1.textContent = localStorage.getItem("highscore", highScore[2]);

//     var loadListItem4 = document.createElement("li");
//     loadListItem1.textContent = localStorage.getItem("highscore", highScore[3]);

//     var loadListItem5 = document.createElement("li");
//     loadListItem1.textContent = localStorage.getItem("highscore", highScore[4]);

//     loadContainer.appendChild(loadListItem1);
//     loadContainer.appendChild(loadListItem2);
//     loadContainer.appendChild(loadListItem3);
//     loadContainer.appendChild(loadListItem4);
//     loadContainer.appendChild(loadListItem5);

//     qAndASection.appendChild(loadContainer);

//     console.log("score loaded");

// };

// var loadButtonHandler = function (event) {

//     // get target element from event
//     var targetEl = event.target;

//     // if user clicks on save button
//     if (targetEl.textContent === "Load") {

//         loadScore();

//     } 

// };

// // clear local memory
// var clearScores = function () {

//     localStorage.clear();

//     window.alert("All Scores Have Been Erased");

// };

// var clearButtonHandler = function (event) {

//     // get target element from event
//     var targetEl = event.target;

//     // if user clicks on save button
//     if (targetEl.textContent === "Clear") {

//         clearScores();

//     } 

// };

// var restartButtonHandler = function (event) {

//     // get target element from event
//     var targetEl = event.target;

//     // if user clicks on save button
//     if (targetEl.textContent === "Restart") {

//         beginQuiz();

//     } 

// };

// var endGameButtons = function () {

//     // replace question header with text for end game status
//     var endStatus = document.querySelector("#question-header");
//     endStatus.className = "ending-header";
//     endStatus.textContent = 'Congratulations on finishing! Would you like to save your score, load a score, or restart the quiz?';
    

//     // change the content of 4 buttons and apply new event listeners and text content
//     var saveButton = document.querySelector("#button-a")
//     saveButton.textContent = 'Save';

//     buttonList.addEventListener("click", saveButtonHandler);


//     var loadButton = document.querySelector("#button-b")
//     loadButton.textContent = 'Load';

//     loadButton.addEventListener("click", loadButtonHandler);

    
//     var clearButton = document.querySelector("#button-c")
//     clearButton.textContent = 'Clear';

//     buttonList.addEventListener("click", clearButtonHandler);

    
//     var extraItem = document.querySelector("#item-4")
//     extraItem.style.display = "none";

// };

// var endQuiz = function () {

//     if (time = 0) {
//         window.alert("You're out of time!");
        
//         endGameButtons();

//         // finalScore();

//         // enterInitials();

//         // saveScore();

//     }

//     else {

//         window.alert("Your final score is: " + currentScore);

//         endGameButtons();

//         // finalScore();

//         // enterInitials();

//         // saveScore();

//     }
// };



// var scoreDisplay = function () {

//     // create a container to display the score
//     var scoreDisplayEl = document.createElement("div")
//     scoreDisplayEl.className = "score-display";
//     scoreDisplayEl.innerHTML = 'Your current score is: ' + currentScore;

//     // attach the score display container to the body of the html
//     document.body.appendChild(scoreDisplayEl);

// }

// // main function
// var beginQuiz = function() {

//     var start = window.prompt("Are you ready to begin?");

//     start = start.toLowerCase();

//     if (start === "yes"){

//         //createTimer();
//         //scoreDisplay();


//             if (timeLeft > 0) {
        
//                 questionOne();
        
//             }

//             else if (timeLeft > 0 && i === 1) {
        
//                 questionTwo();
        
//             }
        
//             else if (timeLeft > 0 && i === 2) {

//                 questionThree();
        
//             }
        
//             else if (timeLeft > 0 && i === 3) {
//                 debugger;

//                 questionFour();
        
//             }
        
//             else if (timeLeft > 0 && i === 4) {
//                 debugger;

//                 questionFive();
        
//             }
        
//             else {
//                 endQuiz();
//             }
//     }

//     else {

//         beginQuiz();

//     }

// };

// beginQuiz();






