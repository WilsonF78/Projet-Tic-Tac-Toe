//
// 1. mettre un ecouteur "click" sur chq case
// 2.
//

// 1. place un ecouter sur la case c1: qd clickee => console.log "c1 vient d'etre cliquee"

//1 je recupere mes element a cliquer

// ///////////////////////////////////////////////////

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
let resetGame = document.getElementById('reset-game');


for (let i = 0; i < cAll.length; i++) {
    cAll[i].addEventListener("click", () =>
    {

        //
        // mettre alternativement une x/o
        // change le joueur actif
        //

        if (cAll[i].innerHTML === "") {
            cAll[i].innerHTML = joueurActif
            if (joueurActif == joueurOne) {
                joueurActif = joueurTwo
            } else {
                joueurActif = joueurOne
            }

            checkVictoir()
        }
    })
}



function checkVictoir()
{
    if ((joueurOne == c1.innerHTML && c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML) ||
        (joueurOne == c4.innerHTML && c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML) ||
        (joueurOne == c7.innerHTML && c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML) ||
        (joueurOne == c1.innerHTML && c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML) ||
        (joueurOne == c2.innerHTML && c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML) ||
        (joueurOne == c3.innerHTML && c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML) ||
        (joueurOne == c1.innerHTML && c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML) ||
        (joueurOne == c7.innerHTML && c7.innerHTML == c5.innerHTML && c5.innerHTML == c3.innerHTML)) {

        victoireJ1()

    } else if (
        (joueurTwo == c1.innerHTML && c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML) ||
        (joueurTwo == c4.innerHTML && c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML) ||
        (joueurTwo == c7.innerHTML && c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML) ||
        (joueurTwo == c1.innerHTML && c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML) ||
        (joueurTwo == c2.innerHTML && c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML) ||
        (joueurTwo == c3.innerHTML && c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML) ||
        (joueurTwo == c1.innerHTML && c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML) ||
        (joueurTwo == c7.innerHTML && c7.innerHTML == c5.innerHTML && c5.innerHTML == c3.innerHTML))

        victoireJ2()

}


// [1]  [2]  [3]

// [4]  [5]  [6]

// [7]  [8]  [9]

function victoireJ1()
{
    window.alert("Victoir du joueur 1");
}


function victoireJ2()
{
    window.alert("Victoir du joueur 2");
}


////zojougdioqugdiyd////