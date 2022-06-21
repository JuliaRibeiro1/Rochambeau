'use strict'
// paper clipart from <a href='https://pngtree.com/so/Blue'>Blue png from pngtree.com/</a>

//all variables
let computerShapesArr = ["assets/paper.PNG","assets/scissors.png","assets/rock.png"]
let shapesOptions = document.querySelectorAll(".shapes-options-container")
const paperBtn = document.querySelector(".paper-shape")
const rockBtn = document.querySelector(".rock-shape")
const scissorsBtn = document.querySelector(".scissors-shape")
let playerShape = document.querySelector(".player-shape")
let computerShape = document.querySelector(".computer-shape")
let computerScore = document.querySelector(".computer-score")
let playerScore = document.querySelector(".player-score")
let computerShapeImg = document.querySelector(".computer-shape-img")
let playerShapeImg = document.querySelector(".player-shape-img")
let playerScoreCounter = 0
let computerScoreCounter = 0
let startBtn = document.querySelector(".curtains")
let curtainsH1 = document.querySelector(".curtains h1")
let curtains = document.querySelector(".curtains")

let curtainLeft = document.querySelector(".curtain-left")
let curtainRight = document.querySelector(".curtain-right")
let winOrLose = document.querySelector(".winOrLose")
/*curtainsH1.textContent = "Roshambo"
startBtn.textContent = "Start game"*/
let winnerContainer = document.querySelector(".roshambo-winner-container")
let finalComputerScore = document.querySelector(".final-computer-score")
let finalPlayerScore = document.querySelector(".final-player-score")
let finalPlayerScoreContainer = document.querySelector(".final-player-score-container")
let finalComputerScoreContainer = document.querySelector(".final-computer-score-container")
const roshambo = document.querySelector(".roshambo")

const shapesOptionsArr = Array.from(shapesOptions).map(buttonText => buttonText.addEventListener("click",(e) => {
   let chosenShape = e.target.textContent
   if(chosenShape === "rock") {
      playerShapeImg.setAttribute("src",computerShapesArr[2])
       console.log(playerShapeImg.src)
   }
   else {
       if(chosenShape === "scissors") {
       playerShapeImg.setAttribute("src",computerShapesArr[1])
       console.log(playerShapeImg.src)
       }
       else {
       playerShapeImg.setAttribute("src",computerShapesArr[0])
       }
   }
  //  })
  let randomComputerShapesArr = Math.floor(Math.random() * computerShapesArr.length)
  computerShapeImg.setAttribute("src",computerShapesArr[randomComputerShapesArr])
  
let getPlayerImg = playerShapeImg.getAttribute("src")
let getComputerImg = computerShapeImg.getAttribute("src")

// checking each player chosen shape and adding points(or not)

console.log(getComputerImg)
  console.log(getPlayerImg === "assets/rock.png" && computerShapeImg.src == "assets/scissors.png")
  console.log(getPlayerImg === computerShapesArr[2])

   switch(true) {
    case getPlayerImg === computerShapesArr[2] && getComputerImg === computerShapesArr[1]:
            playerScoreFunction()
            console.log("rock,scissors")
        break
    case getPlayerImg === computerShapesArr[2] &&getComputerImg === computerShapesArr[1]:
            playerScoreFunction()
            console.log("rock,scissors")
        break
     case getPlayerImg === computerShapesArr[2] && getComputerImg === computerShapesArr[0]:
            computerScoreFunction()
            console.log("rock,paper")
        break
        case getPlayerImg === computerShapesArr[0] && getComputerImg === computerShapesArr[2] :
            playerScoreFunction()
            console.log("paper,rock")
        break
        case getPlayerImg === computerShapesArr[0] && getComputerImg === computerShapesArr[1]:
            computerScoreFunction()
            console.log("paper,scissors")
        break
        case getPlayerImg === computerShapesArr[1] && getComputerImg ===  computerShapesArr[0]:
            playerScoreFunction()
            console.log("scissors,paper")
        break
        case getPlayerImg === computerShapesArr[1] && getComputerImg === computerShapesArr[2]:
            computerScoreFunction()
            console.log("Isso")
        break
        default: 
            playerScore.textContent = playerScoreCounter
            computerScore.textContent = computerScoreCounter
            console.log("Isso")
}
// checking who wins 
 if(playerScoreCounter >= 3) {
    winnerContainer.style.display = "flex"
    winOrLose.textContent = "YOU WIN"
    finalScore()
    finalComputerScoreContainer.style.color = "red"
    finalPlayerScoreContainer.style.color = "green"
    curtainRight.classList.remove("open-right")
    curtainLeft.classList.remove("open-left")
    setTimeout(closeCurtains,4000,restartGame) 
   // restartGame()
}
else if(computerScoreCounter >= 3) {
    winnerContainer.style.display = "flex"
    winOrLose.textContent = "YOU LOSE"
    finalScore()
    finalComputerScoreContainer.style.color = "green"
    finalPlayerScoreContainer.style.color = "red"
    curtainRight.classList.remove("open-right")
    curtainLeft.classList.remove("open-left")
    setTimeout(closeCurtains,4000,restartGame) 
  //  restartGame() 
}
}))
//restartGame() 

// functions
function finalScore() {
  finalComputerScore.textContent = computerScoreCounter
  finalPlayerScore.textContent = playerScoreCounter
  roshambo.classList.add("addBlur")
}
/*function closeCurtains(){
  winnerContainer.style.display = "none"
  roshambo.style.display = "none"
  curtains.style.display = "flex"
  curtainRight.classList.add("close-right")
  curtainLeft.classList.add("close-left")
  
}*/
function closeCurtains(callback){
  winnerContainer.style.display = "none"
  roshambo.style.display = "none"
  curtains.style.display = "flex"
  curtainRight.classList.add("close-right")
  curtainLeft.classList.add("close-left")
  callback()
}
function computerScoreFunction() {
    computerScoreCounter = computerScoreCounter + 1
    computerScore.textContent = computerScoreCounter 
}
function playerScoreFunction() {
    playerScoreCounter = playerScoreCounter + 1
    playerScore.textContent = playerScoreCounter
}
function restartGame() {
    playerScoreCounter = 0
    computerScoreCounter = 0
    winnerContainer.style.display = "none"
    finalComputerScoreContainer.style.color = "white"
    finalPlayerScoreContainer.style.color = "white"
    roshambo.classList.remove("addBlur")
}
console.log(startBtn.innerText)
startBtn.addEventListener("click",() => {
   curtainRight.classList.add("open-right")
   curtainLeft.classList.add("open-left")
   console.log("OIi")
   (setTimeout(function () {
    curtains.style.display = "none"
    roshambo.style.display = "inline"
   },1000))
})