
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
  const existingVisitor = visitors.find(
    (visitor) => visitor.name === fullName1
  );
  if (existingVisitor) {
    alert("This name is already registered. Please choose a different name.");
    return false; // Prevent form submission
  }
  // If all validations pass, return true to allow form submission
  return true;
}

 const makeVisitor1 = (fullName1) => {
     // מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
    let visitor = {name: fullName1 , coins: 50, visitedAnimals : []}
    visitors.push(visitor);
    const visitorsJson = JSON.stringify(visitors);
     // Save the JSON string in local storage using the key "visitors"
    localStorage.setItem("visitors", visitorsJson);
    alert("Visitor added successfully!");
    form1.reset(); // Reset the form after successful submission
    window.location.href="./login.html";
 }