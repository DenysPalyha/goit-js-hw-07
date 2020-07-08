const inputElementRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

inputElementRef.addEventListener("input", handleInputElementRef);

function handleInputElementRef(event) {
  spanTextRef.style.fontSize = event.currentTarget.value + "px";
}
