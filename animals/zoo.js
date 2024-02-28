function renderAvailableAnimals() {
    // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
    // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
    // במידה ואין פילטרים מסומנים, הציגו את כל החיות
  }
  function visitAnimal(animalName) {
    // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
    // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
  }
  
//   function setFilter(filterKey, filterValue) {
//     /**
//      * ממשו את הלוגיקה של השמת פילטר
//      * הפילטרים הקיימים הם
//      * isPredator: true | false
//      * habitat: "land" | "sea"
//      * weight: value > user selected weight
//      * height: value > user selected height
//      * color: dropdown of all available colors
//      */
//     // ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
//     // רנדרו רק את החיות שעומדות בתנאים של הפילטרים
    
//   }

let currentFilters = {};
let filteredAnimals = []; 

function setFilter(filterKey, filterValue) {

  currentFilters[filterKey] = filterValue !== "" ? filterValue : undefined;
  
  localStorage.setItem("currentFilters", JSON.stringify(currentFilters));

  filterAnimalsAndRenderCards();
}

function renderAnimalCards() {
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

    animalsContainer.appendChild(card);
  });
}

function filterAnimalsAndRenderCards() {
  filteredAnimals = animals.filter((animal) => {
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

  renderAnimalCards();
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

  filterAnimalsAndRenderCards();
}

document.addEventListener("DOMContentLoaded", loadSavedFilters);