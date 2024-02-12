var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function hitBouble(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitrn;
}

function makeBouble(){
    var clutter = "";

for(var i=1; i<=119; i++){
    var rn = Math.floor(Math.random()*10);
    clutter +=`<div class="bouble">${rn}</div>`;
}

document.querySelector(".pbottom").innerHTML = clutter;
}

function runTimer(){
    var timeInt= setInterval(function(){
        if(timer>0){
            timer --;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            var pb = document.querySelector(".pbottom")
            pb.innerHTML = `<h1>Game Over</h1>`;
            clearInterval(timeInt);
            
        }
    }, 1000)

    
}

document.querySelector(".pbottom")
.addEventListener("click",function(dets){
    var clickNum = Number(dets.target.textContent)
    if(clickNum === hitrn){
        increaseScore();
        makeBouble();
        hitBouble();
    }
})

hitBouble();
makeBouble();
runTimer();