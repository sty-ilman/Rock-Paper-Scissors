let game = JSON.parse(localStorage.getItem("game")) || {
    wins: 0,
    loses: 0,
    draws: 0
};

document.body.querySelector('.score').
    innerHTML = `Wins: ${game.wins}, loses: ${game.loses}, draws: ${game.draws}`;

function randomMove()
{
    pcMove = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return pcMove;
}

function moveName(moveNumber)
{
    if (moveNumber === 1)
        return "Rock";
    else if (moveNumber === 2)
        return "Paper";
    else
        return "Scissors";
}

function play(move)
{
    let pcMove = randomMove();
    let pcMoveName =  moveName(pcMove);
    let playerMove = moveName(move);
    imageMove(move, 'player-move');
    imageMove(pcMove, 'pc-move')

    if(move === pcMove)
        game.draws += 1; 

    else if(pcMove - move === 1 || pcMove - move === -2 )
        game.loses += 1; 

    else if(pcMove - move === -1 || pcMove - move === 2 )
        game.wins += 1;
    
    document.body.querySelector('.score').
    innerHTML = `Wins: ${game.wins}, loses: ${game.loses}, draws: ${game.draws}`;
    
    localStorage.setItem("game",JSON.stringify(game));
}

function restoreGame()
{
    localStorage.removeItem("game");

    game.wins=0;
    game.loses=0;
    game.draws=0;

    document.body.querySelector('.score').
    innerHTML = `Wins: ${game.wins}, loses: ${game.loses}, draws: ${game.draws}`;

    imageMove(0, 'player-move');
    imageMove(0, 'pc-move');
}

function imageMove(move, idName)
{
    if(move === 1)
        document.getElementById(idName).
            src = 'images/rock-emoji.png'

    else if(move === 2)
        document.getElementById(idName).
            src = 'images/paper-emoji.png'

    else if(move === 3)
        document.getElementById(idName).
            src = 'images/scissors-emoji.png'

    else
        document.getElementById(idName).
            src = 'images/rock-paper-scissors.png'
}