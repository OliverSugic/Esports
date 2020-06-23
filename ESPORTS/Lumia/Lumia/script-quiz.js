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
  {//1
    question: 'Whats this page about ?',
    answers: [
    {text: 'Esports', correct: true},
    {text: 'Communication', correct: false},
    {text: 'Cars', correct: false},
    {text: 'Tetris', correct: false}
    ]
  },
  {//2
    question: 'Whats a main event of the year ?',
    answers: [
    {text: 'League of Legends', correct: false},
    {text: 'CSGO Major', correct: true},
    {text: 'Rocket League', correct: false},
    {text: 'War Thunder', correct: false}
    ]
  },
  {//3
  question: 'Which game requires only one player per team',
    answers: [
    {text: 'Dota', correct: false},
    {text: 'CSGO', correct: false},
    {text: 'Rocket League', correct: false},
    {text: 'Hearthstone', correct: true}
    ]
  },
  {//4
  question: 'What game has the biggest price pool?',
    answers: [
    {text: 'Dota', correct: true},
    {text: 'Fortnite', correct: false},
    {text: 'League of Legends', correct: false},
    {text: 'Starcraft', correct: false}
    ]
  },
  {//5
  question: 'Who is the best CSGO player ?',
    answers: [
    {text: 'Shroud', correct: false},
    {text: 'Dev1ce', correct: false},
    {text: 'S1mple', correct: true},
    {text: 'flusha', correct: false}
    ]
  },
  {//6
  question: 'Which of the following teams does Not have a CSGO Team',
    answers: [
    {text: 'TSM', correct: false},
    {text: 'C9', correct: false},
    {text: 'Misfits', correct: true},
    {text: 'Fnatic', correct: false}
    ]
  },
  {//7
  question: 'What game is not a FPS',
    answers: [
    {text: 'Valorant', correct: false},
    {text: 'CSGO', correct: false},
    {text: 'Rainbow Six Siege', correct: false},
    {text: 'Starcraft', correct: true}
    ]
  },
  {//8
  question: 'What Team won 4 CS Majors in a row',
    answers: [
    {text: 'Astralis', correct: true},
    {text: 'NaVi', correct: false},
    {text: 'Cloud9', correct: false},
    {text: 'Tyloo', correct: false}
    ]
  },
  {//9
  question: 'Who is known being the best mid laner in League of Legends',
    answers: [
    {text: 'Bjergsen', correct: false},
    {text: 'Faker', correct: true},
    {text: 'xPeke', correct: false},
    {text: 'Caps', correct: false}
    ]
  },
  {// 10
  question: 'Which team won games by trolling in League of Legends ',
    answers: [
    {text: 'G2 Esports', correct: true},
    {text: 'TSM', correct: false},
    {text: 'FNATIC', correct: false},
    {text: 'FunPlusPheonix', correct: false}
    ]
  },
  {//11
  question: 'Which team was the first Amarican team who won the CSGO Major ',
    answers: [
    {text: 'FaZe', correct: false},
    {text: 'Cloud9', correct: true},
    {text: 'TSM', correct: false},
    {text: 'Team Liquid', correct: false}
    ]
  },
  {//12
  question: 'in what land was the win of ENCE showcased in local TV',
    answers: [
    {text: 'Swedish', correct: false},
    {text: 'Densk', correct: false},
    {text: 'Finnish', correct: true},
    {text: 'Holland', correct: false}
    ]
  },
  {//13
  question: 'Who got banned for cheating with Word.exe in CSGO',
    answers: [
    {text: 'Forsaken', correct: true},
    {text: 'Pasha', correct: false},
    {text: 'flusha', correct: false},
    {text: 'KQLY', correct: false}
    ]
  },
  {//14
  question: 'Which CSGO has the biggest biceps',
    answers: [
    {text: 'fREAKAZOiD', correct: false},
    {text: 'Pasha Biceps', correct: true},
    {text: 'flusha', correct: false},
    {text: 'blameF', correct: false}
    ]
  },
  {//15
  question: 'Which game had the first BattleRoyale mode',
    answers: [
    {text: 'Fortnite', correct: false},
    {text: 'The Culling', correct: false},
    {text: 'PUBG', correct: false},
    {text: 'Minecraft', correct: true}
    ]
  }
]
