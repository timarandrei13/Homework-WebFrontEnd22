
function rpsGame(yourChoice) {
    
    let humanChoice, botChoice;

    humanChoice = yourChoice.id;
    console.log('MyChoice:',humanChoice);

    botChoice = numberToChoice();
    console.log('ComputerChoice:',botChoice);

    result = decideWinner(humanChoice, botChoice);
    console.log(result);

    message = finalMessage(result);
    console.log(message);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function numberToChoice() {
    
    let choices =  ['rock','paper','scissors'];

    let randomNum = Math.floor(Math.random()*3);

    return choices [randomNum];
}

function decideWinner(MyChoice, ComputerChoice) {

    let rpsDatabase = {
        rock: {scissors:1, rock:0.5, paper:0},
        paper: {rock:1, paper:0.5, scissors:0},
        scissors: {paper:1, scissors:0.5, rock:0},
    }

    let myScore = rpsDatabase [MyChoice] [ComputerChoice];

    let computerScore = rpsDatabase [ComputerChoice] [MyChoice];

    return [myScore, computerScore];
}

function finalMessage([myScore, computerScore]) {

    if(myScore === 0 && computerScore === 1) {
        return {message: 'You Lost<br>Bot Won!', color:'red'};
    } 
        else if(myScore === 0.5 && computerScore === 0.5) {
            return {message: 'Draw!', color:'orange'};
        }

            else if(myScore === 1 && computerScore === 0) {
                return {message: 'You Won!<br>Bot Lost!', color:'green'};
            }
}

// Front End Part !
function rpsFrontEnd(humanImageChoice, botImageChoice, message) {
    
    let imageDatabase = {
        rock: document.getElementById('rock').src,
        paper: document.getElementById('paper').src,
        scissors: document.getElementById('scissors').src,
    };

      document.getElementById('rock').remove();
      document.getElementById('paper').remove();
      document.getElementById('scissors').remove();

      //3 individual div element and store each image and message on ints own div
    
      let humanDiv = document.createElement('div');
      let botDiv = document.createElement('div');
      let messageDiv = document.createElement('div');

      //appendChild returns the appended child and puts it from the current position to the new one
      
      //human part
      let humanImageElement = document.createElement('img');
      humanImageElement.src = imageDatabase[humanImageChoice];
      humanDiv.appendChild(humanImageElement);
        
      //bot part
      let botImageElement = document.createElement('img');
      botImageElement.src = imageDatabase[botImageChoice];
      botDiv.appendChild(botImageElement);

      //show message who won and lost

      let h2Element = document.createElement('h2');
      h2Element.style.color = message['color'];
      h2Element.style.fontSize = '40px';
      h2Element.style.padding = '20px';
      h2Element.innerHTML = message['message'];
      messageDiv.appendChild(h2Element);

      let containerImgDiv = document.getElementById('container-img');

      containerImgDiv.appendChild(humanDiv);
      containerImgDiv.appendChild(messageDiv);
      containerImgDiv.appendChild(botDiv);
      
}

