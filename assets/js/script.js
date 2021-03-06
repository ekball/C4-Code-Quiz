// selct the ids for the 3 main pieces of ui: scores, quiz, and start button
var highScoreRecord = document.querySelector("#high-scores");
var startBtn = document.querySelector("#start-btn");
var codeQuizContent = document.querySelector("#quiz-content");

// set initial time left at 60 sec until first question is given
var timeLeft = 100;

// create empty arrays to store the player names for highscores and highscores themselves
var players = []
var highscores = []

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
]

// set up quiz timer to count down every 1000ms (1 sec)
function createTimer() {
    
    timer = setInterval(function() {
    
        // find the time left and print it to screen
        document.getElementById('timer').textContent = "You have " + timeLeft + " seconds remaining.";

        // reduce time by 1
        timeLeft--;

        // if timer hits zero or skips past zero (due to incorrect responses)
        if (timeLeft === 0 || timeLeft < 0) {

            // stop timer 
            document.getElementById('timer').textContent = "There is no time remaining.";
            alert("The quiz is now finished. Thanks for playing!");

            // begin the process of saving initials + score
            highScoreInfo();
        }

    }, 1000);
}

// function begins quiz and asks first question
function questionOne() {
    
    // clear content from codeQuizContent
    codeQuizContent.innerHTML = "";
    
    // print question to the quiz area
    questionText = document.createElement("h2");
    // set class for styling
    questionText.className = "question-text";
    
    // create container to hold buttons
    buttonContainer = document.createElement("div");
    // set class for styling
    buttonContainer.className = "btn-container";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

    // class declaration for styling buttons
    buttonA.className = "answer-to-question"
    buttonB.className = "answer-to-question"
    buttonC.className = "answer-to-question"
    buttonD.className = "answer-to-question"

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[0].question;
    buttonA.textContent = questionAndAnswers[0].choices[1];
    buttonB.textContent = questionAndAnswers[0].choices[2];
    buttonC.textContent = questionAndAnswers[0].choices[3];
    buttonD.textContent = questionAndAnswers[0].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "incorrect")
    buttonB.setAttribute("data-isValid", "incorrect")
    buttonC.setAttribute("data-isValid", "correct")
    buttonD.setAttribute("data-isValid", "incorrect")
    
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

}

// validate answer choice for first question
function questionOneValidation() {

    // if correct answer was chosen
    if(event.target.getAttribute("data-isValid") == "correct") {        
        // create a response for user to see if choice was correct
        var correctResponse = document.createElement("h3");
        correctResponse.className = "input-response";

        // create text for response
        correctResponse.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(correctResponse);
    }
    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var incorrectResponse = document.createElement("h3");
        incorrectResponse.className = "input-response";

        // create text for response
        incorrectResponse.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(incorrectResponse);
    }

    // proceed to second question
    questionTwo();
};

// function asks second question
function questionTwo() {
    
    // clear content from codeQuizContent
    codeQuizContent.innerHTML = "";
    
    // print question to the quiz area
    questionText = document.createElement("h2");
    // set class for styling
    questionText.className = "question-text";
    
    // create container to hold buttons
    buttonContainer = document.createElement("div");
    // set class for styling
    buttonContainer.className = "btn-container";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

    // class declaration for styling buttons
    buttonA.className = "answer-to-question"
    buttonB.className = "answer-to-question"
    buttonC.className = "answer-to-question"
    buttonD.className = "answer-to-question"

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[1].question;
    buttonA.textContent = questionAndAnswers[1].choices[1];
    buttonB.textContent = questionAndAnswers[1].choices[2];
    buttonC.textContent = questionAndAnswers[1].choices[3];
    buttonD.textContent = questionAndAnswers[1].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "incorrect")
    buttonB.setAttribute("data-isValid", "incorrect")
    buttonC.setAttribute("data-isValid", "incorrect")
    buttonD.setAttribute("data-isValid", "correct")

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
}

// validate answer choice for second question
function questionTwoValidation() {
    // if correct answer was chosen
    if(event.target.getAttribute("data-isValid") == "correct") {
        // create a response for user to see if choice was correct
        var correctResponse = document.createElement("h3");
        correctResponse.className = "input-response";

        // create text for response
        correctResponse.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(correctResponse);
    }
    
    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var incorrectResponse = document.createElement("h3");
        incorrectResponse.className = "input-response";

        // create text for response
        incorrectResponse.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(incorrectResponse);
    };

    // proceed to third question
    questionThree();
}

