const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'

  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'

  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'

  }
]

selectionButtons.forEach(selectionbutton => {
  selectionbutton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)
  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)
  if (yourWinner)incremenetScore(yourScoreSpan)
  if (computerWinner)incremenetScore(computerScoreSpan)
}

function incremenetScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innertext) + ``
}


function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classListadd('result-selection')
  if (winner) div.className.add('winner')
  finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}