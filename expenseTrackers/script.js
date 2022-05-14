// take references
const myForm = document.getElementById("my-form");
const amt = document.querySelector("#amt");
const desc = document.querySelector("#desc");
const category = document.querySelector("#category");

// when add expense clicked
myForm.addEventListener("click", addExpense);

function addExpense(e) {
  e.preventDefault();

  let expense = {
    amount: amt.value,
    description: desc.value,
    category: category.value,
  };

  // console.log(expense.amount);
  let obj_serialized = JSON.stringify(expense);

  localStorage.setItem(expense.amount, obj_serialized);
  showExpense(expense);
}

function showExpense(expense) {
  let details = localStorage.getItem(expense.amount);
  if (details !== null) {
    removeItems(expense.amount);
  }
  // get parent node
  const parentNode = document.getElementById("exDetails");

  // append li with new user details and delete button
  const childElm = `<li id=${expense.description}> ${expense.amount} - ${expense.category}
    <button onclick = deleteUser('${expense.amount}')> Delete </button>
    <button onclick = deleteUser('${expense.amount}')> Edit </button></li>`;
  parentNode.innerHTML = parentNode.innerHTML + childElm;
}
function deleteUser(amount) {
  localStorage.removeItem(amount);
  removeItems(amount);
}

function removeItems(amount) {
  const parentNode = document.getElementById("exDetails");
  const childNodeToDelete = document.getElementById(amount);
  if (childNodeToDelete) {
    parentNode.removeChild(childNodeToDelete);
  }
}
