const rock = document.querySelector('#r-b');
const paper = document.querySelector('#p-b');
const scissors = document.querySelector('#s-b');
const chose = document.querySelector('.op');
const result = document.querySelector('#res');
const rps = ['rock', 'paper', 'scissors'];

let ai = Math.floor(Math.random() * 3);

rock.addEventListener('click', () => {
    let ai = Math.floor(Math.random() * 3);
    console.log(`Human: ${'rock'} -- AI:${rps[ai]}`)
    battle('rock', rps[ai]);
})

paper.addEventListener('click', () => {
    let ai = Math.floor(Math.random() * 3);
    console.log(`Human: ${'paper'} -- AI:${rps[ai]}`)
    battle('paper', rps[ai])
})

scissors.addEventListener('click', () => {
    let ai = Math.floor(Math.random() * 3);
    console.log(`Human: ${'scissors'} -- AI:${rps[ai]}`)
    battle('scissors', rps[ai])
})

function battle(player, ai){
    if(player === 'rock' && ai === 'rock'){
        result.innerHTML = 'TIE';
    }
    else if(player === 'rock' && ai === 'paper'){
        result.innerHTML = 'COMPUTER';
    }
    else if(player === 'rock' && ai === 'scissors'){
        result.innerHTML = 'HUMAN';
    }
    else if(player === 'paper' && ai === 'rock'){
        result.innerHTML = 'HUMAN';
    }
    else if(player === 'paper' && ai === 'paper'){
        result.innerHTML = 'TIE';
    }
    else if(player === 'paper' && ai === 'scissors'){
        result.innerHTML = 'COMPUTER';
    }
    else if(player === 'scissors' && ai === 'rock'){
        result.innerHTML = 'COMPUTER';
    }
    else if(player === 'scissors' && ai === 'paper'){
        result.innerHTML = 'HUMAN';
    }
    else if(player === 'scissors' && ai === 'scissors'){
        result.innerHTML = 'TIE';
    } 
}

