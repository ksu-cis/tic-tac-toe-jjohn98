// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

/*
var currentTurn = "X";

document.getElementById("turn").innerText = "It is player" + currentTurn + "'s turn";
`It is player ${currentTurn}'s turn`

var squares = document.querySelectorAll("#tic-tac-toe square");

for (var i = 0; i < squares.length; i++)
{
    squares[i].addEventListener('click', onClick);
}

function onClick(event)
{
    event.preventDefault();
    if (!even.target.innerText) {
        event.target.innerText = currentTurn;
        if (!checkForWin) nextTurn();
    }
}

function nextTurn()
{
    if (currentTurn === "X") {
        currentTurn = "O";
    }
    else
    {
        currentTurn = "X";
    }
    document.getElementById("turn").innerText = "It is player" + currentTurn + "'s turn";
}

function declareWinner()
{
    document.getElementById("turn").innerText = "Player " + currentTurn + " Wins!";
}

function checkForWin()
{
    for (var i = 0; i < 9; i += 3) {
        if (squares[i].innerText && squares[i].innerText === squares[i+1].innerText && squares[i].innerText === squares[i+2].innerText) {
            declareWinner();
            return true;
        }
    }
    for (var j = 0; j < 9; j += 1) {
        if (squares[j].innerText && squares[j].innerText === squares[j + 3].innerText && squares[j].innerText === squares[j + 6].innerText) {
            declareWinner();
            return true;
        }
    }
    if (squares[0].innerText && squares[0].innerText === squares[4].innerText && squares[0].innerText === squares[8].innerText)
    {
        declareWinner();
        return true;
    }
    if (squares[0].innerText && squares[2].innerText === squares[4].innerText && squares[2].innerText === squares[6].innerText) {
        declareWinner();
        return true;
    }
}
*/
var squares = document.querySelectorAll("#checkers-board .square");

for (var i = 0; i < squares.length; i++)
{
    squares[i].addEventListener('dragenter', ondragenter);
    squares[i].addEventListener('dragleave', ondragleave);
    squares[i].addEventListener('dragstart', ondragstart);
    squares[i].addEventListener('dragend', ondragend);
}

function ondragenter(event)
{
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    if (event.target.children.length > 0) return;
    event.target.style.backgroundColor = "gold";
    document.getElementById("toX").value = event.target.dataset.x;
    document.getElementById("toY").value = event.target.dataset.y;
}

function ondragleave(event)
{
    event.target.style.backgroundColor = null;
}

function ondragstart(event)
{
    document.getElementById("fromX").value = event.target.dataset.x;
    document.getElementById("fromY").value = event.target.dataset.y;
}

function ondragend(event)
{
    document.getElementById("checkers-form").submit();
}
