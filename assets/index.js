'use strict'
// paper clipart from <a href='https://pngtree.com/so/Blue'>Blue png from pngtree.com/</a>
//all variables
let obj = {
    rock: {
        img:"assets/rock.png"
    },
    scissors: {
        img:"assets/scissors.png"
    },
    paper: {
        img:"assets/paper.PNG"
    }}
let computerShapesArr = ["assets/paper.PNG","assets/scissors.png","assets/rock.png"]
let shapesOptions = document.querySelectorAll(".shapes-options-container")
let computerScore = document.querySelector(".computer-score")
let playerScore = document.querySelector(".player-score")
let computerShapeImg = document.querySelector(".computer-shape-img")
let playerShapeImg = document.querySelector(".player-shape-img")
let playerScoreCounter = 0
let computerScoreCounter = 0
let startBtn = document.querySelector(".curtains")
let curtains = document.querySelector(".curtains")
let curtainLeft = document.querySelector(".curtain-left")
let curtainRight = document.querySelector(".curtain-right")
let winOrLose = document.querySelector(".winOrLose")
let winnerContainer = document.querySelector(".roshambo-winner-container")
let finalComputerScore = document.querySelector(".final-computer-score")
let finalPlayerScore = document.querySelector(".final-player-score")
let finalPlayerScoreContainer = document.querySelector(".final-player-score-container")
let finalComputerScoreContainer = document.querySelector(".final-computer-score-container")
const roshambo = document.querySelector(".roshambo")

//selecting images
const shapesOptionsArr = Array.from(shapesOptions).map(buttonText => buttonText.addEventListener("click",function checkingClick(e){ 
   let chosenShape = e.target.textContent
        playerShapeImg.setAttribute("src",obj[chosenShape].img);
 
   let randomComputerShapesArr = Math.floor(Math.random() * computerShapesArr.length)
   computerShapeImg.setAttribute("src",computerShapesArr[randomComputerShapesArr])
  
   let getPlayerImg = playerShapeImg.getAttribute("src")
   let getComputerImg = computerShapeImg.getAttribute("src")

// checking each player chosen shape and adding points(or not)
   switch(true) {
    case getPlayerImg === computerShapesArr[2] && getComputerImg === computerShapesArr[1]:
            playerScoreFunction()
        break
    case getPlayerImg === computerShapesArr[2] &&getComputerImg === computerShapesArr[1]:
            playerScoreFunction()
        break
     case getPlayerImg === computerShapesArr[2] && getComputerImg === computerShapesArr[0]:
            computerScoreFunction()
        break
        case getPlayerImg === computerShapesArr[0] && getComputerImg === computerShapesArr[2] :
            playerScoreFunction()
        break
        case getPlayerImg === computerShapesArr[0] && getComputerImg === computerShapesArr[1]:
            computerScoreFunction()
        break
        case getPlayerImg === computerShapesArr[1] && getComputerImg ===  computerShapesArr[0]:
            playerScoreFunction()
        break
        case getPlayerImg === computerShapesArr[1] && getComputerImg === computerShapesArr[2]:
            computerScoreFunction()
        break
        default: 
            playerScore.textContent = playerScoreCounter
            computerScore.textContent = computerScoreCounter
}
// checking who wins 
if(playerScoreCounter == 3) {
    winnerContainer.style.display = "flex"
    winOrLose.textContent = "YOU WIN"
    finalScore()
    finalComputerScoreContainer.style.color = "red"
    finalPlayerScoreContainer.style.color = "green"
    setTimeout(closeCurtains,4000) 
    buttonText.removeEventListener("click",checkingClick)
    setTimeout(addEvent,4000)
}
else if(computerScoreCounter == 3) {
    winnerContainer.style.display = "flex"
    winOrLose.textContent = "YOU LOSE"
    finalScore()
    finalComputerScoreContainer.style.color = "green"
    finalPlayerScoreContainer.style.color = "red"
    setTimeout(closeCurtains,4000) 
    buttonText.removeEventListener("click",checkingClick)
    setTimeout(addEvent,4000)
}

function addEvent () {
    buttonText.addEventListener("click",checkingClick)
}

}))
// functions
function finalScore() {
  finalComputerScore.textContent = computerScoreCounter
  finalPlayerScore.textContent = playerScoreCounter
  roshambo.classList.add("addBlur")
}
function closeCurtains(){
  winnerContainer.style.display = "none"
  curtains.style.display = "flex"

 let closeCurtains = setTimeout(() => {
  curtainRight.style.cssText = "transform: translate(0%);transition:1s"
  curtainLeft.style.cssText = "transform: translate(0%);transition:1s"
  }, 1000)
  restartGame()
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
    playerScore.textContent = playerScoreCounter
    computerScore.textContent = computerScoreCounter
    winnerContainer.style.display = "none"
    finalComputerScoreContainer.style.color = "white"
    finalPlayerScoreContainer.style.color = "white"
    roshambo.classList.remove("addBlur")
    playerShapeImg.removeAttribute("src")
    computerShapeImg.removeAttribute("src")
    
}
startBtn.addEventListener("click",() => {
let openCurtains = (setTimeout(function(){
   curtainRight.style.cssText = " transform: translate(100%);transition:2s"
  curtainLeft.style.cssText = "transform: translate(-100%);transition:2s"
    },1000))
let removeCurtains = (setTimeout(function() {
    curtains.style.display = "none"
  },2000))
})