'Use strict';
/*jshint esversion: 8*/

const email = document.getElementById('newsletter__subscription-form-email');
const btn = document.getElementById('newsletter__subscription-form-btn');
const valid = document.getElementById('newsletter__subscription-form-error');
const main = document.getElementsByClassName('newsletter__info')[0];
const error_sign = document.getElementsByClassName('error__sign')[0];
let get_email;

email.classList.add('inpBorder__onFocus');
btn.classList.add('btnColor__onFocus');


function run() {
    get_email = email.value;
    if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(get_email)) {
        email.classList.remove('inp__onError');
        valid.classList.remove('show');
        error_sign.classList.remove('show');
    }

}

btn.addEventListener('click', () => {
    if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(get_email)) {
        alert('Your email is submited');
        //main.classList.add('hidden');
        
    } else {
        email.classList.add('inp__onError');
        valid.classList.add('show');
        error_sign.classList.add('show');
    }
})

// It lets submit form and/or input with 'enter' key
//https://stackoverflow.com/questions/20484738/submit-form-on-enter-key-with-javascript#answer-20484978
//https://stackoverflow.com/questions/2490825/how-to-trigger-event-in-javascript#answer-50587874
document.onkeydown = function() {
    if(window.keyCode == '13') {
        let evt = new Event('click');
        btn.dispatchEvent(evt); // initiate, trigger event on btn
    }
};