const list = document.querySelector("ul");
const inputItems = document.querySelector("input");
const submitButton = document.querySelector(".btn");

submitButton.addEventListener("click", function () {
  let newItem = inputItems.value;
  inputItems.value = "";
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn-danger");

  listItem.appendChild(listText);
  listText.textContent = newItem;
  listItem.appendChild(deleteButton);
  deleteButton.textContent = "Delete";
  list.appendChild(listItem);

  deleteButton.addEventListener("click", function () {
    list.removeChild(listItem);
  });
});
