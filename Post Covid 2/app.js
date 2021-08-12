var currentQuestionNo = document.getElementById('currentQuestionNo')
var totalQuestionNo = document.getElementById('totalQuestionNo')
var question = document.getElementById('question')
var answerParent = document.getElementById('answerParent')
var progess = document.getElementById('progress')
var next = document.getElementById('next')

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
]

var index = 0
var marks = 0

function renderQuestion(){
    answerParent.innerHTML = ''
    currentQuestionNo.innerHTML = index+1 
    totalQuestionNo.innerHTML = questions.length
    question.innerHTML = questions[0].question   
    for(var i=0; i<question[0].options.length; i++){
        answerParent.innerHTML += `<div class="col-md-6 py-4 my-3 border border-dark rounded-pill">
        <button onclick="checkAnswer(${questions[index].options[i]},${questions[index].correctAnswer})" class="btn btn-block btn-dark px-5 rounded-pill py-2">${questions[index].options[i]}</button>
    </div>`
    }
    progess.value = index+1
    progess.max = questions.length
}
renderQuestion()

function nextQuestion(){
    index = index+1
    console.log(index)
    renderQuestion()
}
function checkAnswer(optionvalue,correctValue){
    if(optionvalue == correctValue){
        marks = marks+1
    }

}