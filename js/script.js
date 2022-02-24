const billAmount = document.querySelector('#bill-amount');
const buttons = document.querySelectorAll('.button>button');
const tipCustom = document.querySelector('#tip-custom');
const numPeople = document.querySelector('#num-people');
const tipResult = document.querySelector('.tip-pp');
const totalResult = document.querySelector('.total-pp');
const resetButton = document.querySelector('.reset-button');

let billTotal = 0.00;
let customTipAmount = 0.00;
let tipPercent = 0;
let people = 0;
let tipPP = 0.00;
let totalPP = 0.00;







tipCustom.addEventListener('change',(e) => updateCustomTip(e));
buttons.forEach(button => button.addEventListener('click',getTipPct));
resetButton.addEventListener('click',resetForm);