// function asks third question
function questionThree() {
    
    // clear content from codeQuizContent
    codeQuizContent.innerHTML = "";
    
    // print question to the quiz area
    questionText = document.createElement("h2");
    // set class for styling
    questionText.className = "question-text";
    
    // create container to hold buttons
    buttonContainer = document.createElement("div");
    // set class for styling
    buttonContainer.className = "btn-container";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

    // class declaration for styling buttons
    buttonA.className = "answer-to-question"
    buttonB.className = "answer-to-question"
    buttonC.className = "answer-to-question"
    buttonD.className = "answer-to-question"

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[2].question;
    buttonA.textContent = questionAndAnswers[2].choices[1];
    buttonB.textContent = questionAndAnswers[2].choices[2];
    buttonC.textContent = questionAndAnswers[2].choices[3];
    buttonD.textContent = questionAndAnswers[2].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "correct")
    buttonB.setAttribute("data-isValid", "incorrect")
    buttonC.setAttribute("data-isValid", "incorrect")
    buttonD.setAttribute("data-isValid", "incorrect")

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
}

// validate answer choice for third question
function questionThreeValidation() {
    // if correct answer was chosen
    if(event.target.getAttribute("data-isValid") == "correct") {
        // create a response for user to see if choice was correct
        var correctResponse = document.createElement("h3");
        correctResponse.className = "input-response";

        // create text for response
        correctResponse.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(correctResponse);
    }
    
    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var incorrectResponse = document.createElement("h3");
        incorrectResponse.className = "input-response";

        // create text for response
        incorrectResponse.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(incorrectResponse);
    };

    // proceed to fourth question
    questionFour();
}

// function asks fourth question
function questionFour() {
    
    // clear content from codeQuizContent
    codeQuizContent.innerHTML = "";
    
    // print question to the quiz area
    questionText = document.createElement("h2");
    // set class for styling
    questionText.className = "question-text";
    
    // create container to hold buttons
    buttonContainer = document.createElement("div");
    // set class for styling
    buttonContainer.className = "btn-container";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

    // class declaration for styling buttons
    buttonA.className = "answer-to-question"
    buttonB.className = "answer-to-question"
    buttonC.className = "answer-to-question"
    buttonD.className = "answer-to-question"

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[3].question;
    buttonA.textContent = questionAndAnswers[3].choices[1];
    buttonB.textContent = questionAndAnswers[3].choices[2];
    buttonC.textContent = questionAndAnswers[3].choices[3];
    buttonD.textContent = questionAndAnswers[3].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "incorrect")
    buttonB.setAttribute("data-isValid", "incorrect")
    buttonC.setAttribute("data-isValid", "incorrect")
    buttonD.setAttribute("data-isValid", "correct")

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
}

// validate answer choice for fourth question
function questionFourValidation() {
    // if correct answer was chosen
    if(event.target.getAttribute("data-isValid") == "correct") {
        // create a response for user to see if choice was correct
        var correctResponse = document.createElement("h3");
        correctResponse.className = "input-response";

        // create text for response
        correctResponse.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(correctResponse);
    }
    
    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var incorrectResponse = document.createElement("h3");
        incorrectResponse.className = "input-response";

        // create text for response
        incorrectResponse.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(incorrectResponse);
    };

    // proceed to fifth question
    questionFive();
}

// function asks fifth question
function questionFive() {
    
    // clear content from codeQuizContent
    codeQuizContent.innerHTML = "";
    
    // print question to the quiz area
    questionText = document.createElement("h2");
    // set class for styling
    questionText.className = "question-text";
    
    // create container to hold buttons
    buttonContainer = document.createElement("div");
    // set class for styling
    buttonContainer.className = "btn-container";

    // create buttons to hold answers
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

    // class declaration for styling buttons
    buttonA.className = "answer-to-question"
    buttonB.className = "answer-to-question"
    buttonC.className = "answer-to-question"
    buttonD.className = "answer-to-question"

    // print the content of questions and answers
    questionText.textContent = questionAndAnswers[4].question;
    buttonA.textContent = questionAndAnswers[4].choices[1];
    buttonB.textContent = questionAndAnswers[4].choices[2];
    buttonC.textContent = questionAndAnswers[4].choices[3];
    buttonD.textContent = questionAndAnswers[4].choices[4];

    // set a data- value to determine correct answer
    buttonA.setAttribute("data-isValid", "incorrect")
    buttonB.setAttribute("data-isValid", "correct")
    buttonC.setAttribute("data-isValid", "incorrect")
    buttonD.setAttribute("data-isValid", "incorrect")

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
}

