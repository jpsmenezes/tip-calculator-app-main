const billAmount = document.querySelector('#bill-amount');
const button = document.querySelectorAll('.button>button');
const tipCustom = document.querySelector('#tip-custom');
const numPeople = document.querySelector('#num-people');
const tipResult = document.querySelector('.tip-pp');
const totalResult = document.querySelector('.total-pp');
const reset = document.querySelector('.reset-button');

let billTotal = 0.00;
let customTipAmount = 0.00;
let tipPercent = 0;
let people = 0;
let tipPP = 0.00;
let totalPP = 0.00;
