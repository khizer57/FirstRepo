var questions = [
    {
        question:'HTML Stand for _________',
        options:['Hyper Text Markup Language','HyperType'],
        correctAnswers:'Hyper Text Markup Language'
    },
    {
        question:'CSS Stand for _________',
        options:['Cascading Style Sheet','cadit style sheet','CSS'],
        correctAnswers:'Cascading Style Sheet'
    },
    {
        question:'JS Stand for _________',
        options:['JavaScript','cadit style sheet','CSS'],
        correctAnswers:'JavaScript'
    },
    {
        question:'Independence Day of Pakistan',
        options:[11,14,13,12],
        correctAnswers:14
    },
    {
        question:'HTML is Programming Language',
        options:['True','False'],
        correctAnswers:'False'
    }
];


var currentQuestionNo = document.getElementById('currentQuestionNo');
var totalQuestionNo = document.getElementById('totalQuestionNo');
var question = document.getElementById('question');
var answerParent = document.getElementById('answerParent');
var progress = document.getElementById('progress');
var next = document.getElementById('next');
var resultParent = document.getElementById("resultParent");
var resultProgress = document.getElementById("resultProgress");
var resultText = document.getElementById("resultText");

var index = 0;
var marks = 0;

function renderQuestion(){
    answerParent.innerHTML = '';
    currentQuestionNo.innerHTML = index+1;
    totalQuestionNo.innerHTML = questions.length;
    question.innerHTML = questions[index].question;   
    for(var i=0; i<questions[index].options.length; i++){
        answerParent.innerHTML += `<div class="col-md-6 py-4 my-3 border border-dark rounded-pill">
        <button onclick="checkAnswer(${questions[index].options[i]})" class="btn btn-block btn-dark px-5 rounded-pill py-2">${questions[index].options[i]}</button>
    </div>`;
    }
    progress.value = index+1;
    progress.max = questions.length;
}
renderQuestion();

function nextQuestion(){

    index++;
    console.log(index);
    renderQuestion();
}
function checkAnswer(e) {
    var userAnswer = e;
    // console.log(userAnswer, "userAnswer");
    var correctAnswer = questions[index].correctAnswers;
    // console.log(correctAnswer, "correctAnswer");
    if (userAnswer == correctAnswer) {
      marks++;
      console.log(marks, "marks");
    }
    if (index + 1 == questions.length) {
      displayResult();
    } else {
      nextQuestion();
    }
  }

  function displayResult() {
    resultParent.style.display = "block";
    resultProgress.max = questions.length;
    resultProgress.value = marks;
    answerParent.style.display = "none";
    question.style.display = "none";
    var resultPercentage = (score / arr.length) * 100;
    resultText.innerHTML = resultPercentage + "%";
    if (resultPercentage < 50) {
      resultText.className += " text-danger";
    } else {
      resultText.className += " text-success";
    }
  }