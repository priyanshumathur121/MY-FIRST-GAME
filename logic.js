let myScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const myScoreEl = document.querySelector(".my-score");
const compScoreEl = document.querySelector(".comp-score");

const playerHandImg = document.getElementById("player-hand-img");
const computerHandImg = document.getElementById("computer-hand-img");

const compchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
}

const drawGame = () => {
    console.log("MATCH WAS DRAW !");
    message.innerText = "MATCH WAS DRAW !";
    message.style.backgroundColor = "#2A363B";
}

const wingame = (userchoice, comp) => {
    if (userchoice === comp) {
        drawGame();
        return;
    }

    let userWin = true;
    if (userchoice === "rock") {
        userWin = (comp === "paper") ? false : true;
    } else if (userchoice === "paper") {
        userWin = (comp === "scissor") ? false : true;
    } else {
        userWin = (comp === "rock") ? false : true;
    }

    if (userWin) {
        myScore++;
        myScoreEl.innerText = myScore;
        console.log("YOU WON THE GAME !");
        message.innerText = `YOU WON! Your ${userchoice} beats ${comp}`;
        message.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreEl.innerText = compScore;
        console.log("YOU LOSE THE GAME !");
        message.innerText = `YOU LOSE! ${comp} beats your ${userchoice}`;
        message.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        
        choices.forEach(btn => btn.style.pointerEvents = 'none');
        
        message.innerText = "Shaking...";
        message.style.backgroundColor = "black";

        playerHandImg.src = `rock.png`;
        computerHandImg.src = `rock.png`;

        playerHandImg.classList.add("shake");
        computerHandImg.classList.add("shake");

        setTimeout(() => {
            playerHandImg.classList.remove("shake");
            computerHandImg.classList.remove("shake");

            const comp = compchoice();

            playerHandImg.src = `${userchoice}.png`;
            computerHandImg.src = `${comp}.png`;

            wingame(userchoice, comp);
            
            choices.forEach(btn => btn.style.pointerEvents = 'auto');

        }, 1500);
    });
});
