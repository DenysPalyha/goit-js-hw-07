const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("h1 > #name-output");

inputRef.addEventListener("input", handleinputRef);

function handleinputRef(event) {
  spanRef.textContent = event.target.value;
  if (spanRef.outerText === "") {
    spanRef.textContent = "незнакомец";
  }
}
