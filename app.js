/////////////////////////////////////////////////////

let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")
let c5 = document.getElementById("c5")
let c6 = document.getElementById("c6")
let c7 = document.getElementById("c7")
let c8 = document.getElementById("c8")
let c9 = document.getElementById("c9")


let cAll = [c1, c2, c3, c4, c5, c6, c7, c8, c9]


let joueurOne = "X"
let joueurTwo = "O"
let joueurActif = joueurOne
let win = document.getElementById("win")

let audio = document.querySelector('audio');
let winSound = document.querySelector("#winsound")


let fontSound = document.getElementById("fontSound")
fontSound.play();

for (let i = 0; i < cAll.length; i++) {
    cAll[i].addEventListener("click", () =>
    {
        //
        // mettre alternativement une x/o
        // change le joueur actif
        //

        if (cAll[i].innerHTML === "") {

            audio.currentTime = 0;
            audio.play();

            cAll[i].innerHTML = joueurActif
            if (joueurActif == joueurOne) {
                joueurActif = joueurTwo

                console.log(document.getElementById("winplayer").innerHTML = "O Next");

            } else {
                joueurActif = joueurOne

                console.log(document.getElementById("winplayer").innerHTML = "X Next");
            }

            checkVictoir()
        }
    })
}


function resetBoard()
{
    let elements = document.getElementsByClassName("case");

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "";


    }
    document.getElementById("winplayer").innerHTML = "";

}


function checkVictoir()
{
    if ((joueurOne === c1.innerHTML && c1.innerHTML === c2.innerHTML && c2.innerHTML === c3.innerHTML) ||
        (joueurOne === c4.innerHTML && c4.innerHTML === c5.innerHTML && c5.innerHTML === c6.innerHTML) ||
        (joueurOne === c7.innerHTML && c7.innerHTML === c8.innerHTML && c8.innerHTML === c9.innerHTML) ||
        (joueurOne === c1.innerHTML && c1.innerHTML === c4.innerHTML && c4.innerHTML === c7.innerHTML) ||
        (joueurOne === c2.innerHTML && c2.innerHTML === c5.innerHTML && c5.innerHTML === c8.innerHTML) ||
        (joueurOne === c3.innerHTML && c3.innerHTML === c6.innerHTML && c6.innerHTML === c9.innerHTML) ||
        (joueurOne === c1.innerHTML && c1.innerHTML === c5.innerHTML && c5.innerHTML === c9.innerHTML) ||
        (joueurOne === c7.innerHTML && c7.innerHTML === c5.innerHTML && c5.innerHTML === c3.innerHTML)) {

        victoireJ1()

    } if (
        (joueurTwo === c1.innerHTML && c1.innerHTML === c2.innerHTML && c2.innerHTML === c3.innerHTML) ||
        (joueurTwo === c4.innerHTML && c4.innerHTML === c5.innerHTML && c5.innerHTML === c6.innerHTML) ||
        (joueurTwo === c7.innerHTML && c7.innerHTML === c8.innerHTML && c8.innerHTML === c9.innerHTML) ||
        (joueurTwo === c1.innerHTML && c1.innerHTML === c4.innerHTML && c4.innerHTML === c7.innerHTML) ||
        (joueurTwo === c2.innerHTML && c2.innerHTML === c5.innerHTML && c5.innerHTML === c8.innerHTML) ||
        (joueurTwo === c3.innerHTML && c3.innerHTML === c6.innerHTML && c6.innerHTML === c9.innerHTML) ||
        (joueurTwo === c1.innerHTML && c1.innerHTML === c5.innerHTML && c5.innerHTML === c9.innerHTML) ||
        (joueurTwo === c7.innerHTML && c7.innerHTML === c5.innerHTML && c5.innerHTML === c3.innerHTML))

        victoireJ2()





}

// [1]  [2]  [3]

// [4]  [5]  [6]

// [7]  [8]  [9]

function victoireJ1()
{
    winSound.currentTime = 0;
    winSound.play();

    console.log(document.getElementById("winplayer").innerHTML = "Player 1 Win");
}


function victoireJ2()
{
    winSound.currentTime = 0;
    winSound.play();

    console.log(document.getElementById("winplayer").innerHTML = "Player 2 Win");
}

