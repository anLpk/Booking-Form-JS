// TODO: write your code here!
console.log("hello from inside");
const incBtn = document.querySelector(".plus");
const minBtn = document.querySelector(".minus");
const moneyInput = document.querySelector("#submit");
const counter = document.getElementById("counter");
let cents = parseInt(document.getElementById("price-input").value, 10);
let i = 0;

function incNumber() {
  i += 1;
  counter.innerHTML = i;
  cents += 15000;
  document.getElementById("price-input").value = cents;
  // console.log(cents);
  moneyInput.value = `Pay ${cents / 100}€`;
}

function decNumber() {
  if (i > 0) {
    i -= 1;
    counter.innerHTML = i;
    cents -= 15000;
    document.getElementById("price-input").value = cents;
    // console.log(cents);
    moneyInput.value = `Pay ${cents / 100}€`;
  }
}

incBtn.addEventListener("click", incNumber);
minBtn.addEventListener("click", decNumber);
