// set empty arrays to store high scores and corresponding initials
var score = [];
var initials = [];

// set initial time left at 200 sec until first question is given
var timeLeft = 200;

// set up the items that hold questions and answers for easy access in functions
var questionAndAnswers = [

    {
        question = "Bootstrap was built using _______.",
        answers = {
            a = "Javascript",
            b = "JQuery",
            c = "CSS", 
            d = "HTML"
        },
        solution = "c"
    },
    {
        question = "JQuery was built using _______.",
        answers = {
            a = "CSS",
            b = "HTML",
            c = "BootStrap", 
            d = "Javascript"
        },
        solution = "d"
    },
    {
        question = "HTML is used for creating a website's _______.",
        answers = {
            a = "structure",
            b = "style",
            c = "Javascript", 
            d = "Web-API"
        },
        solution = "a"
    },
    {
        question = "CSS is used for creating a website's _______.",
        answers = {
            a = "structure",
            b = "Jquery",
            c = "HTML", 
            d = "style"
        },
        solution = "d"
    },
    {
        question = "Javascript is used for creating a website's _______.",
        answers = {
            a = "style",
            b = "fine-tuend tasks",
            c = "Bootstrap", 
            d = "CSS"
        },
        solution = "b"
    }

];

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

// save the user's initials  alongside the highscore
var enterInitials = function () {

    initials = window.prompt("Enter your initials: ");

    return initials;

};


var questionOne = function () {



};

// save the score to local storage
var saveScore = function () {

};

// print the final score on the screen and ask for initials
var finalScore = function () {

};
