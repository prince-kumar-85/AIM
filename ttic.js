let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let nwgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;    //playerX ,playerO
// nwgamebtn()=>{
let resetgame=()=>{
    turnO=true;
    enableblebobex();
    msgcontainer.classList.add("hide");
}
nwgamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)
// }

//creating the winning pattern by multi array that means aaray of aaray or that means 2d aaray
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
// console.log(winpatterns);
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO==true){
            
            box.innerText ="O";
            turnO = false;
            box.disabled = true;
        }else{
            box.innerText="X";
            turnO = true;
            box.disabled = true;
        }
        checkwinner();
    });
});
const checkwinner=()=>{
    for(let pattern of winpatterns){
            let pos1val =  boxes[pattern[0]].innerText;
            let pos2val =  boxes[pattern[1]].innerText;
            let pos3val =  boxes[pattern[2]].innerText;
            if( pos1val!="" && pos2val != "" && pos3val !="" ){
                if( pos1val=== pos2val &&  pos2val === pos3val){
                    console.log("winner", pos1val);
                    // enableblebobex();
                    showWinner(pos1val);
                }
            }
    }
};



const disablebobex=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enableblebobex=()=>{
    for(let box of boxes){
        box.disabled=true
        box.innerText=""
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebobex();
    // enableblebobex();
}
