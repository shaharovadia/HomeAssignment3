
const animalsElement = document.getElementById("animal-cards");
const filterForm = document.getElementById("filter-form");
const nameInput = document.getElementById("name-filter");
const weightSelect = document.getElementById("weight-filter");
const habitatSelect = document.getElementById("habitat-filter");
const predatorSelect = document.getElementById("is-predator-filter");
const heightInput = document.getElementById("height-filter");
const colorSelect = document.getElementById("color-filter");

window.onload = function() {
  generateDataset();
  populateColorOptions();
};

window.addEventListener("DOMContentLoaded", function() {
  nameInput.addEventListener("input", (event) => {
    const filters = getFilters();
    filters.name = event.target.value;
    setFilters(filters);
    renderAvailableAnimals();
  });

  weightSelect.addEventListener("change", (event) => {
    const filters = getFilters();
    filters.weight = event.target.value;
    setFilters(filters);
    renderAvailableAnimals();
  });
  
  habitatSelect.addEventListener("change", (event) => {
    const filters = getFilters();
    filters.habitat = event.target.value;
    setFilters(filters);
    renderAvailableAnimals();
  });
  
  predatorSelect.addEventListener("change", (event) => {
    const filters = getFilters();
    filters.isPredator
    setFilters(filters);
    renderAvailableAnimals();
  });

});

function populateColorOptions() {
  const colorSelect = document.getElementById("color-filter");
  if (colorSelect) {
    const animals = JSON.parse(localStorage.getItem("animals")) || [];
    const uniqueColors = [...new Set(animals.map((animal) => animal.color))];

    uniqueColors.forEach((color) => {
      const option = document.createElement("option");
      option.value = color;
      option.text = color;
      colorSelect.appendChild(option);
    });
  } else {
    // Handle scenario where colorSelect is not yet available
    console.warn("Color select element not found. Options not populated.");
  }
}

function renderAvailableAnimals() {
  const animals = JSON.parse(localStorage.getItem("animals")) || [];
  const filters = getFilters();

  const filteredAnimals = animals.filter((animal) => {
    let match = true;

    // Check name filter (case-insensitive)
    if (filters.name && !animal.name.toLowerCase().includes(filters.name.toLowerCase())) {
      match = false;
    }

    // Check predator filter
    if (filters.isPredator && animal.isPredator !== (filters.isPredator === "true")) {
      match = false;
    }

    // Check habitat filter
    if (filters.habitat && animal.habitat !== filters.habitat) {
      match = false;
    }

    // Check weight filter
    if (filters.weight && animal.weight <= parseInt(filters.weight)) {
      match = false;
    }

    // Check height filter
    if (filters.height && animal.height <= parseInt(filters.height)) {
      match = false;
    }

    // Check color filter
    if (filters.color && animal.color !== filters.color) {
      match = false;
    }

    return match;
  });

  // Render the filtered animals
  animalsElement.innerHTML = ""; // Clear existing content
  filteredAnimals.forEach((animal) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("animal-card");
    cardElement.innerHTML = `
      <h3><span class="math-inline">\{animal\.name\}</h3\>
<img src\="images/</span>{animal.name}.jpg" alt="${animal.name}" />
      <p>
        ${animal.isPredator ? "טורף" : "צמחוני"} | ${animal.habitat} | משקל: ${animal.weight} | גובה: ${animal.height} | צבע: <span class="math-inline">\{animal\.color\}
</p\>
<button onclick\="visitAnimal\('</span>{animal.name}')">לְבַקֵר</button>
    `;
    animalsElement.appendChild(cardElement);
  });
}


function visitAnimal(animalName) {
  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
  localStorage.setItem("selectedAnimal", JSON.stringify(animalName));
  window.location.href = "animal.html";
}

function getFilters() {
  return JSON.parse(localStorage.getItem("filters")) || {};
}

function setFilters(filters) {
  const filters = getFilters();
  filters[filterKey] = filterValue;
  setFilters(filters);

  // Perform filtering and rendering
  const filteredAnimals = filterAnimals(animals, filters);
  renderAvailableAnimals(filteredAnimals);
}
  


  // document.addEventListener("DOMContentLoaded", function () {
  //   const animalCardsContainer = document.querySelector(".animal-cards");
  //   const searchNameInput = document.getElementById("searchName");
  //   const searchWeightInput = document.getElementById("searchWeight");
  //   const searchHeightInput = document.getElementById("searchHeight");
  //   const searchColorInput = document.getElementById("searchColor");
  //   const searchHabitatInput = document.getElementById("searchHabitat");

    // function filterAnimals() {
    //   const filteredAnimals = animals.filter((animal) => {
    //     return (
    //       (searchNameInput.value === "" ||
    //         animal.name
    //           .toLowerCase()
    //           .includes(searchNameInput.value.toLowerCase())) &&
    //       (searchWeightInput.value === "" ||
    //         animal.weight.toString().includes(searchWeightInput.value)) &&
    //       (searchHeightInput.value === "" ||
    //         animal.height.toString().includes(searchHeightInput.value)) &&
    //       (searchColorInput.value === "" ||
    //         animal.color
    //           .toLowerCase()
    //           .includes(searchColorInput.value.toLowerCase())) &&
    //       (searchHabitatInput.value === "" ||
    //         animal.habitat
    //           .toLowerCase()
    //           .includes(searchHabitatInput.value.toLowerCase()))
    //     );
    //   });

    //   animalCardsContainer.innerHTML = "";
    //   filteredAnimals.forEach((animal) => {
    //     const animalCardHTML = generateAnimalCard(animal);
    //     animalCardsContainer.insertAdjacentHTML("beforeend", animalCardHTML);
    //   });
    // }

    // searchNameInput.addEventListener("input", filterAnimals);
    // searchWeightInput.addEventListener("input", filterAnimals);
    // searchHeightInput.addEventListener("input", filterAnimals);
    // searchColorInput.addEventListener("input", filterAnimals);
    // searchHabitatInput.addEventListener("input", filterAnimals);

  //   animals.forEach((animal) => {
  //     const animalCardHTML = generateAnimalCard(animal);
  //     animalCardsContainer.insertAdjacentHTML("beforeend", animalCardHTML);
  //   });
  // });

