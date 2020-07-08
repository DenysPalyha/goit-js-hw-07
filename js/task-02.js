const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsProduct = (ingredient) => {
  const listRef = document.createElement("li");
  listRef.classList.add("list-item");
  listRef.textContent = ingredient;
  return listRef;
};

const prod = ingredients.map((ingredient) => ingredientsProduct(ingredient));

const ingredientsListRef = document.querySelector("#ingredients");
console.log(ingredientsListRef);

ingredientsListRef.append(...prod);
