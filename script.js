"use strict";

const errorMessage = document.querySelector(".text");
const emailInput = document.getElementById("email");
const successMessage = document.getElementById("success_message");
const submitBtn = document.getElementById("submit");
const signupPage = document.querySelector(".signUp-container");
const closeSuccessMessage = document.getElementById("demiss");

submitBtn.addEventListener("click", function () {
  const btnSubmit = document.getElementById("email").value;
  console.log(typeof btnSubmit);

  if (!btnSubmit) {
    emailInput.style.borderColor = "#ff0000";
    emailInput.style.backgroundColor = "#fbd9df";
    errorMessage.textContent = "Invalid email";
  } else if (btnSubmit.length > 0) {
    successMessage.classList.remove("hidden");
    signupPage.style.display = "none";
  }
});

closeSuccessMessage.addEventListener("click", function () {
  signupPage.style.display = "";
  successMessage.classList.add("hidden");
  emailInput.style.borderColor = "";
  errorMessage.textContent = "";
  emailInput.value = "";
});
// const errorMessage = document.querySelector(".text");
// const btnSubmit = document.getElementById("submit");
// const enterEmail = document.getElementById("email").value;

// btnSubmit.addEventListener("click", function () {
//   if (!enterEmail) {
//     errorMessage.classList.remove("hidden");
//     document.getAnimations("email").style.borderColor = "#ff0000";
//   }
// });

// selection of HTML elements
// const sectionMessage = document.querySelector(".success");
// sectionMessage.style.display = "none";

// const sectionSignUp = document.querySelector(".signUp-container");

// const inputEmail = document.querySelector("#email");

// // Function to display error message
// const showErrorMessage = () => {
//   console.error("error");
//   const form = document.querySelector(".form_group");

//   const existingErrorMessage = document.querySelector(".error-message");
//   if (!existingErrorMessage) {
//     const spanError = document.createElement("span");
//     spanError.textContent = "Valid email required";
//     spanError.classList.add("error-message");
//     form.appendChild(spanError);
//   }

//   inputEmail.classList.add("error-input");
//   inputEmail.classList.remove("email");
// };

// // Function to remove error message
// const removeErrorMessage = () => {
//   const form = document.querySelector(".form_group");
//   const spanError = document.querySelector(".error-message");

//   if (spanError) {
//     form.removeChild(spanError);
//     inputEmail.classList.remove("error-input");
//     inputEmail.classList.add(email);
//   }
// };

// // Function to validate if email is valid
// const validateEmail = (email) => {
//   console.log(typeof email);
//   console.log(email.length);

//   if (email.length > 0 && email.includes("@") && email.include(".")) {
//     sectionMessage.style.display = "visible";
//     subscribe(email);
//   } else {
//     showErrorMessage();
//   }
// };

// // Function for dismiss button
// const demiss = () => {
//   sectionSignUp.style.display = "flex";
//   sectionMessage.style.display = "none";
//   document.querySelector("#email").value = "";
//   inputEmail.classList.remove("error-input");
//   inputEmail.classList.add("email");
//   removeErrorMessage();
// };

// // Function for subscribe button
// const subscribe = (email) => {
//   console.log(email);
//   sectionSignUp.style.display = "none";
//   sectionMessage.style.display = "flex";
//   document.querySelector("#spnEmail").textContent = email;
// };

// // Click event for the subscribe button
// document.querySelector("#submit").addEventListener("click", function () {
//   let inputEmailValue = document.querySelector("#email").value;
//   validateEmail(inputEmailValue);
// });

// // Click event for the dismiss button
// document.querySelector("#demiss").addEventListener("click", demiss);

// // Event for subscribe button
// inputEmail.addEventListener("keydown", function (e) {
//   let inputEmailValue = document.querySelector("#email").value;
//   if (e.key === "Enter") {
//     validateEmail(inputEmailValue);
//   }
// });
