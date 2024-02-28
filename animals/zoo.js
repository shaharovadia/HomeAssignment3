
function visitAnimal(animalName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
  const selectedAnimal = animals.find((a) => a.name === animalName);

  if (selectedAnimal) {
    localStorage.setItem("currentAnimal", JSON.stringify(selectedAnimal));
    window.location.href = "./animal.html";
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
    if (currentFilters.name && !animal.name.includes(currentFilters.name)) {
      return false;}
    if (currentFilters.isPredator !== undefined && animal.isPredator !== (currentFilters.isPredator === "true")) {
      return false;
    }
    if (currentFilters.habitat && animal.habitat !== currentFilters.habitat) {
      return false;
    }
    if (currentFilters.weight && animal.weight <= parseInt(currentFilters.weight)) {
      return false;
    }
    if (currentFilters.height && animal.height <= parseInt(currentFilters.height)) {
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

  const storedFilteredAnimals = JSON.parse(localStorage.getItem("filteredAnimals"));
  if (storedFilteredAnimals) {
    filteredAnimals = storedFilteredAnimals;
  } else {
    filteredAnimals = animals;
  }

  filterAnimals();
}

document.addEventListener("DOMContentLoaded", loadSavedFilters);

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
    name.textContent = animal.name;
    card.appendChild(name);

    const details = document.createElement("p");
    details.textContent = `Habitat: ${animal.habitat}, Weight: ${animal.weight}kg, Height: ${animal.height}cm`;
    card.appendChild(details);

const visitAnimalButton = document.createElement("button");
visitAnimalButton.innerText='Visit';
visitAnimalButton.addEventListener("click", () => visitAnimal(animal.name));
    card.appendChild(visitAnimalButton);

animalsContainer.appendChild(card);
  });
};

