document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("InputEmail").value;
    const passwordInput = document.getElementById("InputPass");

    const showPasswordCheckbox = document.getElementById("showPassword");
    const isPasswordVisible = showPasswordCheckbox.checked;

    // Toggle password visibility based on the checkbox state
    passwordInput.type = isPasswordVisible ? "text" : "password";

    // Check the email and password for a successful login
    if (
      emailInput === "ali.nauryzbaev@gmail.com" &&
      passwordInput.value === "123321"
    ) {
      alert("Successful Login!");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

document.getElementById("showPassword").addEventListener("change", function () {
  const passwordInput = document.getElementById("InputPass");
  passwordInput.type = this.checked ? "text" : "password";
});

document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const signUpNameInput = document.getElementById("SignUpName").value;
    const signUpSurnameInput = document.getElementById("SignUpSurname").value;
    const signUpEmailInput = document.getElementById("SignUpEmail").value;
    const signUpPasswordInput = document.getElementById("SignUpPass").value;
    const signUpConfirmPasswordInput =
      document.getElementById("SignUpConfirmPass").value;

    if (signUpPasswordInput !== signUpConfirmPasswordInput) {
      alert("Passwords do not match. Please enter matching passwords.");
      return;
    }

    alert(
      `Registration successful!\nName: ${signUpNameInput}\nSurname: ${signUpSurnameInput}\nEmail: ${signUpEmailInput}\nPassword: ${signUpPasswordInput}`
    );
  });

document
  .getElementById("showSignUpPassword")
  .addEventListener("change", function () {
    const signUpPasswordInput = document.getElementById("SignUpPass");
    signUpPasswordInput.type = this.checked ? "text" : "password";
  });
