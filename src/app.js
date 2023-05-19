/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Alert } from "bootstrap";

let card = document.querySelector(".card");
let icono = "";
let cardTop = document.querySelector(".card .cardTop");
let cardBot = document.querySelector(".card .cardBot");
let cardNumber = document.querySelector(".card .cardNumber");
let button = document.querySelector("#newCard");
let manualHeight = document.querySelector("#txtHeight");
let manualWidth = document.querySelector("#txtWidth");
let manualCreate = document.querySelector("#manualSizeCard");

window.onload = function() {
  //write your code here
  createCard();
};

button /
  addEventListener("click", function() {
    createCard();
  });

setInterval(() => {
  createCard();
}, 5000);

manualCreate.addEventListener("click", function() {
  let height = manualHeight.value;
  let width = manualWidth.value;
  resizeCard(height, width);
  createCard();
});

function resizeCard(height, width) {
  card.style.height = height + "px";
  card.style.width = width + "px";
}

function createCard() {
  let suit = Math.floor(Math.random() * 4) + 1;
  let number = Math.floor(Math.random() * 13) + 1;
  if (number == 1) {
    number = "A";
  } else if (number == 11) {
    number = "J";
  } else if (number == 12) {
    number = "Q";
  } else if (number == 13) {
    number = "K";
  }

  if (suit == 1) {
    card.style = "color: red";
    suit = "diamonds";
    icono = '<i class="bi bi-suit-diamond-fill"></i>';
    cardTop.innerHTML = icono;
    cardBot.innerHTML = icono;
    cardNumber.innerHTML = number;
  } else if (suit == 2) {
    card.style = "color: black";
    suit = "clubs";
    icono = '<i class="bi bi-suit-club-fill"></i>';
    cardTop.innerHTML = icono;
    cardBot.innerHTML = icono;
    cardNumber.innerHTML = number;
  } else if (suit == 3) {
    card.style = "color: red";
    suit = "hearts";
    icono = '<i class="bi bi-suit-heart-fill"></i>';
    cardTop.innerHTML = icono;
    cardBot.innerHTML = icono;
    cardNumber.innerHTML = number;
  } else if (suit == 4) {
    card.style = "color: black";
    suit = "spades";
    icono = '<i class="bi bi-suit-spade-fill"></i>';
    cardTop.innerHTML = icono;
    cardBot.innerHTML = icono;
    cardNumber.innerHTML = number;
  }
}
