let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');
let result= document.getElementById('result');
let cells = document.querySelectorAll(".cell");
let xWins = document.getElementById('x');
let oWins = document.getElementById('o');
let turn =document.getElementById('turn');
let xs =0;
let os=0;
let ts=0;
let tie= document.getElementById('tie');
let player = 'X';

let times = 0;
cells.forEach(function (cell) {
    cell.addEventListener("click", () => {
      if(player == 'X'&& cell.innerHTML==''&&result.innerHTML==''){
        cell.innerHTML= player;
        times++;
        winer(player);
        player = 'O'
        turn.innerHTML =player +" turn";
      }
      else if(player == 'O' && cell.innerHTML==''&&result.innerHTML==''){
        cell.innerHTML= player;  
        times++;      
        winer(player);
        player = 'X'
        turn.innerHTML =player+" turn";
      }
    });
  });

function reset (){
    cells.forEach(function (cell) {
        cell.innerHTML= '';
    })
    player = 'X'
    turn.innerHTML =player+" turn";
    result.innerHTML='';
    times=0;
};

function winer(P){
    if(
        cell1.innerHTML== P&&cell2.innerHTML== P&&cell3.innerHTML== P||
        cell4.innerHTML== P&&cell5.innerHTML== P&&cell6.innerHTML== P||
        cell7.innerHTML== P&&cell8.innerHTML== P&&cell9.innerHTML== P||
        cell1.innerHTML== P&&cell4.innerHTML== P&&cell7.innerHTML== P||
        cell2.innerHTML== P&&cell5.innerHTML== P&&cell8.innerHTML== P||
        cell3.innerHTML== P&&cell6.innerHTML== P&&cell9.innerHTML== P||
        cell1.innerHTML== P&&cell5.innerHTML== P&&cell9.innerHTML== P||
        cell3.innerHTML== P&&cell5.innerHTML== P&&cell7.innerHTML== P
    )
    {
        result.innerHTML=player + " win";
        if (player==='X'){
          xs +=1;
          xWins.innerHTML="x player : "+xs;

        }
        else{
          os +=1;
          oWins.innerHTML= "o player : "+os;

        }
    }
    else if(times==9 ){
      result.innerHTML="Tie";
      ts+=1;
      tie.innerHTML="ties       : "+ts;

    }
};
xWins.innerHTML="x player : "+xs;
tie.innerHTML="ties       : "+ts;
oWins.innerHTML= "o player : "+os;

