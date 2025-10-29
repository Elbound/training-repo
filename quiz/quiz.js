const quizSheet =
[
    {
        question: "Which of these bird can mimic human voice: ",
        answerKey: "B",
        answer: [
            "Eagle",
            "Parrot",
            "Mockingbird",
            "Falcon"
        ]
        
    },
    {
        question: "Hummingbird are known as these things except: ",
        answerKey: "D",
        answer: [
            "Small",
            "High flapping speed",
            "Humming",
            "Sense of smell"
        ]
    
    },
    {
        question: "Which flightless bird has been known to kill humans: ",
        answerKey: "C",
        answer: [
            "chicken",
            "Penguin",
            "Cassowari",
            "Kiwi"
        ]
    
    },
    {
        question: "Which of these birds can also be called a pigeon: ",
        answerKey: "D",
        answer: [
            "bubul",
            "Crow",
            "Pheasant",
            "Dove"
        ]
    
    },
    {
        question: "What is the fastest animal in the world",
        answerKey: "A",
        answer: [
            "Falcon",
            "Cheetah",
            "Whale",
            "Humans"
        ]
    },

]

//start layout
let layout_start = document.getElementById("scene-quiz-start");
let start_button = document.querySelectorAll(".quiz-start");
// console.log(start_button);

//quiz layout
let layout_quiz     = document.getElementById("scene-quiz-qna");
let quiz_detail     = document.getElementById("quiz-level");
let quiz_time       = document.getElementById("quiz-time");
let quiz_question   = document.getElementById("question-box");
let quiz_next_but   = document.getElementById("quiz-next");
let quiz_answer_text= document.getElementById("quiz-answer-text");
let quiz_answer     = document.querySelectorAll(".quiz-answer");//label
let choises = document.querySelectorAll(".quiz-answer-text");//span

//game over layout
let layout_over     = document.getElementById("scene-quiz-over");
let over_correct    = document.getElementById("correct-score");
let over_final_score= document.getElementById("final-score");
let over_quit       = document.getElementById("quiz-quit");



let unique_question = new Array(quizSheet.length).fill(0);
let current_question = 1;
let current_index = -1;

let correct_count = 0;

let timerInterval;
const duration = 60;

function getRandomQuestion(){
    if(unique_question.every(value=>value==1)) return -1;

    console.log(unique_question);
    
    let index;
    do{
        index = Math.floor(Math.random() * quizSheet.length);
    }while(unique_question[index]==1);
    unique_question[index] = 1;
    return index;
}

function loadQuestion(i){
    const q = quizSheet[i];
    quiz_question.textContent = q.question;
    const letters = ['A','B','C','D'];
    quiz_answer.forEach((input, j) => {
        input.checked = false;
        input.value = letters[j] || String.fromCharCode(65+j);
        input.name = "answer";
        if (choises[j]) choises[j].textContent = q.answer[j] || '';
    });
    
}

function loadNextQuestion(){
    const index = getRandomQuestion();
    if (index === -1) {
        gameOver();
        return;
    }
    current_index = index;
    loadQuestion(index);
    quiz_detail.textContent = "Question number: " + current_question;
}

function startTimer(){
    clearInterval(timerInterval);

    let quiz_timer = duration;
    quiz_time.textContent = quiz_timer;

    timerInterval = setInterval(()=>{
        quiz_timer--;
        quiz_time.textContent = quiz_timer;

        if(quiz_timer <=0 | current_question >= 6){
            gameOver();
        }
    },1000);

}

function gameOver(){
    clearInterval(timerInterval);
    layout_over.style.display = 'flex';
    
    over_correct.textContent = correct_count + " / 5";
    over_final_score.textContent = " " + correct_count*100;
    
    layout_quiz.style.display = 'none';
    current_question = 1;
    current_index = -1;
    correct_count = 0;

    unique_question.fill(0);
    
}


document.addEventListener("DOMContentLoaded",function (e){
    e.preventDefault();
    quiz_detail.textContent = "Question number: " + current_question;
    // quiz_timer
        
    start_button[0].addEventListener('click', ()=>{
        layout_start.style.display = 'none';
        layout_quiz.style.display = 'flex';
        loadNextQuestion();
        startTimer();
    });
    start_button[1].addEventListener('click', ()=>{
        layout_over.style.display = 'none';
        layout_quiz.style.display = 'flex';
        loadNextQuestion();
        startTimer();
    });

    over_quit.addEventListener('click',()=>{
        window.location.replace("../index.html");
    });

    //for quiz..

    // var chosen;

    // var chosen;
    // var current_question;
    quiz_next_but.addEventListener('click', function(e){
        const select = document.querySelector('input[name="answer"]:checked');

        if(select.value == quizSheet[current_index].answerKey){
            correct_count++;
            console.log(correct_count);
        }

        //load next question
        loadNextQuestion();
        select.checked = false;
        current_question++;

    });




});

