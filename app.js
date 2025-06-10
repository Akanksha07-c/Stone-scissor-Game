let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usercount=document.querySelector("#user-score");
const compcount=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const option=["scissor","paper","rock"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    msg.innerText="The game is draw";
    msg.style.backgroundColor="grey";
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    })
});

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        usercount.innerText=userscore;
        msg.innerText=`you win!${userchoice} is won by defeting ${compchoice} by 1`;
        msg.style.backgroundColor="green";
    }else{
        compscore++
        compcount.innerText=compscore;
        msg.innerText=`you lost!${compchoice} is won by defeting ${userchoice} by 1`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userchoice)=>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="scissor"){
            userwin=compchoice==="rock"?false:true;
        }else {
            userwin=compchoice==="scissor"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
    
}
