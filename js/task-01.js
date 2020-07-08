const listRef = document.querySelector("#categories").children.length;
console.log(`В списке ${listRef} категории.`);

const [...listEle] = document.querySelectorAll(".item");
listEle.forEach((list) => {
  const titleElement = list.firstElementChild.textContent;
  console.log(`Категория: ${titleElement}`);
  const quantityEl = list.lastElementChild.children.length;
  console.log(`Количество элементов: ${quantityEl}`);
});
