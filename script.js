const REQUEST_URL = "https://fe.it-academy.by/Examples/test_JSE.json";
const SHR = new XMLHttpRequest();
SHR.open("GET", REQUEST_URL);
SHR.onload = () => {
  let arr = JSON.parse(SHR.response);
  input(arr);
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
    newEl.dataset.text = this.alertText;
    document.body.appendChild(newEl);
  }

  buttonPressed() {
    const BTN = document.querySelectorAll(".btn");
    BTN.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        return alert(e.target.dataset.text);
      });
    });
  }
}

const input = (arr) => {
  let poem;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].buttonCaption;
    const text = arr[i].alertText;
    poem = new PoemButton(element, text);
  }
  poem.buttonPressed();
};
