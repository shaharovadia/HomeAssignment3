const form = document.getElementById("create-visitor-form");
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const fullName = firstNameInput.value + " " + lastNameInput.value;

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  const fullName = firstNameInput.value + " " + lastNameInput.value;
  createNewVisitor(fullName);
});

function createNewVisitor(fullName) {
  if(!validateFormInputs()){
    return false;
  }

  if(!visitorExists(fullName)){
  return false;
  } 
  else{
    makeVisitor(fullName);
  
  }
}

  document.getElementById("login").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href="./login.html";
  });

  const validateFormInputs = () => {
   // בודק האם האינפוטים קיימים ויש בהם ערך
   // מחזיר האם תקין או לא (בוליאני)
  // Check if both fields are filled
  if (!firstNameInput.value || !lastNameInput.value) {
    alert("Please fill in both first and last name.");
    return false; // Prevent form submission
  }
  return true;
}

  const visitorExists = (fullName) => {
    const existingVisitor = visitors.find(
      (visitor) => visitor.name === fullName
    );
    if (existingVisitor) {
      alert("This name is already registered. Please choose a different name.");
      return false; // Prevent form submission
    }
    // If all validations pass, return true to allow form submission
    return true;
  }

   const makeVisitor = (fullName) => {
    // מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
    let visitor = {name: fullName , coins: 50}
  visitors.push(visitor);
  const visitorsJson = JSON.stringify(visitors);

  // Save the JSON string in local storage using the key "visitors"
  localStorage.setItem("visitors", visitorsJson);

  // Display success message or perform other actions (optional)
  alert("Visitor added successfully!");
  form.reset(); // Reset the form after successful submission
  window.location.href="./login.html";
   }
 
/**************************************
  מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
  שימו לב כי האיידי של createForm
  זהה לאיידי של הטופס בעמוד signup.html
  אין לשנות אותו */
const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}
