/** @format */
"use strict";

const decBtn = document.getElementById("decrease");
const resBtn = document.getElementById("reset");
const incBtn = document.getElementById("increase");

const counter = document.getElementById("number");

let number = 0;
// ----------------------------------------------- Decrease
decBtn.addEventListener("click", function () {
  number--;
  counter.textContent = number;
  color();
});

// ------------------------------------------------ Increase
incBtn.addEventListener("click", function () {
  number++;
  counter.textContent = number;
  color();
});

// -------------------------------------------------- Reset
resBtn.addEventListener("click", function () {
  number = 0;
  counter.textContent = number;
  color();
});

// --------------------------------------------------- counter color
const color = function () {
  if (number === 0) {
    document.getElementById("number").style.color = "rgba(35, 98, 183, 1)";
  } else if (number < 0) {
    document.getElementById("number").style.color = "firebrick";
  } else if (number > 0) {
    document.getElementById("number").style.color = "#3ab55d";
  }
};
