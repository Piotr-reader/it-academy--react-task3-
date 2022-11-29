"use strict";
const REQUEST_URL = "https://fe.it-academy.by/Examples/test_JSE.json";
const SHR = new XMLHttpRequest();
SHR.open("GET", REQUEST_URL);
SHR.onload = () => {
  let arr = JSON.parse(SHR.response);
  inputCreate(arr);
};
SHR.send();

class PoemButton {
  constructor(buttonCaption, alertText) {
    this.buttonCaption = buttonCaption;
    this.alertText = alertText;
    let newEl = document.createElement("input");
    newEl.classList.add("btn");
    newEl.type = "button";
    newEl.value = this.buttonCaption;
    document.querySelector("#script").before(newEl);
    newEl.addEventListener("click", () => {
      this.buttonPressed();
    });
  }

  buttonPressed() {
    return alert(this.alertText);
  }
}

const inputCreate = (arr) => {
  for (let elem of arr) {
    let obj = new PoemButton(elem.buttonCaption, elem.alertText);
  }
};
