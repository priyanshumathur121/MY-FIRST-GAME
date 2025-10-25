

const choices = document.querySelectorAll(".choice")
const userscore = document.querySelector(".my-score")
const compscore = document.querySelector(".comp-score")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        const comp = compchoice();
        console.log(`userchoice is ${userchoice}`)
        console.log(`compchoice is ${comp}`)
        console.log(wingame(userchoice , comp));

    })
})
const compchoice= () =>{
   const options=["rock","paper","scissor"] 
    const ranidx = Math.floor(Math.random()*3)
    return options[ranidx];
}
 const message = document.querySelector("#msg")
 
const wingame =(userchoice , comp)=>{
    
    if (userchoice === "rock" && comp === "scissor" ||
         userchoice === "paper"&& comp === "rock" ||
        userchoice ==="scissor"&& comp ==="paper" ){
userscore.innerText ++;
            console.log("YOU WON THE GAME !") 
       message.innerText="YOU WON THE GAME !"
       message.style.backgroundColor="green";
       
       

    }
     else if(userchoice === comp){
       console.log("MATCH WAS DRAW !") 
            message.innerText = "MATCH WAS DRAW !"
            message.style.backgroundColor="#2A363B"; 
    }else{
       console.log("YOU LOSE THE GAME !") 
       message.innerText="YOU LOSE THE GAME !"
       compscore.innerText ++;
       message.style.backgroundColor="red";
    }
}
        
    
        

