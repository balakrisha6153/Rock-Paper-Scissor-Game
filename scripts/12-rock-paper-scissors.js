let score = JSON.parse(localStorage.getItem('score'));
      if(score===null){
        score={
          wins:0,
          lose:0,
          tie:0
        }
      }
      let isAutoPlaying = false;
      let intervalId;
      function autoPlay(){
        if(!isAutoPlaying){
        intervalId = setInterval(()=>{
        const playerMove = pickComputerMove();
        playerGame(playerMove); 
       },1000);
       isAutoPlaying = true;
      }
      else{
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
      }
      updateScore();

      let rockBtn = document.querySelector('.js-rock-button');
      rockBtn.addEventListener('click',function(){
        playerGame('rock');
      });

      let paperBtn = document.querySelector('.js-paper-button');
      paperBtn.addEventListener('click',function(){
        playerGame('paper');
      });

      let scissorBtn = document.querySelector('.js-scissor-button');
      scissorBtn.addEventListener('click',function(){
        playerGame('scissors');
      });
      
      document.body.addEventListener('keydown',(event)=>{
        let keyEle = event.key;
        if(keyEle === 'r' || keyEle === 'R' ){
          playerGame('rock');
        }
        else if(keyEle === 'p' || keyEle === 'P' ){
          playerGame('paper');
        }
        else if(keyEle === 's' || keyEle === 'S' ){
          playerGame('scissors');
        }
      })
      function playerGame(playerMove){
        let result = '';
        if(playerMove==='scissors'){
        const ComputerMove = pickComputerMove();
        if(ComputerMove === 'scissors'){
          result = 'Tie';
        }
        else if(ComputerMove ==='paper'){
          result = 'You win';
        }
        else if(ComputerMove === 'rock'){
          result = 'You will lose';
        }
        }

      else if(playerMove === 'paper'){
        const ComputerMove = pickComputerMove();
        if(ComputerMove === 'paper'){
          result = 'Tie';
        }
        else if(ComputerMove ==='rock'){
          result = 'You win';
        }
        else if(ComputerMove === 'scissors'){
          result = 'You will lose';
        }
      }

      else if(playerMove==='rock'){
        const ComputerMove = pickComputerMove();
        if(ComputerMove === 'rock'){
          result = 'Tie';
        }
        else if(ComputerMove === 'scissors'){
        result = 'You win';
        }
        else if(ComputerMove === 'paper'){
        result = 'You will lose';
        }
      }
      if(result === 'You win'){
        score.wins+=1;
      }
      else if(result === 'Tie'){
        score.tie+=1;
      }
      else if(result === 'You will lose'){
        score.lose+=1;
      }
      localStorage.setItem('score',JSON.stringify(score));
      updateScore();

      document.querySelector('.result-ele').innerHTML = result;
      document.querySelector('.player-computer-Move-ele').innerHTML = `You picked <img src="images/${playerMove}-emoji.png" class="image"/> computer picked <img src="images/${ComputerMove}-emoji.png" class="image"/>`;
    }
    function updateScore(){
      document.querySelector('.js-score').innerHTML = `wins:${score.wins} 
      loses:${score.lose} Tie:${score.tie}`;
    }
      let ComputerMove = '';
      function pickComputerMove(){
        const RandomNumber = Math.random();
        if(RandomNumber>=0 && RandomNumber<1/3){
          ComputerMove = 'rock';
        }
        else if(RandomNumber>=1/3 && RandomNumber<2/3){
        ComputerMove = 'paper';
        }
        else if(RandomNumber>=2/3 && RandomNumber<1){
        ComputerMove = 'scissors';
        }
        //console.log(ComputerMove);
        return ComputerMove;
      }