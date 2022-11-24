const REQUEST_URL = "https://fe.it-academy.by/Examples/test_JSE.json";
const SHR = new XMLHttpRequest();
SHR.open("GET", REQUEST_URL);
let arr;
SHR.onload = () => {
  arr = JSON.parse(SHR.response);
  btn();
};
SHR.send();
class PoemButton {
  constructor(buttonCaption, alertText) {
    this.buttonCaption = buttonCaption;
    this.alertText = alertText;
    let newEl = document.createElement("input");
    newEl.classList.add("btn");
    newEl.value = this.buttonCaption;
    document.body.appendChild(newEl);
  }
  buttonPressed(text) {
    return alert(text);
  }
}
const btn = () => {
  let poem;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].buttonCaption;
    const text = arr[i].alertText;
    poem = new PoemButton(element, text);
  }
  const BTN = document.querySelectorAll(".btn");
  BTN.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].buttonCaption === e.target.value) {
          let text = arr[i].alertText;
          poem.buttonPressed(text);
        }
      }
    });
  });
};
