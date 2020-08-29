function rpsGame(yourChoice){
    //humanchoice
    let humanChoice = yourChoice.id;

    //computerChoice
    let computerChoice = randomToChoice(randomToInt());

    //decideWinner
    let result = decideWinner(humanChoice,computerChoice);
    //Message
    let finalMessage = rpsMessage(result);

    //FrontendDev
    let FrontendDev = rpsFrontend(humanChoice, computerChoice, finalMessage);

    //Play Again
    playAgain();
}

function randomToInt(){
    return Math.floor(Math.random() * 3);
}

function randomToChoice(number){
    return ["rock","paper", "scissor"][number];
}

function decideWinner(humanChoice, computerChoice){
    let rpsGameDatabase = {
        "rock" : {"rock" : 0.5, "paper": 1, "scissor": 0},
        "paper" : {"rock" : 0, "paper": 0.5, "scissor": 1},
        "scissor" : {"rock" : 1, "paper": 0, "scissor": 0.5}
    }

    let humanScore = rpsGameDatabase[humanChoice][computerChoice];
    let computerScore = rpsGameDatabase[computerChoice][humanChoice];

    return [humanScore, computerScore];
}

function rpsMessage([humanScore, computerScore]){
    if(humanScore === 0){
        return {"message" : "YOU LOST", "color" : "red"};
    } else if(humanScore === 0.5){
        return {"message": "YOU TIE", "color" : "orange"};
    } else{
        return {"message" : "YOU WIN", "color" : "green"};
    }
}

function rpsFrontend(humanChoice, computerChoice, finalMessage){
    let rpsImageDatabase = {
        "rock": document.getElementById("rock").src ,
        "paper": document.getElementById("paper").src,
        "scissor": document.getElementById("scissor").src
    }

    let leftBox = document.getElementById("left-box");
    let middleBox = document.getElementById("middle-box");
    let rightBox = document.getElementById("right-box");
    
    leftBox.childNodes[1].remove();
    middleBox.childNodes[1].remove();
    rightBox.childNodes[1].remove();

    middleBox.style.boxShadow = "none";

    let leftBoxContent = document.createElement("img");
    leftBoxContent.setAttribute("src", rpsImageDatabase[computerChoice]);
    leftBox.appendChild(leftBoxContent);

    let middleBoxContent = document.createElement("h1");
    middleBoxContent.innerHTML = finalMessage["message"];
    middleBoxContent.style.color = finalMessage["color"];
    middleBox.appendChild(middleBoxContent);

    let rightBoxContent = document.createElement("img");
    rightBoxContent.setAttribute("src", rpsImageDatabase[humanChoice]);
    rightBox.appendChild(rightBoxContent);

    leftBox.style.boxShadow = "0px 0px 3px 3px rgba(255, 165, 0,.7)";
    rightBox.style.boxShadow = "0px 0px 3px 3px rgba(255, 165, 0,.7)";
    

}


    