/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let todo = [who, action, what, when];
let times = 0;
let parte1 = "no importa";
let parte2 = "tampoco importa";
let parte3 = "no importa nada";

function texto() {
  times++;
  parte3 = "";
  for (let i = 0; i <= todo.length - 1; i++) {
    parte1 = todo[i];
    console.log("Esto es parte1: " + parte1);
    parte2 = parte1[Math.floor(Math.random() * parte1.length)];
    parte3 = parte3 + parte2 + " ";
    console.log(parte3);
  }
  document.getElementById("rndtxt").innerHTML = parte3;
  document.getElementById("number").innerHTML = times;
}

function addwho() {
  inputValue = document.getElementById("inputPassword2").value;
  document.getElementById("inputPassword2").value = "";
  who.push(inputValue);
}

function addaction() {
  inputValue = document.getElementById("inputPassword2").value;
  document.getElementById("inputPassword2").value = "";
  action.push(inputValue);
}

function addwhat() {
  inputValue = document.getElementById("inputPassword2").value;
  document.getElementById("inputPassword2").value = "";
  what.push(inputValue);
}

function addwhen() {
  inputValue = document.getElementById("inputPassword2").value;
  document.getElementById("inputPassword2").value = "";
  when.push(inputValue);
}
