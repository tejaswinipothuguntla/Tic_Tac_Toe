let btns=document.querySelectorAll(".btn");
const winning_seq=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]];
let turn1=true;
let newgame=document.querySelector("#new-game");
let resetgame=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let msgcont=document.querySelector(".msg-at-top");
let count=0;
btns.forEach((btn) => {
    btn.addEventListener("click",() =>{
        if(turn1===true){
            btn.innerText="O";
            turn1=false;
        }
        else{
            btn.innerText="X";
            turn1=true;
        }
        btn.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});
const gamedraw=()=>{
    msg.innerText=`No winner,Start a New Game!!`;
    msgcont.classList.remove("hide");
    disablebtn();
}
const disablebtn=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}
const enablebtn=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
}
const showWinner =(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebtn();
}
const reset = () =>{
    turn1=true;
    count=0;
    enablebtn();
    msgcont.classList.add("hide");
}
const checkwinner=() => {
    for (let seq of winning_seq){
        let pos1=btns[seq[0]].innerText;
        let pos2=btns[seq[1]].innerText;
        let pos3=btns[seq[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos1===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                return true;
            }
        }
    }
};
newgame.addEventListener("click",reset);
resetgame.addEventListener("click",reset);
