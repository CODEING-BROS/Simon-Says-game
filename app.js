let gameSeq = [];
let userSeq = [];
let btns = ["box1", "box2", "box3" , "box4"];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false){
        console.log("game started")
        started = true;
        
        levelUp();
    }
    
})


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randBox = btns[randIdx];
    let randBtn = document.querySelector(`.${randBox}`);


    gameSeq.push(randBox);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkSeq(idx){
    if(userSeq[idx] === gameSeq[idx])
        {
            if(userSeq.length == gameSeq.length){
                setTimeout(() => {
                    levelUp();
                }, 1000);
            }
        }
        else{
            h2.innerText = `Game Over! your score is ${(level-1)*10}
             Press any key to start again`;
             document.querySelector("body").style.backgroundColor = "red"
             setTimeout(() => {
                document.querySelector("body").style.backgroundColor = "white"
             }, 500);
            reset();
        }
}

function btnPress (){
    let btn = this;
    btnFlash(btn);
    userBox = btn.getAttribute("id");
    userSeq.push(userBox);
    console.log(userSeq)

    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns)
    {
        btn.addEventListener("click" , btnPress);
    }


function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}