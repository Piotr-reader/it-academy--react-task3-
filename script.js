const REQUEST_URL = 'https://fe.it-academy.by/Examples/test_JSE.json';
const SHR = new XMLHttpRequest();
SHR.open('GET', REQUEST_URL);
let arr;
SHR.onload = () => {
    arr = JSON.parse(SHR.response);
    btn()
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
        newEl.value = this.buttonCaption;
        document.body.appendChild(newEl);
      }

    buttonPressed() {
        return alert(this.alertText);
    }
}
const btn = () => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].buttonCaption;
        new PoemButton(element).createElem();
    }
    const BTN = document.querySelectorAll('.btn');
      BTN.forEach(btn => {
        btn.addEventListener('click',(e) => {
            let str = e.target.value;
            str = +str[str.length - 1]
            let text = new PoemButton(arr.buttonCaption, arr[str-1].alertText);
            text.buttonPressed();
            } );
      })
    };