// validate answer choice for fifth question
function questionFiveValidation() {

     // if correct answer was chosen
    if(event.target.getAttribute("data-isValid") == "correct") {
        // create a response for user to see if choice was correct
        var correctResponse = document.createElement("h3");
        correctResponse.className = "input-response";

        // create text for response
        correctResponse.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(correctResponse);
    } 

    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var incorrectResponse = document.createElement("h3");
        incorrectResponse.className = "input-response";

        // create text for response
        incorrectResponse.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(incorrectResponse);
    }

    // clear timer
    clearInterval(timer);

    // record highscore (score being remaining time)
    highScoreInfo(timer);
}

// function to recieve user input for name and show final score
function highScoreInfo(timer) {
    
    // set the remaining time as the final score
    var finalScore = timeLeft;

    // clear timer for precaution
    clearInterval(timer);

    // give user notice that quiz is over
    document.querySelector("#timer").textContent = "Quiz completed. Thanks for playing!"
    
    // clear the quiz content from the page
    codeQuizContent.innerHTML = "";

    // let user know what their score is
    var userScore = document.createElement("h2");
    userScore.textContent = "Final Score = " + finalScore;
    codeQuizContent.appendChild(userScore);

    // recieve user initials with class/id to save alongside score
    var userInitials = document.createElement("input");
    userInitials.placeholder = " ** Please Enter Initials Here **"
    userInitials.id = "user-initials"
    userInitials.className = "user-initials"
    codeQuizContent.appendChild(userInitials);

    // create a button with class/id to save score to localStorage
    var saveInfo = document.createElement("button");
    saveInfo.className = "save-btn"
    saveInfo.id = "save-btn"
    saveInfo.textContent = "Submit Score"
    saveInfo.setAttribute("type", "submit");
    saveInfo.setAttribute("onclick", "inStorage()");
    codeQuizContent.appendChild(saveInfo);
}

// save newest score to highscores record in localStorage
function recordScore() {
    
    // if there is no records of either scores or player names, create two new arrays
    if ( !localStorage.getItem("highscores") && !localStorage.getItem("players") ){
        var highscores = [];
        var players = [];
    }
    else {
        // otherwise, use the data gathered from past attempts and display to user
        var highscores = localStorage.getItem("highscores");
        highscores = JSON.parse(highscores);

        var players = localStorage.getItem("players");
        players = JSON.parse(players);
    };
    
    // push the users score into the highscores array
    var finalScore = timeLeft;
    highscores.push(finalScore);
    
    // push the users name into the players array
    userInitials = document.querySelector("#user-initials");
    var userInput = userInitials.value;
    players.push(userInput);

    // stringify the score/player info in the arrays so localStorage can use it
    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// pull the history of players and their highscores from local storage
function loadScores() {

    // clear screen and clear timer as precaution
    codeQuizContent.innerHTML = "";
    clearInterval(timer);

    var header = document.createElement("h2");
    header.textContent = "Here are the highscores for this quiz:"

    // append the h2 to the page
    codeQuizContent.appendChild(header);

    // create an unordered list to hold the records
    var records = document.createElement("ul");
    records.className = "player-list"

    // append the list to the page
    codeQuizContent.appendChild(records);

    // retrieve the arrays from localStorage
    var players = localStorage.getItem("players");
    var highscores = localStorage.getItem("highscores");

    // parse the info in the arrays so it can be used
    players = JSON.parse(players);
    highscores = JSON.parse(highscores);

    // loop through the arrays to show all available records
    for (var i = 0; i < players.length; i++) {
        playerList(players[i]); 
      }

    // mini function that creates a list to hold the players alongside their scores
    function playerList() {

        // create list item element for each name/score combo
        var listItem = document.createElement("li")
        listItem.className = "player-list-item";

        // set text content
        listItem.textContent = players[i] + " ..... " + highscores[i];  
        
        // attach to the bottom of the list
        records.appendChild(listItem);
        
   }

    // create button to restart quiz
    var restartQuizButton = document.createElement("button");
    restartQuizButton.className = "restart-button"
    restartQuizButton.textContent = "Restart Quiz";

    // give click functionality
    restartQuizButton.setAttribute("onclick", "restart()")

    codeQuizContent.appendChild(restartQuizButton);
   
}

// function to handle localStorage usage functions
function inStorage() { 

    recordScore();
    
    loadScores();
}

// function to start quiz from beginning
function restart() {
    window.location.reload();
}

// function to start quiz
function startQuiz() {
    
    // create the timer + start it
    createTimer();

    // start asking questions
    questionOne();
}

// button handler for the HIGHSCORES button
highScoreRecord.addEventListener("click", loadScores);

// button handler for the START button
startBtn.addEventListener("click", startQuiz);