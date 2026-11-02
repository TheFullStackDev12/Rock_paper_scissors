console.log("Welcome to my Rock Paper Scissors Game")
name_1 = ""
name_2 = ""
let player_count = window.prompt("How many are playing(2 max)")
if (+player_count == 1) {
    let name_1 = window.prompt("What is your name ")
} 
if (+player_count == 2) {
    let name_1 = window.prompt("What is the name of player 1?")
    let name_2 = window.prompt("What is the name of player 2?")
}