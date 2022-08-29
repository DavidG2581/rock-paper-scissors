

choices = ["rock","paper","scissors"];

let humanWins = 0;
let compWins = 0;
let totalGames = 0;
let compChoice = "none";
let humanChoice = "";
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');



selectionsList = [rock,paper,scissors];

//get user input and check if exists in 'choices' array
function playerChoice(){
    let playerSelection = prompt('Please type your selection').toLowerCase();
    while (choices.indexOf(playerSelection)==-1) {
        playerSelection = prompt('Please type your selection').toLowerCase();    
    }
    return playerSelection;
    console.log('Player chose: '+playerSelection)
}

// randomly select choice for Computer
function getComputerChoice() {
    let random_number = Math.floor(Math.random()*100);
    console.log("random numer: "+random_number)
    if (random_number <= (100*.3333)){
        console.log('rock was chosen by computer')
        return choices[0]
    } else if (random_number>(100*.3333) && random_number <= (100*.6666)) {
        console.log('paper was chosen by computer')
        return choices[1]
    }else {
        console.log('scissors was chosen by computer')
        return choices[2]
    }
}

// start the game

function runGame(human, computer){
    console.log("Game begins")
    let compWins = 0;
    let humanWins = 0;
    let whileCount = 0;
    while ((compWins == 0)&&(humanWins==0)){
        whileCount += 1;
        if (whileCount > 5) {
            console.log('exit test ------ WHILE LOOP NOT WORKING')
            humanWins = 1;
            compWins=0;
        }

        while(human == computer){
            alert('TIE. running while loop to get new choices');
            human = playerChoice();   
            computer = getComputerChoice();
            console.log('new computer choice: '+computer+' new human choice: '+human);
        }
    
        switch(human){
            case "rock":
                console.log('you chose rock');
                if (computer == "paper"){
                    compWins += 1;
                }else if (computer == "scissors"){
                    humanWins += 1;
                }else {console.log('error')}
                break;
            case 'paper': 
                console.log('you chose paper');
                if (computer=="rock"){
                    humanWins += 1;
                }else if (computer == "scissors"){
                    compWins +=1;
                }else {
                    console.log('error')}
                break;
            case 'scissors': 
                console.log('you chose scissors');
                if (computer == 'rock') {
                    compWins += 1;
                }else if (computer == 'paper') {
                    humanWins += 1;
                }else {console.log('error')}
            break;
            
            
        }
        console.log('human wins: '+humanWins+' computer wins: '+compWins);
    }
    let result = false;
            if (humanWins > compWins){
                result = true;
                alert('You win!')
            }else{
                alert('You lose!')
            }
            return result;
}

compChoice = getComputerChoice();
humanChoice = playerChoice();
console.log('choices made '+humanChoice+' computer chose '+compChoice);

runGame(humanChoice, compChoice);
document.getElementById('message').innerHTML = ("Computer chose: " + getComputerChoice());
 
