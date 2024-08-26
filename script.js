// Crea le funzioni
// Prendi gli elementi dal DOM
// Crea le variabili necessarie
// Imposta l'event listener
    // Crea il ciclo per far comparire le celle e numerale            
    // Crea un nuovo event listener  
        //Aggiungi la classe clicked



// Prendi gli elementi dal DOM
const formElement = document.querySelector('form');
let tableElement = document.querySelector('.table');
const buttonElement = document.querySelector('button');
const selectElement = document.querySelector('select');
const optionElement = document.querySelectorAll('option');
const scoreElement = document.getElementById('score');

//----------------------------------------------------------------------------

// Crea le funzioni necessarie
// Funzione per cambiare il valore
function changeValue() {
    selection = selectElement.value;
    console.log(selection);
}

// Funzione generatrice di numeri casuali diversi
function generateRandomDifferentNumber (bombNumber, difficulty) {
    randomNumbers = [];
    for (let i = 1; i <= bombNumber; i++) {
        const randomNumber = Math.floor((Math.random() * difficulty) + 1);
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        } else {
            i--;
        }
    }
    console.log(randomNumbers);
    return randomNumbers;
}

//Funzione per creare il numero di celle corretto
function createCell(cell, difficulty) {
    tableElement.innerHTML = '';

    // Creiamo dei numeri random
    generateRandomDifferentNumber(bombNumber, difficulty);

    for (let i = 0; i < numberCell; i++) {

        // Dichiara un array cells
        let cells = [i];
    
        // Monta quanto necessario
        cells[i] = document.createElement('div');
        cells[i].classList.add(cell);
        tableElement.appendChild(cells[i]);
        
        // Richiama dal DOM quanto appena creato
        const cellsElement = document.querySelectorAll('.' + cell); 
    
        // Monta quanto necessario
        cellsElement[i].innerHTML = `<p>${i + 1}</p>`;
    
        // Crea un nuovo event listener  
        cellsElement[i].addEventListener('click', function() {
    
            // Impedisci di poter cliccare nuovamente sulla stessa casella
            if (cellsElement[i].classList.contains('clicked')) return;

            // Aumenta lo score di 1 e stampa
            score++;
            console.log(scoreElement)
            console.log(score)
            scoreElement.innerHTML = score;

            //Aggiungi la classe clicked
            cellsElement[i].classList.add('clicked');
    
            // Richiama dal DOM il number
            const numberElement = document.querySelectorAll('p');
    
            //Controlla e stampa il numero
            const number = parseInt(numberElement[i].textContent);
            console.log(number);

            // Verifica se il numero random è uguale al numero della casella cliccata 
            if (randomNumbers.includes(number)) {
                console.log ('test ok')
            } else if (!randomNumbers.includes(number)) {
                console.log('test non ok')
            }
        })
    }
}

//----------------------------------------------------------------------------

// Crea le variabili necessarie
let numberCell;
let selection = '';
let score = 0;
let bombNumber = 16;
let randomNumbers = [];
let difficulty = 100;

//----------------------------------------------------------------------------

// Inserisci l'evento change
selectElement.addEventListener('change', changeValue());

//----------------------------------------------------------------------------

// Imposta l'event listener
buttonElement.addEventListener('click', function(event) {
    event.preventDefault();

    // Imposta il numero di celle in base alla selezione
    if (selection === 'Easy') {
        numberCell = 100;    
        createCell('cell', numberCell);

    } else if (selection === 'Medium') {
        numberCell = 81;
        createCell('cell-medium', numberCell);

    } else if (selection === 'Hard') {
        numberCell = 49;
        createCell('cell-hard', numberCell);

    } else {
        console.log('Seleziona una difficoltà');
        return;
    }   
})