const inputField = document.querySelector(".display");
const addButton = document.querySelector(".btn-add");
const delButton = document.querySelector(".btn-del");
const clrButton = document.querySelector(".btn-clr");
const itemList = document.querySelector(".item-list");

let item = [];
function updateDisplay() {
  itemList.innerHTML = "";
  for (let i = 0; i < item.length; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1) + ". " + item[i];
    itemList.appendChild(li);
  }
}


addButton.addEventListener("click", () => {
  const inputValue = inputField.value.trim();
  if (inputValue) {
    item.push(inputValue);
    inputField.value = " ";
    updateDisplay();
  }
  else {
    alert("No Item is Added")
  }
});


delButton.addEventListener("click", () => {
  if (item.length > 0) {
    item.pop();
    updateDisplay();
  }
  else {
    alert("No item left to Delete")
  }
});


clrButton.addEventListener("click", () => {
  if (item.length > 0) {
    if (confirm("Are you sure you want to clear all items?")) {
      item = []; // Clear the array
      updateDisplay(); // Update the display
    }
  } else {
    alert("No items to clear.");
  }
});

