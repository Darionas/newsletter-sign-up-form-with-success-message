'Use strict';
/*jshint esversion: 8*/

const email = document.getElementById('newsletter__subscription-form-email');
const btn = document.getElementById('newsletter__subscription-form-btn');
const valid = document.getElementById('newsletter__subscription-form-error');
const error_sign = document.getElementsByClassName('error__sign')[0];
const img = document.getElementsByClassName('newsletter__image')[0];
const newsLeter = document.getElementsByClassName('newsletter__info')[0];
const form = document.getElementsByClassName('newsletter__subscription-form')[0];
const modal = document.getElementById('myModal');
const modalBtn = document.getElementsByClassName('newsletter__subscription-success-btn')[0];
const max = window.matchMedia("(min-width: 768px)");
const grid_cont = document.getElementsByClassName('grid-container')[0];
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

//After reset initiate javascript flow (function)
//https://stackoverflow.com/questions/10319289/how-to-execute-code-after-html-form-reset-with-jquery/27949904#27949904
function resetForm(element) {
    email.classList.add('inp__onError');
    valid.classList.add('show');
    error_sign.classList.add('show');

    element.form.reset();
    if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(get_email)) {
        img.classList.add('hidden');
        newsLeter.classList.add('hidden');
        form.classList.add('hidden');
        modal.classList.add('show');
        if(max.matches == true) { 
            grid_cont.style.marginTop = '7%';
        }
    }
}

//Dismiss message
modalBtn.addEventListener('click', () => {
    window.location.reload();
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
