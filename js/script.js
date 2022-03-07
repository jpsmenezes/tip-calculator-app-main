const billAmount = document.querySelector('#bill-amount');
const tipButtons = document.querySelectorAll('.button>button');
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

function getTipPct() {
       if(this.classList.contains("selected")) {
           // o usuário está desmarcando, remova selecionado e defina tipPercent como 0
           this.classList.remove("selected");
           tipPercent = 0;
       } else {
           // O usuário está selecionando: 
           // desmarque outros botões e personalizados, adicione selecionado e defina tipPercent para value
           tipButtons.forEach(button => button.classList.remove("selected"));
           customTipAmount = 0.00;
           tipCustom.value = "";
           this.classList.add("selected");
           tipPercent = parseInt(this.innerText.substring(0,2));
       }
       calcResults();
   }
   function calcResults() {
       if(people===0) {
           tipPP = 0.00;
           totalPP = 0.00;
           updateResults();
       } else {
           if(customTipAmount > 0) {
               tipPP = customTipAmount/people;
           } else {
               tipPP = ((billTotal*(tipPercent/100))/people);
           }
           totalPP = (billTotal/people)+tipPP;
           updateResults();
       }
   }
   function updateResults() {
       tipResult.innerHTML = "$" + tipPP.toFixed(2);
       totalResult.innerHTML = "$" + totalPP.toFixed(2); 
   }
   function updateCustomTip(e) {
       //se o valor de entrada estiver vazio ou 0 pule e recalcule
       if(!isNaN(e.target.value) && !isNaN(parseFloat(e.target.value))) {
           // desmarque os botões ao usar o valor de gorjeta personalizado
           tipButtons.forEach(button => button.classList.remove("selected"));
           customTipAmount = parseFloat(e.target.value);
   
           e.target.value = parseFloat(e.target.value).toFixed(2);
       } else {
           customTipAmount = 0.00;
       }
       calcResults();
   }

   function resetForm() {
       billTotal = 0.00;
       customTipAmount = 0.00;
       tipPercent = 0;
       people = 0;
       tipPP = 0.00;
       totalPP = 0.00;    
   
       billAmount.value = "";
       numPeople.value = "";
       tipCustom.value = "";
       tipButtons.forEach(button => button.classList.remove("selected"));
       calcResults();
   }
   billAmount.addEventListener('change', (e) => {
       billTotal = parseFloat(e.target.value);
       e.target.value = parseFloat(e.target.value).toFixed(2);    
       calcResults();
   });
   
   numPeople.addEventListener('change', (e) => {
       people = parseInt(e.target.value);
       calcResults();
   });

tipCustom.addEventListener('change',(e) => updateCustomTip(e));
tipButtons.forEach(button => button.addEventListener('click',getTipPct));
resetButton.addEventListener('click',resetForm);