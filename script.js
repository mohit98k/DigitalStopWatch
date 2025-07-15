let start=document.querySelector(".start");
let pause=document.querySelector(".pause");
let reset=document.querySelector(".reset");
let lap=document.querySelector(".lap");
let time=document.querySelector(".t");
let lapfield=document.querySelector(".lapfield");
let laplist=document.querySelector(".laplist");


let sec=0;
let min=0;
let h=0;
let i;
let index=1;

reset.addEventListener("click",resetTimer);
start.addEventListener("click",startTimer);
pause.addEventListener("click",pauseTimer);
lap.addEventListener("click",snapShot);

function resetTimer(){
    sec=0;
    min=0;
    h=0;
    time.innerText=format(h)+":"+format(min)+":"+format(sec);
    laplist.innerHTML=null;

}

function startTimer(){

    if (i) return;
    

   i= setInterval(()=>{

        if(sec==60){
            sec=0;
            min++;
        }
        if(min==60){
            min=0;
            h++;
        }

        sec++;
        time.innerText=format(h)+":"+format(min)+":"+format(sec);
     },1000)
     
}

function pauseTimer(){
    clearInterval(i);
    i=null;
    time.innerText=format(h)+":"+format(min)+":"+format(sec);
}

function snapShot(){

lapfield.style.visibility="visible";
const  element=document.createElement("li");

element.innerText=`Lap ${index} : ${format(h)}:${format(min)}:${format(sec)}`;

laplist.appendChild(element);

index++;
}

function format(n) {
    return String(n).padStart(2, '0');
}



