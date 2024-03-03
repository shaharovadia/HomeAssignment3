function visitAnimal(animalName) {
  const selectedAnimal = animals.find((a) => a.name === animalName);

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

  if (selectedAnimal) {
    localStorage.setItem("currentAnimal", JSON.stringify(selectedAnimal));
    window.location.href = "./animal.html";
  }
}

function populateColorOptions() {
  const colorSelect = document.getElementById("color"); // Adjust ID if necessary
  const uniqueColors = new Set();

  animals.forEach((animal) => {
    if (animal.color) {
      uniqueColors.add(animal.color);
    }
  });

  uniqueColors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    colorSelect.appendChild(option);
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

let currentFilters = {};
let filteredAnimals = [];

function setFilter(filterKey, filterValue) {
  currentFilters[filterKey] = filterValue !== "" ? filterValue : undefined;

  localStorage.setItem("currentFilters", JSON.stringify(currentFilters));

  filterAnimals();
}

function filterAnimals() {
  filteredAnimals = animals.filter((animal) => {
    if (
      currentFilters.name &&
      !animal.name.toLowerCase().includes(currentFilters.name.toLowerCase())
    ) {
      return false;
    }

    if (
      currentFilters.isPredator !== undefined &&
      animal.isPredator !== (currentFilters.isPredator === "true")
    ) {
      return false;
    }
    if (currentFilters.habitat && animal.habitat !== currentFilters.habitat) {
      return false;
    }
    if (
      currentFilters.weight &&
      animal.weight <= parseInt(currentFilters.weight)
    ) {
      return false;
    }
    if (
      currentFilters.height &&
      animal.height <= parseInt(currentFilters.height)
    ) {
      return false;
    }
    if (currentFilters.color && animal.color !== currentFilters.color) {
      return false;
    }
    return true;
  });

  renderAvailableAnimals();
}

function loadSavedFilters() {
  const storedFilters = JSON.parse(localStorage.getItem("currentFilters"));
  if (storedFilters) {
    currentFilters = storedFilters;
    for (const filterKey in currentFilters) {
      const filterValue = currentFilters[filterKey];
      document.getElementById(filterKey).value = filterValue;
    }
  }

  const storedFilteredAnimals = JSON.parse(
    localStorage.getItem("filteredAnimals")
  );
  if (storedFilteredAnimals) {
    filteredAnimals = storedFilteredAnimals;
  } else {
    filteredAnimals = animals;
  }

  filterAnimals();
}

document.addEventListener("DOMContentLoaded", () => {
  loadSavedFilters();
  populateColorOptions();
});

const renderAvailableAnimals = () => {
  const animalsContainer = document.querySelector(".animals-container");
  animalsContainer.innerHTML = "";

  filteredAnimals.forEach((animal) => {
    const card = document.createElement("div");
    card.classList.add("animal-card");

    const image = document.createElement("img");
    image.src = `images/${animal.name}.jpg`;
    card.appendChild(image);

    const name = document.createElement("h3");
    name.id = "textbox";
    name.textContent = animal.name;
    card.appendChild(name);

    const details = document.createElement("p");
    details.textContent = `Habitat: ${animal.habitat}, Weight: ${animal.weight}kg, Height: ${animal.height}cm, Color: ${animal.color}`;
    details.id = "textbox";
    card.appendChild(details);

    const visitAnimalButton = document.createElement("button");
    visitAnimalButton.innerText = "Visit";
    visitAnimalButton.addEventListener("click", () => visitAnimal(animal.name));
    visitAnimalButton.id = "textbox";
    card.appendChild(visitAnimalButton);

    animalsContainer.appendChild(card);
  });
};
