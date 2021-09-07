'use strict';

var scores, roundScore, activePlayer, diceDom, winScore, gamePlaying;
diceDom=document.querySelector('.dice');

init();

document.querySelector('.dice').style.display='none';
document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';
document.getElementById('current--0').textContent='0';
document.getElementById('current--1').textContent='0';

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){
        //random number
        var dice=Math.floor( Math.random() * 6 ) + 1;

        // display the result
        diceDom.style.display='block';
        diceDom.src='dice-'+dice+'.png';

        //update the round score if rolled dice is not one
        if(dice!==1){
            roundScore+=dice;
            document.querySelector('#current--'+activePlayer).textContent=roundScore;
        }else{
            changePlayer();
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer]+=roundScore;
        document.getElementById('score--'+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>=winScore){
            document.getElementById('name--'+activePlayer).textContent='WINNER!';
            diceDom.style.display='none';
            document.querySelector('.player--'+activePlayer).classList.add('player--winner');
            document.querySelector('.player--'+activePlayer).classList.remove('player--active');
            gamePlaying=false;
        }else{
            changePlayer();
        }
    }
});

function changePlayer(){
    activePlayer=1-activePlayer;
    roundScore=0;
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    diceDom.style.display='none';
}

document.querySelector('.btn--new').addEventListener('click',function(){
    init();
});

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0; 
    winScore=20;
    gamePlaying=true;

    diceDom.style.display='none';

    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';

    document.querySelector('#score--0').textContent='0';
    document.querySelector('#score--1').textContent='0';

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');

    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    

    document.querySelector('#name--0').textContent='Player 1';
    document.querySelector('#name--1').textContent='Player 2';
    
};