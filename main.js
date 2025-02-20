/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

// Far apparire 5 numeri in pagina

function randomNumber() {
    return Math.floor(Math.random() * 100)
}

// Selezionare gli elementi DOM

const numoneEl = document.getElementById("number_one")
const numtwoEl = document.getElementById("number_two")
const numthreeEl = document.getElementById("number_three")
const numfourEl = document.getElementById("number_four")
const numfiveEl = document.getElementById("number_five")

const btnEl = document.querySelector(".btn")

// Quando clicco il button mi mostra i cinque numeri casuali

btnEl.addEventListener("click", function () {
    numoneEl.innerHTML = randomNumber()
    numtwoEl.innerHTML = randomNumber()
    numthreeEl.innerHTML = randomNumber()
    numfourEl.innerHTML = randomNumber()
    numfiveEl.innerHTML = randomNumber()
})


