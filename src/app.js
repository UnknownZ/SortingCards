import "bootstrap";
import "./style.css";

let icono = "";
let ordenado = document.querySelector("#ordenadasContainer");
let intermedios = document.querySelector("#intermedios");
let container = document.querySelector("#cardContainer");
let cardsToDraw = document.querySelector("#txtAmount");
let btnBubSort = document.querySelector("#bubbleSort");
let btnSelSort = document.querySelector("#selectionSort");
let btnDraw = document.querySelector("#drawCards");
let listaCartas = [];
let listaPasos = [];

window.onload = function() {};

btnSelSort.addEventListener("click", function() {
  listaPasos = selSort(listaCartas);
  mostrarPasos(listaPasos);
});

btnBubSort.addEventListener("click", function() {
  listaPasos = bubSort(listaCartas);
  mostrarPasos(listaPasos);
});

btnDraw.addEventListener("click", function() {
  ordenado.innerHTML = "";
  intermedios.innerHTML = "";
  container.innerHTML = "";
  let numToDraw = cardsToDraw.value;
  listaCartas = createCard(numToDraw);
  buildCard(listaCartas, container);
});

function numero(num) {
  return num == 1
    ? "A"
    : num == 11
    ? "J"
    : num == 12
    ? "Q"
    : num == 13
    ? "K"
    : num;
}

function buildCard(listadoNumeros, contenedor) {
  contenedor.innerHTML = "";
  listadoNumeros.forEach(arr => {
    let card = document.createElement("div");
    let cardTop = document.createElement("div");
    let cardBot = document.createElement("div");
    let cardNumber = document.createElement("div");
    card.classList.add("card");
    cardTop.classList.add(".card", ".cardTop");
    cardNumber.classList.add(".card", ".cardNumber");
    cardBot.classList.add(".card", ".cardBot");
    card.appendChild(cardTop);
    card.appendChild(cardNumber);
    card.appendChild(cardBot);
    if (arr.suit == 1) {
      card.style = "color: red";
      icono = '<i class="bi bi-suit-diamond-fill"></i>';
      cardTop.innerHTML = icono;
      cardBot.innerHTML = icono;
      cardNumber.innerHTML = numero(arr.number);
    } else if (arr.suit == 2) {
      card.style = "color: black";
      icono = '<i class="bi bi-suit-club-fill"></i>';
      cardTop.innerHTML = icono;
      cardBot.innerHTML = icono;
      cardNumber.innerHTML = numero(arr.number);
    } else if (arr.suit == 3) {
      card.style = "color: red";
      icono = '<i class="bi bi-suit-heart-fill"></i>';
      cardTop.innerHTML = icono;
      cardBot.innerHTML = icono;
      cardNumber.innerHTML = numero(arr.number);
    } else if (arr.suit == 4) {
      card.style = "color: black";
      icono = '<i class="bi bi-suit-spade-fill"></i>';
      cardTop.innerHTML = icono;
      cardBot.innerHTML = icono;
      cardNumber.innerHTML = numero(arr.number);
    }
    contenedor.appendChild(card);
  });
}

function createCard(cartas) {
  let listaCartas = [];
  for (let i = 0; i < cartas; i++) {
    let suit = Math.floor(Math.random() * 4) + 1;
    let number = Math.floor(Math.random() * 13) + 1;
    listaCartas.push({ suit: suit, number: number });
  }
  return listaCartas;
}

function selSort(original) {
  let temp = [];
  let arr = [...original];
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    var min = {
      value: arr[i],
      index: i
    };
    for (var j = i + 1; j < length; j++) {
      if (arr[j].number < min.value.number) {
        min.value = arr[j];
        min.index = j;
      }
    }
    if (min.value != arr[i]) {
      var k = arr[i];
      arr[i] = min.value;
      arr[min.index] = k;
      temp.push(arr);
    }
  }
  return temp;
}

function mostrarPasos(pasos) {
  pasos.forEach(paso => {
    let divPaso = document.createElement("div");
    divPaso.classList.add("intermedios");
    buildCard(paso, divPaso);
    intermedios.appendChild(divPaso);
  });
}

function bubSort(original) {
  let tempArr = [];
  let arr = [...original];
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j].number > arr[j + 1].number) {
        // If the condition is true
        // then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        tempArr.push(arr);
      }
    }
  }
  return tempArr;
  // Print the sorted array
}
