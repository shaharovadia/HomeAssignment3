function renderAvailableAnimals() {
  // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
  // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
  // במידה ואין פילטרים מסומנים, הציגו את כל החיות
}
function visitAnimal(animalName) {
  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
}

function setFilter(filterKey, filterValue) {
  /**
   * ממשו את הלוגיקה של השמת פילטר
   * הפילטרים הקיימים הם
   * isPredator: true | false
   * habitat: "land" | "sea"
   * weight: value > user selected weight
   * height: value > user selected height
   * color: dropdown of all available colors
   */
  // ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
  // רנדרו רק את החיות שעומדות בתנאים של הפילטרים

  document.addEventListener("DOMContentLoaded", function () {
    const animalCardsContainer = document.querySelector(".animal-cards");
    const searchNameInput = document.getElementById("searchName");
    const searchWeightInput = document.getElementById("searchWeight");
    const searchHeightInput = document.getElementById("searchHeight");
    const searchColorInput = document.getElementById("searchColor");
    const searchHabitatInput = document.getElementById("searchHabitat");

    function filterAnimals() {
      const filteredAnimals = animals.filter((animal) => {
        return (
          (searchNameInput.value === "" ||
            animal.name
              .toLowerCase()
              .includes(searchNameInput.value.toLowerCase())) &&
          (searchWeightInput.value === "" ||
            animal.weight.toString().includes(searchWeightInput.value)) &&
          (searchHeightInput.value === "" ||
            animal.height.toString().includes(searchHeightInput.value)) &&
          (searchColorInput.value === "" ||
            animal.color
              .toLowerCase()
              .includes(searchColorInput.value.toLowerCase())) &&
          (searchHabitatInput.value === "" ||
            animal.habitat
              .toLowerCase()
              .includes(searchHabitatInput.value.toLowerCase()))
        );
      });

      animalCardsContainer.innerHTML = "";
      filteredAnimals.forEach((animal) => {
        const animalCardHTML = generateAnimalCard(animal);
        animalCardsContainer.insertAdjacentHTML("beforeend", animalCardHTML);
      });
    }

    searchNameInput.addEventListener("input", filterAnimals);
    searchWeightInput.addEventListener("input", filterAnimals);
    searchHeightInput.addEventListener("input", filterAnimals);
    searchColorInput.addEventListener("input", filterAnimals);
    searchHabitatInput.addEventListener("input", filterAnimals);

    animals.forEach((animal) => {
      const animalCardHTML = generateAnimalCard(animal);
      animalCardsContainer.insertAdjacentHTML("beforeend", animalCardHTML);
    });
  });
}
