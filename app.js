//
// 1. mettre un ecouteur "click" sur chq case
// 2. 
//

// 1. place un ecouter sur la case c1: qd clickee => console.log "c1 vient d'etre cliquee"

//1 je recupere mes element a cliquer
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

//j'attribue un clique au C1 que j 'ai recuperé 
// c1.addEventListener("click", () => {
//     console.log("c1 vient d'etre cliquee")
// })

// pour chq elements du tableau cAll
//   -> .addEventListener
for (let i = 0; i < cAll.length; i++) {
    cAll[i].addEventListener("click", () =>
    {
        console.log([i]);
    })

}

