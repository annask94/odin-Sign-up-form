const firstPassword = document.querySelector('[data-name="firstPassword"]');
const secondPassword = document.querySelector('[data-name="secondPassword"]');
const submitBtn = document.querySelector('[data-name="submitBtn"]');

function checkPasswordMatch() {
  let firstEntry = firstPassword.value;
  let secondEntry = secondPassword.value;

  if (firstEntry === secondEntry && firstEntry !== "" && secondEntry !== "") {
    // Passwords match and are not empty
    submitBtn.disabled = false;
    firstPassword.classList.remove("error");
    secondPassword.classList.remove("error");
  } else {
    // Passwords don't match or one of them is empty
    submitBtn.disabled = true;
    firstPassword.classList.add("error");
    secondPassword.classList.add("error");
  }
}

// Attach the function to the input event of both password fields
firstPassword.addEventListener("input", checkPasswordMatch);
secondPassword.addEventListener("input", checkPasswordMatch);
