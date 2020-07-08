const incrementRef = document.querySelector("[data-action='increment']");
const decremenrRef = document.querySelector("[data-action='decrement']");
const counterValueRef = document.querySelector("#value");

incrementRef.addEventListener("click", increment);
decremenrRef.addEventListener("click", decrement);

let counterValue = 0;
function increment() {
  counterValue += 1;

  counterValueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;

  counterValueRef.textContent = counterValue;
}
