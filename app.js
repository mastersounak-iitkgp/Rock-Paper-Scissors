let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let msgbox=document.querySelector(".msg-box");
let user_score=document.querySelector("#userscore");
let comp_score=document.querySelector("#compscore");
const compchoice=()=>{
    let options=["rock","paper","scissors"];
    let randindx=Math.floor(Math.random()*3);
    return options[randindx];
}
const playgame=(userchoice)=>{
    console.log(`${userchoice} was clicked`);
    let comp=compchoice();
    if((comp==="scissors"&&userchoice==="paper")|| (comp==="rock"&&userchoice==="scissors")||(comp==="paper"&&userchoice==="rock"))
    {
        compscore++;
        msg.innerText="You lost";
        msg.style.backgroundColor="Red";
        comp_score.innerText=compscore;
    }
    else if(comp=== userchoice)
    {
        msg.innerText="Game was draw";
        msg.style.backgroundColor="#081b31";
    }
    else {
        userscore++;
        msg.innerText="You won";
        msg.style.backgroundColor="Green";
        user_score.innerText=userscore;
    }
    console.log(`userscore=${userscore}`);
    console.log(`compscore=${compscore}`);
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
        


    })
})


