const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passError = document.getElementById("passError");

  let valid = true;
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  passError.innerHTML = "";
  name.classList.remove("valid", "invalid");
  email.classList.remove("valid", "invalid");
  password.classList.remove("valid", "invalid");
  if (name.value.trim() === "") {
    nameError.innerHTML = "Name is required";
    name.classList.add("invalid");
    valid = false;
  } else {
    name.classList.add("valid");
  }
  if (email.value.trim() === "") {
    emailError.innerHTML = "Email is required";
    email.classList.add("invalid");
    valid = false;
  } else if (!email.value.includes("@")) {
    emailError.innerHTML = "Email must contain @";
    email.classList.add("invalid");
    valid = false;
  } else {
    email.classList.add("valid");
  }
  if (password.value.trim() === "") {
    passError.innerHTML = "Password is required";
    password.classList.add("invalid");
    valid = false;
  } else if (password.value.length < 8) {
    passError.innerHTML = "Password must be at least 8 characters";
    password.classList.add("invalid");
    valid = false;
  } else {
    password.classList.add("valid");
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});