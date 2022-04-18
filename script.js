var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
//console.log(form);

// form submit event
form.addEventListener("submit", addItem);

// delete event
itemList.addEventListener("click", removeItem);

// add item
function addItem(e) {
  e.preventDefault();
  //console.log(1);
  var newItem = document.getElementById("item").value;

  // create new li element
  var li = document.createElement("li");

  //add class
  li.className = "list-group-item";
  //console.log(li);

  // add text
  li.appendChild(document.createTextNode(newItem));

  // create delete button
  var deleteBtn = document.createElement("button");

  // add classes
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //append child to li
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
