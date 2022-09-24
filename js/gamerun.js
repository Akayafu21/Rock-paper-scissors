const Scissors = document.getElementById('scissors');
const Spock = document.getElementById('spock');
const Lizard = document.getElementById('lizard');
const Paper = document.getElementById('paper');
const Rock = document.getElementById('rock');

const YourImg = document.getElementById('yourimg');
const Botimg = document.getElementById('botimg');

const Bigbox = document.getElementsByClassName('bigbox');
const Run = document.getElementsByClassName('gamerun');

const Midbox = document.getElementsByClassName('middlebox');
const Reround = document.getElementById('reround');

const Count = document.getElementById('count');

const Hand = ["yellow","cyan","violet","blue","red"]

const Handimg =["scissors","spock","lizard","paper","rock"];

var Yourhand;
var Bothand;
var winorlose;

Count.innerHTML = sessionStorage.score;




Scissors.addEventListener('click',()=>{
    Start(0);
})

Spock.addEventListener('click',()=>{
    Start(1);
})

Lizard.addEventListener('click',()=>{
    Start(2);
})

Paper.addEventListener('click',()=>{
    Start(3);
})

Rock.addEventListener('click',()=>{
    Start(4);
})

Reround.addEventListener('click',()=>{
    reset();
})

Start = (number)=>{
   
    CloseMain();
    Open();

    ShowyourHand(Hand[number],Handimg[number]);
    Yourhand = number;
    setTimeout("GameCheck();",1000); 
}

CloseMain = ()=>{
    Bigbox[0].classList.replace("online","offline");
    Bigbox[0].classList.add("inactive")
}

Open = () =>{
    Run[0].classList.replace("offline","online")
    
}

ShowyourHand = (hand,img) =>{
    Run[0].children[1].children[0].children[0].className = "out mid bigger "+hand;
    YourImg.style.backgroundImage = "url(/images/icon-"+img+".svg)"
}

ShowbotHand = (hand,img) =>{
    Run[0].children[1].children[2].children[0].className = "out mid "+hand;
    Botimg.style.backgroundImage = "url(/images/icon-"+img+".svg)"
   
    setTimeout(" Run[0].children[1].children[2].children[0].classList.add('bigger');",400)
}

GameCheck = () =>{
    do {
        Bothand = (Math.random()*4).toFixed();
        console.log(Bothand);
    }
    while(Bothand == Yourhand)
    ShowbotHand(Hand[Bothand],Handimg[Bothand])
    let result = Yourhand - Bothand;
    if(result == -1||result == -3 || result == 2 || result ==4){
        winorlose =true;
        if(sessionStorage.score){
            sessionStorage.score++;
        }else{
            sessionStorage.score =1;
        }
        console.log(Handimg[Bothand]);
        console.log(winorlose)
        setTimeout("setShadow(0);",1500);
        
    }else {
        if(!sessionStorage.score){
            sessionStorage.score =0;
        }
        winorlose = false;
        console.log(Handimg[Bothand]);
        console.log(winorlose)
        setTimeout("setShadow(2);",1500);
    }
    setTimeout("GotoEndstate();",1000);
    setTimeout("setScore();",1200);
}

GotoEndstate =()=>{
    Run[0].children[0].classList.add('endstate');
    Run[0].children[1].classList.add('endstate');
    Midbox[0].classList.add('show');
        if(winorlose){
            Midbox[0].children[0].innerHTML = "You win"
        }else {
            Midbox[0].children[0].innerHTML = "You lose"
        }
}

setScore = ()=>{
    Count.innerHTML = sessionStorage.score;
}

setShadow = (child)=> {
    
    Run[0].children[1].children[child].children[0].classList.add('shadow');
}

reset = () =>{
    Bigbox[0].className = "bigbox online";
    Run[0].className = "gamerun offline"
    Run[0].children[1].children[0].children[0].className = "out mid"
    YourImg.style.backgroundImage = "none";
    Botimg.style.backgroundImage = "none";
    Run[0].children[1].children[2].children[0].className = "out mid inactiveb"
    Run[0].children[0].classList.remove('endstate');
    Run[0].children[1].classList.remove('endstate');
    Midbox[0].classList.remove('show');
}







