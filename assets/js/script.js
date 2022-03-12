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
            a: "Javascript",
            b: "JQuery",
            c: "CSS", 
            d: "HTML"
        }
        // solution: "CSS"
    },
    {
        question: "JQuery was built using _______.",
        choices: {
            a: "CSS",
            b: "HTML",
            c: "BootStrap", 
            d: "Javascript"
        }
        // solution: "Javascript"
    },
    {
        question: "HTML is used for creating a website's _______.",
        choices: {
            a: "structure",
            b: "style",
            c: "Javascript", 
            d: "Web-API"
        }
        // solution: "structure"
    },
    {
        question: "CSS is used for creating a website's _______.",
        choices: {
            a: "structure",
            b: "Jquery",
            c: "HTML", 
            d: "style"
        }
        // solution: "style"
    },
    {
        question: "Javascript is used for creating a website's _______.",
        choices: {
            a: "style",
            b: "fine-tuned tasks",
            c: "Bootstrap", 
            d: "CSS"
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



// set empty arrays to store high scores and corresponding initials
var highScore = [
    {
        name: "",
        score: 0
    }
];

var storeName = "";
var storeScore = "";

// initialize currentScore value to 0
var currentScore = 0;

var timeLeft = 100;



// link id's from html to javascript
var qAndASection = document.querySelector(".q-and-a");

// create an ordered list in which to store the buttons and use captial letters 
var buttonList = document.createElement("ol");
    buttonList.setAttribute("type", "A");

// save the user's initials alongside the highscore
var enterInitials = function () {

    highScore.name = window.prompt("Enter your initials: ");

};

// creates buttons and fills in the text on each as the appropriate answer choices for the question
// n = which index in the array 'questions and answers' that we are at for the current function
var createButtons = function (n) {

    // create list items to hold buttons
    var buttonListItem1 = document.createElement("li");
    var buttonListItem2 = document.createElement("li");
    var buttonListItem3 = document.createElement("li");
    var buttonListItem4 = document.createElement("li");
    buttonListItem4.id = "item-4";


    // create 4 buttons: A, B, C, and D, then attach the buttons to a button list items
    var buttonA = document.createElement("button");
    buttonA.type = "button";
    buttonA.id = "button-a";
    buttonA.textContent = questionAndAnswers[n].a;
    buttonListItem1.append(buttonA);

    var buttonB = document.createElement("button");
    buttonB.type = "button";
    buttonB.id = "button-b";
    buttonB.textContent = questionAndAnswers[n].b;
    buttonListItem2.append(buttonB);


    var buttonC = document.createElement("button");
    buttonC.type = "button";
    buttonC.id = "button-c";
    buttonC.textContent = questionAndAnswers[n].c;
    buttonListItem3.append(buttonC);


    var buttonD = document.createElement("button");
    buttonD.type = "button";
    buttonD.id = "button-d";
    buttonD.textContent = questionAndAnswers[n].d;
    buttonListItem4.append(buttonD);

    
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

    var buttonB = document.querySelector("#button-b")
    buttonB.textContent = questionAndAnswers[n].b;
    

    var buttonC = document.querySelector("#button-c")
    buttonC.textContent = questionAndAnswers[n].c;
    
    
    var buttonD = document.querySelector("#button-d")
    buttonD.textContent = questionAndAnswers[n].d;
    
}

// copies the current score at the end of the quiz to the array 'highScore'
var finalScore = function () {

    highScore.score = currentScore;

};

// save the score and initials to local storage
var saveScore = function () {

    storeName = localStorage.setItem('highScore', JSON.stringify(highScore.name) + ", " + JSON.stringify(highScore.score));

    //var storeScore = localStorage.setItem('highScore', JSON.stringify(highScore.score));
    console.log("score saved");

};

var saveButtonHandler = function (event) {

    // get target element from event
    var targetEl = event.target;

    // if user clicks on save button
    if (targetEl.textContent === "Save") {

        finalScore();
        enterInitials();
        saveScore();

    } 

};

// load score from local storage
var loadScore = function () {

    var loadContainer = document.createElement("ol");
    loadContainer.className = "load-list";

    var loadListItem1 = document.createElement("li");
    var test = localStorage.getItem(JSON.parse(JSON.stringify(storeName)));
    loadListItem1.textContent = test;

    var loadListItem2 = document.createElement("li");
    loadListItem1.textContent = localStorage.getItem("highscore", highScore[1]);

    var loadListItem3 = document.createElement("li");
    loadListItem1.textContent = localStorage.getItem("highscore", highScore[2]);

    var loadListItem4 = document.createElement("li");
    loadListItem1.textContent = localStorage.getItem("highscore", highScore[3]);

    var loadListItem5 = document.createElement("li");
    loadListItem1.textContent = localStorage.getItem("highscore", highScore[4]);

    loadContainer.appendChild(loadListItem1);
    loadContainer.appendChild(loadListItem2);
    loadContainer.appendChild(loadListItem3);
    loadContainer.appendChild(loadListItem4);
    loadContainer.appendChild(loadListItem5);

    qAndASection.appendChild(loadContainer);

    console.log("score loaded");

};

var loadButtonHandler = function (event) {

    // get target element from event
    var targetEl = event.target;

    // if user clicks on save button
    if (targetEl.textContent === "Load") {

        loadScore();

    } 

};

// clear local memory
var clearScores = function () {

    localStorage.clear();

    window.alert("All Scores Have Been Erased");

};

var clearButtonHandler = function (event) {

    // get target element from event
    var targetEl = event.target;

    // if user clicks on save button
    if (targetEl.textContent === "Clear") {

        clearScores();

    } 

};

var restartButtonHandler = function (event) {

    // get target element from event
    var targetEl = event.target;

    // if user clicks on save button
    if (targetEl.textContent === "Restart") {

        beginQuiz();

    } 

};

var endGameButtons = function () {

    // replace question header with text for end game status
    var endStatus = document.querySelector("#question-header");
    endStatus.className = "ending-header";
    endStatus.textContent = 'Congratulations on finishing! Would you like to save your score, load a score, or restart the quiz?';
    

    // change the content of 4 buttons and apply new event listeners and text content
    var saveButton = document.querySelector("#button-a")
    saveButton.textContent = 'Save';

    buttonList.addEventListener("click", saveButtonHandler);


    var loadButton = document.querySelector("#button-b")
    loadButton.textContent = 'Load';

    loadButton.addEventListener("click", loadButtonHandler);

    
    var clearButton = document.querySelector("#button-c")
    clearButton.textContent = 'Clear';

    buttonList.addEventListener("click", clearButtonHandler);

    
    var extraItem = document.querySelector("#item-4")
    extraItem.style.display = "none";

};

var buttonHandlerQ1 = function (event) {

    // get target element from event
    var targetEl = event.target;

    // if question is answered correctly, score increases
    if (targetEl.textContent === "CSS") {
        console.log("Correctly answered question 1", targetEl);
        currentScore = currentScore + 10;
        console.log(currentScore);
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
     currentScore = currentScore + 10;
     console.log(currentScore);

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
     currentScore = currentScore + 10;
     console.log(currentScore);

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
     currentScore = currentScore + 10;
     console.log(currentScore);

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
        currentScore = currentScore + 10;
        console.log(currentScore);
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
        
        endGameButtons();

        // finalScore();

        // enterInitials();

        // saveScore();

    }

    else {

        window.alert("Your final score is: " + currentScore);

        endGameButtons();

        // finalScore();

        // enterInitials();

        // saveScore();

    }
};



var scoreDisplay = function () {

    // create a container to display the score
    var scoreDisplayEl = document.createElement("div")
    scoreDisplayEl.className = "score-display";
    scoreDisplayEl.innerHTML = 'Your current score is: ' + currentScore;

    // attach the score display container to the body of the html
    document.body.appendChild(scoreDisplayEl);

}

// main function
var beginQuiz = function() {

    var start = window.prompt("Are you ready to begin?");

    start = start.toLowerCase();

    if (start === "yes"){

        //createTimer();
        //scoreDisplay();


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
                debugger;

                questionFour();
        
            }
        
            else if (timeLeft > 0 && i === 4) {
                debugger;

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






