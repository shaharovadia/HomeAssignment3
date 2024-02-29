
  //הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
  // רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי
  function renderAnimal() {
    const animalData = JSON.parse(localStorage.getItem("currentAnimal")); // Retrieve the animal data from local storage
  
    if (animalData) {
      const container = document.querySelector(".visitedAnimal"); // Select the container div by its class
  
      // Clear previous content
      container.innerHTML = '';
  
      // Dynamically create and append new elements to display the animal's details
      container.appendChild(createElementWithText('h2', animalData.name));
      container.appendChild(createElementWithText('p', `Habitat: ${animalData.habitat}`));
      container.appendChild(createElementWithText('p', `Weight: ${animalData.weight} kg`));
      container.appendChild(createElementWithText('p', `Height: ${animalData.height} cm`));
      container.appendChild(createElementWithText('p', `Color: ${animalData.color}`));
      container.appendChild(createElementWithText('p', `Predator: ${animalData.isPredator ? "Yes" : "No"}`));
      // container.appendChild(createElementWithText('button','Feed Me'))
    }
  }
  


  function createElementWithText(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
  }
  
  document.addEventListener("DOMContentLoaded",() => {
    renderAnimal();
    renderRelatedAnimals();
  } );
  
  document.addEventListener('DOMContentLoaded', () => {
    const feedButton = document.getElementById('feed-animal');
    if (feedButton) {
      feedButton.addEventListener('click', feedAnimal);
    }
  });

  function renderRelatedAnimals() {
    const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
    const relatedContainer = document.querySelector("#related-animals");
    relatedContainer.innerHTML = ""; // Clear previous content
  
    animals.filter(animal => animal.habitat === currentAnimal.habitat && animal.name !== currentAnimal.name)
      .forEach(animal => {
        const card = document.createElement("div");
        card.classList.add("animal-card");
  
        const image = document.createElement("img");
        image.src = `images/${animal.name}.jpg`;
        card.appendChild(image);
  
        const name = document.createElement("h3");
        name.textContent = animal.name;
        card.appendChild(name);
  
        const details = document.createElement("p");
        details.textContent = `Habitat: ${animal.habitat}, Weight: ${animal.weight}kg, Height: ${animal.height}cm`;
        card.appendChild(details);
  
        const visitButton = document.createElement("button");
        visitButton.textContent = "Visit";
        visitButton.addEventListener("click", () => visitAnimal(animal.name));
        card.appendChild(visitButton);
  
        relatedContainer.appendChild(card);
      });
  }
  
  function visitAnimal(animalName){
    const selectedAnimal = animals.find((a) => a.name === animalName);
    localStorage.setItem("currentAnimal", JSON.stringify(selectedAnimal));
    renderAnimal();
    renderRelatedAnimals();
  }

function feedAnimal() {
  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));

  if (currentVisitor && currentVisitor.coins >= 2) {
    currentVisitor.coins -= 2; // Deduct 2 coins
    alert("Thank you for feeding the animal!");
    // Update visitor in local storage
    localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));
    updateVisitorArray(currentVisitor); // Assume this function updates the visitors array and handles storage
  } else {
    if (currentAnimal.isPredator) {
      alert("The animal is a predator and you've been eaten!");
    } else {
      alert("The animal has run away!");
    }
  }
}

function visitorGotEaten() {
  // ממשו את הלוגיקה של חיה שטורפת אורח
}

function animalEscaped() {
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות
}
 
function updateVisitorArray(updatedVisitor) {
  let visitors = JSON.parse(localStorage.getItem("visitors")); // Retrieve the existing visitors array
  if (visitors) {
    // Find the index of the visitor to update
    const index = visitors.findIndex(visitor => visitor.name === updatedVisitor.name);
    if (index !== -1) {
      visitors[index] = updatedVisitor; // Update the visitor's details
    } else {
      // Optionally handle the case where the visitor isn't found
      console.log("Visitor not found.");
    }
    // Save the updated visitors array back to local storage
    localStorage.setItem("visitors", JSON.stringify(visitors));
  } else {
    console.log("No visitors array found in local storage.");
  }
}