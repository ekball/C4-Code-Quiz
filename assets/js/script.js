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

// validate answer choice for first question
function questionOneValidation () {

    // if correct answer was chosen
    if(event.target.getAttribute("isValid") == "correct") {
        // create a response for user to see if choice was correct
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // proceed to second question
    questionTwo();
}

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

// validate answer choice for second question
function questionTwoValidation () {

    // if correct answer was chosen
    if(event.target.getAttribute("isValid") == "correct") {
        // create a response for user to see if choice was correct
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // proceed to third question
    questionThird();
}

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

// validate answer choice for third question
function questionThreeValidation () {

    // if correct answer was chosen
    if(event.target.getAttribute("isValid") == "correct") {
        // create a response for user to see if choice was correct
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // proceed to fourth question
    questionFour();
}

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

// validate answer choice for fourth question
function questionFourValidation () {

    // if correct answer was chosen
    if(event.target.getAttribute("isValid") == "correct") {
        // create a response for user to see if choice was correct
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // proceed to fifth question
    questionFive();
}

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

// validate answer choice for fifth question
function questionFiveValidation () {

    // if correct answer was chosen
    if(event.target.getAttribute("isValid") == "correct") {
        // create a response for user to see if choice was correct
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "You selected the correct answer!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // otherwise if choice was incorrect
    else {
        // penalize remaining time on timer by 15 sec
        timeLeft = timeLeft - 15;

        // create a response to let user know that choice was incorrect
        var response = document.querySelector("h3");
        response.className = "input-response";

        // create text for response
        response.textContent = "The answer you selected was incorrect!"

        // append the response element to the page
        codeQuizContent.appendChild(response);
    }

    // clear timer
    clearInterval(timer);

    // record highscore (score being remaining time)
    highscoreInfo(timer);
}

// function to recieve user input for name and show final score
function highscoreInfo(timer) {

    // set the remaining time as the final score
    var finalScore = timeLeft;

    // clear timer for precaution
    clearInterval(timer);

    // stop timer 
    document.querySelector("timer").textContent = "Quiz completed. Thanks for playing!"

    // clear the quiz content from the page
    codeQuizContent.innerHTML = "";

    // let user know what their score is
    var userScore = document.createElement("h2");
    userScore.textContent = "Your final score is: " + finalScore + ".";
    codeQuizContent.appendChild(userScore);

        // recieve user initials to save alongside score
        var userInitials = document.createElement("input");
        userInitials.placeholder = " ** Please Enter Initials Here **"
        codeQuizContent.appendChild(userInitials);

    // create a button to save score to localStorage
    var saveInfo = document.createElement("button");
    saveInfo.textContent = "Submit Score"
    saveInfo.setAttribute("type", "submit");
    saveInfo.setAttribute("onclick", "inStorage()");
    codeQuizContent.appendChild(saveInfo);

    // add id and classname for styling 
    userScore.id = "user-score";
    userInitials.id = "user-initials";
    userInitials.className = "user-initials";
    saveInfo.id = "save-btn";
    saveInfo.className = "save-btn"
}

// save newest score to highscores record in localStorage
function recordScore() {

    // if there is no records of either scores or player names, create two new arrays
    if(!localStorage.getItem("highscores") && !localStorage.getItem("players")){
        highscores = [];
        players = [];
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
    userInfo = document.querySelector("#user-initials");
    var userInput = userInfo.value;
    players.push(userInput);

    // stringify the score/player info in the arrays so localStorage can use it
    localStorage.setItem("players", JSON.stringify(players));
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// pull the history of players and their highscores from local storage
function loadScores() {

}






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

questionOne();






