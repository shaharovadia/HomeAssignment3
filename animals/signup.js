
const form1 = document.getElementById("create-visitor-form1");
const firstNameInput1 = document.getElementById("FirstName");
const lastNameInput1 = document.getElementById("LastName");
const fullName1 = firstNameInput1.value.concat(" ", lastNameInput1.value);


document.getElementById("submit1").addEventListener("click", (event) => {
  event.preventDefault();
  const fullName1 = firstNameInput1.value.concat(" ", lastNameInput1.value);
  createNewVisitor1(fullName1);
});


function createNewVisitor1(fullName1) {
  if(!validateFormInputs1()){
    return false;
  }

  if(!visitorExists1(fullName1)){
    return false;
  } 

  else{
    makeVisitor1(fullName1);
  }
}

document.getElementById("login1").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href="./login.html";
});

const validateFormInputs1 = () => {
 // בודק האם האינפוטים קיימים ויש בהם ערך
 // מחזיר האם תקין או לא (בוליאני)
// Check if both fields are filled
if (!firstNameInput1.value || !lastNameInput1.value) {
  alert("Please fill in both first and last name.");
  return false; // Prevent form submission
}
return true;
}
const visitorExists1 = (fullName1) => {
  const existingVisitor1 = visitors.find(
    (visitor) => visitor.name === fullName1
  );
  if (existingVisitor1) {
    alert("This name is already registered. Please choose a different name.");
    return false; // Prevent form submission
  }
  // If all validations pass, return true to allow form submission
  return true;
}

const makeVisitor1 = (fullName1) => {
  let visitor = {name: fullName1, coins: 50, thumbImage: "https://www.miicharacters.com/miis/thumb/1370_bowser.jpg"}
  visitors.push(visitor);
  const visitorsJson = JSON.stringify(visitors);
  localStorage.setItem("visitors", visitorsJson);

  // Create and configure the dialog
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "welcomeDialog");
  dialog.innerHTML = `<p>${fullName1} registered successfully</p>`;
  document.body.appendChild(dialog);

  // Show the dialog
  dialog.showModal();

  // Close the dialog after 3 seconds and then redirect
  setTimeout(() => {
      dialog.close();
      // Redirect after the dialog is closed
      window.location.href = "login.html";
  }, 2000);
}