const startbutton = document.getElementById('start-btn')
startbutton.addEventListener('click',startGame)

const nextButton = document.getElementById('next-btn')
nextButton.addEventListener('click',() => {
  currentQuestionIndex++
  setNextQuestion()
})

const questionConatinerElements = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffeldQuestion, currentQuestionIndex


function startGame() {
  startbutton.classList.add('hide')
  questionConatinerElements.classList.remove('hide')
  shuffeldQuestion = question.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  questionConatinerElements.classList.remove('hide')
  setNextQuestion()
}


function setNextQuestion(){
  resetState()
  showQuestion(shuffeldQuestion[currentQuestionIndex])
}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswser)
    answerButtonsElement.appendChild(button)
  });
}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswser(e){
  const selectButton = e.target
  const correct = selectButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button =>{
    setStatusClass(button,button.dataset.correct)
  })
  if(shuffeldQuestion.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  }else{
    const homeButton = document.getElementById('home-btn')
    homeButton.classList.remove('hide')
    startbutton.innerText = 'Restart'
    startbutton.classList.remove('hide')
  }
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  }
  else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
} 

const question = [
  {
    question: 'Whats this page about ?',
    answers: [
    {text: 'Esports', correct: true},
    {text: 'Communication', correct: false},
    {text: 'Cars', correct: false},
    {text: 'Tetris', correct: false}
    ]
  },
  {
    question: 'Whats the main event of the year ?',
    answers: [
    {text: 'VALORANT', correct: false},
    {text: 'CSGO Major', correct: true},
    {text: 'Rocket League', correct: false},
    {text: 'War Thunder', correct: false}
    ]
  } 
]