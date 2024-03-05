//הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
// רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי
function renderAnimal() {
  const animalData = JSON.parse(localStorage.getItem("currentAnimal")); // Retrieve the animal data from local storage

  if (animalData) {
    const container = document.querySelector(".visitedAnimal"); // Select the container div by its class

    // Clear previous content
    container.innerHTML = "";
    const detailsWrapper = document.createElement("div");
    detailsWrapper.classList.add("animal-details");

    // Dynamically create and append new elements to display the animal's details
    detailsWrapper.appendChild(createElementWithText("h2", animalData.name));
    detailsWrapper.appendChild(
      createElementWithText("p", `Habitat: ${animalData.habitat}`)
    );
    detailsWrapper.appendChild(
      createElementWithText("p", `Weight: ${animalData.weight} kg`)
    );
    detailsWrapper.appendChild(
      createElementWithText("p", `Height: ${animalData.height} cm`)
    );
    detailsWrapper.appendChild(
      createElementWithText("p", `Color: ${animalData.color}`)
    );
    detailsWrapper.appendChild(
      createElementWithText(
        "p",
        `Predator: ${animalData.isPredator ? "Yes" : "No"}`
      )
    );
    const feedButton = createElementWithText("button", "Feed Me");
    feedButton.classList.add("feed-button"); // Add a class for styling
    detailsWrapper.appendChild(feedButton);
    if (feedButton) {
      feedButton.addEventListener("click", feedAnimal); // Attach event listener
    }
    const image = document.createElement("img");
    image.src = `./images/${animalData.name}.jpg`;
    image.alt = `Image of ${animalData.name}`;
    container.appendChild(detailsWrapper);
    container.appendChild(image);
    
    
  }
}

function createElementWithText(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (tag === "button") {
    element.id = "feedButton";
  }
  return element;
}

document.addEventListener("DOMContentLoaded", () => {
  renderAnimal();
  renderRelatedAnimals();
  createNavBar();
});

function renderRelatedAnimals() {
  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
  const relatedContainer = document.querySelector("#related-animals");
  relatedContainer.innerHTML = ""; // Clear previous content

  animals
    .filter(
      (animal) =>
        animal.habitat === currentAnimal.habitat &&
        animal.name !== currentAnimal.name
    )
    .forEach((animal) => {
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

function visitAnimal(animalName) {
  const selectedAnimal = animals.find((a) => a.name === animalName);
  localStorage.setItem("currentAnimal", JSON.stringify(selectedAnimal));

  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  if (!currentVisitor.visitedAnimals) {
    currentVisitor.visitedAnimals = {};
  }

  // Increment the count for the visited animal
  if (currentVisitor.visitedAnimals[animalName]) {
    currentVisitor.visitedAnimals[animalName]++;
  } else {
    currentVisitor.visitedAnimals[animalName] = 1;
  }

  // Save the updated visitor information
  localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));
  updateVisitorArray(currentVisitor);

  renderAnimal();
  renderRelatedAnimals();
}

function feedAnimal() {
  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));

  if (currentVisitor && currentVisitor.coins >= 2) {
    currentVisitor.coins -= 2; // Deduct 2 coins
    if (!currentVisitor.fedAnimals) {
      currentVisitor.fedAnimals = []; // Initialize the array if it doesn't exist
    }
    if (!currentVisitor.fedAnimals.includes(currentAnimal.name)) {
      currentVisitor.fedAnimals.push(currentAnimal.name);
    }
    alert("Thank you for feeding the animal!");
    // Update visitor in local storage
    localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));
    updateVisitorArray(currentVisitor); // Assume this function updates the visitors array and handles storage
  } else {
    if (currentAnimal.isPredator) {
      visitorGotEaten();
    } else {
      animalEscaped();
    }
  }
}

function visitorGotEaten() {
  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
  const visitors = JSON.parse(localStorage.getItem("visitors"));
  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));

  // 1) Delete the visitor from the visitors array in the local storage
  const updatedVisitors = visitors.filter(
    (visitor) => visitor.name !== currentVisitor.name
  );
  localStorage.setItem("visitors", JSON.stringify(updatedVisitors));

  // 2) Configure and show the dialog modal
  const dialog = document.getElementById("eatenDialog");
  const eatenMessage = document.getElementById("eatenMessage");
  eatenMessage.textContent = `The ${currentAnimal.name} has eaten you!`; // Set the message
  dialog.style.display = "block";
  dialog.showModal(); // Open the dialog

  // Attach event to the "Go to Login" button inside the dialog
  const goToLoginButton = document.getElementById("goToLogin");
  goToLoginButton.addEventListener("click", () => {
    dialog.close(); // Close the dialog
    window.location.href = "login.html"; // Redirect to the login page
  });
}

function animalEscaped() {
  const currentAnimal = JSON.parse(localStorage.getItem("currentAnimal"));
  let animals = JSON.parse(localStorage.getItem("animals"));

  // 1) Delete the animal from the animals array in local storage
  const updatedAnimals = animals.filter(
    (animal) => animal.name !== currentAnimal.name
  );
  localStorage.setItem("animals", JSON.stringify(updatedAnimals));

  // 2) Configure and show the dialog modal
  const dialog = document.getElementById("escapedDialog"); // Ensure you have a dialog element with id="escapedDialog" in your HTML
  const escapedMessage = document.getElementById("escapedMessage"); // And an element with id="escapedMessage" inside the dialog for the message
  const closeButton = document.createElement("button");
  closeButton.textContent = "Back to the zoo..";

  escapedMessage.textContent = `The ${currentAnimal.name} has escaped!`; // Set the message
  dialog.appendChild(closeButton); // Append the close button to the dialog
  dialog.showModal(); // Open the dialog

  // Event listener for the close button
  closeButton.addEventListener("click", () => {
    dialog.close(); // Close the dialog
    window.location.href = "./zoo.html"; // Redirect to the zoo page
  });
}

function updateVisitorArray(updatedVisitor) {
  let visitors = JSON.parse(localStorage.getItem("visitors")); // Retrieve the existing visitors array
  if (visitors) {
    // Find the index of the visitor to update
    const index = visitors.findIndex(
      (visitor) => visitor.name === updatedVisitor.name
    );
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
