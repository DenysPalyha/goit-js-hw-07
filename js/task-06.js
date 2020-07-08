const inputRef = document.querySelector("#validation-input");
const dataLengthRef = inputRef.getAttribute("data-length");
const parsTotalLength = parseInt(dataLengthRef, 10);

inputRef.addEventListener("blur", handleInputRef);

function handleInputRef() {
  if (inputRef.value.length === parsTotalLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
  }
}
