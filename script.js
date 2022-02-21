const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    }
]


selectionButtons.forEach(selectionsButton => {
    selectionsButton.addEventListener('click', e => {
        const selectionName = selectionsButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computedSelection = randomSelection()
    const compWin = isWinner(computedSelection, selection)
    const yourWin = isWinner(selection, computedSelection)
    
    addSelectionResult(computedSelection, compWin)
    addSelectionResult(selection, yourWin)
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex] 
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}