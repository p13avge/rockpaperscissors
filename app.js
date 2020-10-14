//javascript variables
let userScore=0;
let computerScore=0;
let userChoice='';
let computerChoice='';

//DOM
const choicesContainer_div = document.querySelector(".choicesContainer");
const resultText_h4 = document.querySelector(".resultText");
const userScoreSpan_span =document.querySelector(".userScoreSpan");
const computerScoreSpan_span =document.querySelector(".computerScoreSpan");


choicesContainer_div.addEventListener("click",getUserChoice); //i check when the user clicks on the div that contains the game choices and above i use the event.target.className to find which choice exactly the user clicked

function getUserChoice(event){

    switch (event.target.className){ //see which choice the user clicked and assigned it to a variable
        case 'rock':
            userChoice='rock';
            game();  //for each case call the game function which will take computers choice and call the get result function.I could call tha game function only one time after the switch statement,but there was a bug when i cliked anywhere in the div container cause this is where i placed the addEventListener.So everytime the user clicked anywhere except the choices(images),the code would execute and print unexpected results.So now the code executes only when the user specifically clicks on the images.
            break;
        case 'paper':
            userChoice='paper';
            game();
            break;
        case 'scissors':
            userChoice='scissors';
            game();
            break;
    }

    
}

function game(){
    computerChoice=getComputerChoice();  //get computers choice
    getResult(userChoice,computerChoice); //get the result of the choices
}

function getComputerChoice(){ //create an array and use the math random * 3,and everytime the funcitons is called it is creating a random number between 0 and 2.Then use the math floor to make it an integer.
    let choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function getResult(userChoice,computerChoice){

    switch(userChoice+computerChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            userScore+=1;
            win()
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            computerScore+=1;
            defeat()
            break;
        case 'scissorsscissors':
        case 'paperpaper':
        case 'rockrock':
            draw();
            break; 
    }
    checkWhoWon(); //check if the score is up to 10 and if yes restart the game.
}

function win(){ //if user wins increase his score and change the result text
    resultText_h4.innerText=`Your choice was ${userChoice} and Computer's choice was ${computerChoice}. You win!`;
    userScoreSpan_span.innerText=userScore;
}

function defeat(){//if computer wins increase his score and change the result text
    resultText_h4.innerText=`Your choice was ${userChoice} and Computer's choice was ${computerChoice}. You loose! :(`;
    computerScoreSpan_span.innerText=computerScore;
}

function draw(){
    resultText_h4.innerText="Its a draw!";
}

function checkWhoWon(){
    if(userScore==10){
        resultText_h4.innerText="You won the game! Play again";
        initializeSpans();
    }else if(computerScore==10){
        resultText_h4.innerText="You lost the game. Play again";
        initializeSpans();
    }
}

function initializeSpans(){
    userScore=0;
    computerScore=0;
    console.log(userScore,computerScore);
    userScoreSpan_span.innerText=userScore;
    computerScoreSpan_span.innerText=computerScore;
}