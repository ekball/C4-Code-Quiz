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


