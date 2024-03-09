let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const drawgame=()=>{
    // console.log("game was draw");
    msg.innerText= "It's a Draw!, Play Again";
    msg.style.backgroundColor="#081b31";
};

const showWiner=(userwin,userchoice,CompChoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        // console.log("You Win");
        msg.innerText=`Congratulation You Won! Your ${userchoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "Green"
    }else{
        compScore++;
        compscorepara.innerText=compScore;
        // console.log("You Lose");
        msg.innerText=`Sorry You Lost! ${CompChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    };
};

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};


const playGame=(userchoice)=>{
    console.log("user choice =",userchoice);
    const CompChoice=genCompChoice();
    console.log("Comp choice =",CompChoice);

    if(userchoice===CompChoice){
        drawgame();

    }else{
        let userwin=true;
        if(userchoice==="paper"){
            //scissor:paper
            userwin = CompChoice ==="scissor"? false : true;
        }else if(userchoice==="rock"){
            userwin = CompChoice ==="paper"? false : true; 
        }else{
            userwin = CompChoice ==="rock"? false : true;

        }
        showWiner(userwin,userchoice,CompChoice);
    };
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);

    });
});