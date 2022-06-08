/////////////////////////////////////////////////////

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")


let allBox = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

let playerOne = "X"
let playerTwo = "O"
let activePlayer = playerOne
let win = document.getElementById("win")

/////////////Sound/////////////

let clickBtn = document.getElementById("clickBtn");
let winSound = document.getElementById("winSound")
let resetBtn = document.getElementById("resetBtn")

let fontSound = document.getElementById("fontSound")
fontSound.play();

///////////////////////////////

for (let i = 0; i < allBox.length; i++) {
    allBox[i].addEventListener("click", () =>
    {

        if (allBox[i].innerHTML === "") {

            clickBtn.currentTime = 0;
            clickBtn.play();

            allBox[i].innerHTML = activePlayer
            if (activePlayer == playerOne) {
                activePlayer = playerTwo

                console.log(document.getElementById("winplayer").innerHTML = "O Next");

            } else {
                activePlayer = playerOne

                console.log(document.getElementById("winplayer").innerHTML = "X Next");
            }

            checkvictory()
        }
    })
}


function resetBoard()
{
    let elements = document.getElementsByClassName("box");

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "";


    }
    resetBtn.currentTime = 0;
    resetBtn.play();
    document.getElementById("winplayer").innerHTML = "";


}


function checkvictory()
{
    if ((playerOne === box1.innerHTML && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML) ||
        (playerOne === box4.innerHTML && box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML) ||
        (playerOne === box7.innerHTML && box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML) ||
        (playerOne === box1.innerHTML && box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML) ||
        (playerOne === box2.innerHTML && box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML) ||
        (playerOne === box3.innerHTML && box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML) ||
        (playerOne === box1.innerHTML && box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML) ||
        (playerOne === box7.innerHTML && box7.innerHTML === box5.innerHTML && box5.innerHTML === box3.innerHTML)) {

        victoryJ1()

    } if (
        (playerTwo === box1.innerHTML && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML) ||
        (playerTwo === box4.innerHTML && box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML) ||
        (playerTwo === box7.innerHTML && box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML) ||
        (playerTwo === box1.innerHTML && box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML) ||
        (playerTwo === box2.innerHTML && box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML) ||
        (playerTwo === box3.innerHTML && box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML) ||
        (playerTwo === box1.innerHTML && box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML) ||
        (playerTwo === box7.innerHTML && box7.innerHTML === box5.innerHTML && box5.innerHTML === box3.innerHTML))

        victoryJ2()
}

function victoryJ1()
{
    winSound.currentTime = 0;
    winSound.play();

    console.log(document.getElementById("winplayer").innerHTML = "Player 1 Win");
}


function victoryJ2()
{
    winSound.currentTime = 0;
    winSound.play();

    console.log(document.getElementById("winplayer").innerHTML = "Player 2 Win");
}

