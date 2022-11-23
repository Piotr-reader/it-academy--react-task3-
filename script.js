const REQUEST_URL = 'https://fe.it-academy.by/Examples/test_JSE.json';
const SHR = new XMLHttpRequest();
SHR.open('GET', REQUEST_URL);
let arr;
SHR.onload = () => {
    arr = JSON.parse(SHR.response);
}
SHR.send();


class PoemButton {
    constructor(buttonCaption, alertText) {
        this.buttonCaption = buttonCaption;
        this.alertText = alertText;
    }
    createElem() {
        let newEl = document.createElement('input');
        newEl.classList.add('btn');
        newEl.value = `buttonCaption`;
        document.body.appendChild(newEl);
      }

    buttonPressed() {
        return alert(this.alertText);
    }
}
new PoemButton().createElem();

  const BTN = document.querySelector('.btn');
  BTN.addEventListener('click',() => {
    arr.forEach( obj => {
        let poem = new PoemButton(obj.buttonCaption, obj.alertText);
        poem.buttonPressed();
    })
} );



