const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector("#users");

myForm.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    //localStorage.setItem("name", nameInput.value);
    //localStorage.setItem("email", emailInput.value);

    let myObj = {
      name: nameInput.value,
      email: emailInput.value,
    };

    let obj_serialized = JSON.stringify(myObj);

    localStorage.setItem(myObj.email, obj_serialized);

    showUser(myObj);
  }
}
// show user
function showUser(user) {
  let details = localStorage.getItem(user.email);
  if (details !== null) {
    removeItems(user.email);
  }
  // get parent node
  const parentNode = document.getElementById("users");
  // append li with new user details and delete button
  const childElm = `<li id=${user.email}> ${user.name} - ${user.email}
    <button onclick = deleteUser('${user.email}')> Delete </button>
    <button onclick = deleteUser('${user.email}')> Edit </button></li>`;
  parentNode.innerHTML = parentNode.innerHTML + childElm;
}

function deleteUser(email) {
  localStorage.removeItem(email);
  removeItems(email);
}

function removeItems(email) {
  const parentNode = document.getElementById("users");
  const childNodeToDelete = document.getElementById(email);
  if (childNodeToDelete) {
    parentNode.removeChild(childNodeToDelete);
  }
}
