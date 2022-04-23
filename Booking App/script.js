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
    // let deserialized = JSON.parse(localStorage.getItem("myObj"));
    // console.log(deserialized);
  }
  function showUser(user) {
    const parentNode = document.getElementById("users");
    const childElm = `<li> ${user.name} - ${user.email}`;
    parentNode.innerHTML = parentNode.innerHTML + childElm;
    
  }
}
