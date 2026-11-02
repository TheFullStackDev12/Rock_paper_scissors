// Import the package at the very top of your file
import sample from 'lodash.sample'


console.log("Welcome to my Rock Paper Scissors Game")

// Variables
const choices = ['rock', 'paper', 'scissors'];
name_1 = window.prompt("What is your name Player 1")
name_2 = window.prompt("What is your name , Player 2 ") && name_1


let player_count = window.prompt("How many are playing(2 max)")
if (+player_count == 1) {
    let name_1 = window.prompt("What is your name ")
    const computerChoice = sample(choices); 
    
} 
if (+player_count == 2) {
    let name_1 = window.prompt("What is the name of player 1?")
    let name_2 = window.prompt("What is the name of player 2?")
}


// Let the package pick the random choice for you!
const computerChoice = sample(choices); 

console.log("The computer randomly picked: " + computerChoice);