// TODO: write your code here!
console.log("hello from inside");
const incBtn = document.querySelector(".plus");
const minBtn = document.querySelector(".minus");
const moneyInput = document.querySelector("#submit");
const counter = document.getElementById("counter");
let cents = parseInt(document.getElementById("price-input").value, 10);
let i = 0;

function incNumber() {
  i++;
  counter.innerHTML = i;
  cents += 15000;
  console.log(cents);
}

function decNumber() {
  if (i > 0) {
    --i;
    counter.innerHTML = i;
    cents -= 15000;
    console.log(cents);
  }
}

incBtn.addEventListener("click", incNumber);
minBtn.addEventListener("click", decNumber);

// const updateCounter = (counter, count) => {
//   counter.dataset.count = count;
//   counter.innerText = count;
// };
// const updateInput = (priceCents) => {
//   const input = document.getElementById("price-input");
//   input.value = priceCents;
// };
// const updateCTA = (priceCents) => {
//   const button = document.getElementById("submit");
//   button.value = `Pay ${priceCents / 100}€`;
// };
// const updateForm = (event) => {
//   const offset = Number.parseInt(event.currentTarget.dataset.offset, 10);
//   const counter = document.getElementById("counter");
//   const count = Number.parseInt(counter.dataset.count, 10) + offset;
//   const unitPriceCents = document.getElementById("price").dataset.amountCents;
//   const priceCents = unitPriceCents * count;
//   if (count >= 1) {
//     {
//     }
//     updateCounter(counter, count);
//     updateInput(priceCents);
//     updateCTA(priceCents);
//   } else {
//     event.preventDefault();
//   }
// };
// const updateFormOnButtonClick = (button) => {
//   button.addEventListener("click", updateForm);
// };
// const buttons = document.querySelectorAll(".incrementer");
// buttons.forEach(updateFormOnButtonClick);
