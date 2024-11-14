let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");


let btns=['red','green','yellow','purple'];

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started=true;
        levelup();
    }
})

function gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
} 
    function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolr=btns[randidx];
    let randbtn=document.querySelector(`.${randcolr}`);
    // console.log(randidx);
    // console.log(randcolr);
    // console.log(randbtn);
    gameseq.push(randcolr);
    console.log(gameseq);
    gameflash(randbtn); 
}
function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over!!Your score was <b>${level}<b> <br>Press any key to start the game.`
        document.querySelector("body").style.backgroundColor="Red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="White";
        },200
    )
        reset();
    }
}
function btnPress(){ 
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolr=btn.getAttribute("id");
    userseq.push(usercolr);
    checkAns(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
