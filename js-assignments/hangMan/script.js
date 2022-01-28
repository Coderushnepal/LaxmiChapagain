// create title div
var titleDiv = document.createElement("div");

// css to title div
titleDiv.style = `
position:absolute;
text-align:center;`;

// create title
var title = document.createElement("h1");
title.innerHTML = "HangMan";

// css to title
title.style = `
font-weight: bold;
color: #ffffff; `;
titleDiv.appendChild(title);

// create description
var description = document.createElement("p");
description.innerHTML = "Find the hidden word-Enter a letter";

// css to description
description.style = `
    color: #ffffff;
    position: absolute;`;
titleDiv.appendChild(description);
document.body.appendChild(titleDiv);

// Accesing notification div
var winningDiv = document.getElementById("winning");
winningDiv.style.display = "none";
var gameoverDiv = document.getElementById("gameOver");
gameoverDiv.style.display = "none";

// Accessing figurepart>> head, body, arms, legs
var figurePart = document.getElementsByClassName("figurepart");
for (i = 0; i < figurePart.length; i++) {
    figurePart[i].style.display = "none";
}

// Random word generaton
var nameList = ['computer', 'engine', 'helicopter', 'poetry', 'family'];
var randomWord = nameList[Math.floor(Math.random() * nameList.length)];
console.log(randomWord);
var splittedRandomWord = randomWord.split("");

// Letters in span
var letterInSpan = function() {
    for (i = 0; i < splittedRandomWord.length; i++) {
        var createSpan = document.createElement("span");
        //creating span or dashes
        createSpan.classList.add("letters");
        var spanLetter = document.getElementById("letterBlanks");
        spanLetter.appendChild(createSpan);
    }
}
letterInSpan();

var createWrongLettersDiv = document.createElement("div");
createWrongLettersDiv.id = "wrongLettersDiv";
createWrongLettersDiv.classList.add("wrongLettersDiv");
var wrongLettersToDisplay = document.getElementById("storeLetters");
wrongLettersToDisplay.appendChild(createWrongLettersDiv);

// Guess from user
var yourGuess = new Set(); // passing a set of array
var wrongGuess = new Set();
var count = 0;

// comparing original word with pressed letter
function compareOriginalAndPressedLetter() {
    document.addEventListener("keypress", function(event) {
        var pressedLetter = event.key;
        console.log(pressedLetter);
        yourGuess.add(pressedLetter); //create a new set and add values to new set
        if (randomWord.includes(pressedLetter))
            for (j = 0; j < randomWord.length; j++) {
                if (pressedLetter === randomWord[j]) {
                    count++;
                    correctLetters(pressedLetter, j);
                }
                console.log(count, randomWord.length);
                if (count === randomWord.length) {
                    winGame();
                }
            }
        else {
            wrongGuess.add(pressedLetter);
            IncorrectLetters(wrongGuess);
            displayingParts(wrongGuess);
        }
    })
}
compareOriginalAndPressedLetter();

//Filling the blanks with correct letter from users
function correctLetters(value, index) {
    const letterStored = document.getElementById('letterBlanks').children[index]; //Accessing children
    letterStored.innerHTML = value;
}

function IncorrectLetters(wrongGuess) {
    var wrongLetter = document.getElementById('wrongLettersDiv');
    wrongLetter.innerHTML = "Wrong Guess" + ': ' + Array.from(wrongGuess).join(); // creates and returns a new string by concatenating all of the elements in an array //convert set to array//confusion
    document.body.appendChild(wrongLetter); // confusion
}

function displayingParts() {
    var figurePath = document.getElementsByClassName("figurepart");
    console.log(figurePath);
    for (i = 0; i < figurePath.length; i++) {
        if (figurePath[i].style.display == 'none') {
            figurePath[i].style.display = "block";
            if (i == figurePath.length - 1) {
                // alert('Game Over')
                var gameoverDiv = document.getElementById("gameOver");
                gameoverDiv.style.display = "block";
                var p = document.getElementById("sorry");
                p.innerHTML = "Sorry! You Lost 🤔" + "The right word is " + randomWord;
                gameoverDiv.appendChild(h2);
            }
            break;
        }
    }
}

function winGame() {
    for (i = 0; i < splittedRandomWord.length; i++) {
        var createSpan = document.createElement("span");
    }
    if (createSpan.value != "") {
        var winningDiv = document.getElementById("winning");
        winningDiv.style.display = "block";
    }
}
var playAgainLost = document.getElementById("playagainButton2")
console.log(playAgainLost);
playAgainLost.addEventListener("click", function(event) {
    resetGame();
})
var playAgainWin = document.getElementById("playagainButton1")
console.log(playAgainWin);
playAgainWin.addEventListener("click", function(event) {
    resetGame();
})

function resetGame() {
    window.location.reload();
}