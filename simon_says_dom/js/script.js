/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

// Far apparire 5 numeri in pagina

function randomNumber() {
    return Math.floor(Math.random() * 100)
}

// Seleziono gli elementi DOM

const btnEl = document.querySelector(".btn")
const numoneEl = document.querySelector(".num_one")
const numtwoEl = document.querySelector(".num_two")
const numthreeEl = document.querySelector(".num_three")
const numfourEl = document.querySelector(".num_four")
const numfiveEl = document.querySelector(".num_five")

