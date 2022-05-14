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
  //console.log(expense.amount);
  localStorage.setItem("amt", expense.amount);
  showExpense()

}


