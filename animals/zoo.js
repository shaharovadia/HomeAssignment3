window.onload = function () {
  generateDataset();
};
function renderAvailableAnimals() {
  // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
  // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
  // במידה ואין פילטרים מסומנים, הציגו את כל החיות

  function generateAnimalCard(animal) {
    return `
  <div class="card">
    <div class="header">${animal.name}</div>
    <div class="info">
      <p>Weight: ${animal.weight}</p>
      <p>Height: ${animal.height}</p>
      <p>Color: ${animal.color}</p>
      <p>Habitat: ${animal.habitat}</p>
      <P>IsPredator: ${animal.isPredator}</p>
    </div>
  </div>
`;
  }
  document.addEventListener("DOMContentLoaded", function () {
    const animalCardsContainer = document.querySelector(".animal-cards");

    animals.forEach((animal) => {
      const animalCardHTML = generateAnimalCard(animal);
      animalCardsContainer.insertAdjacentHTML("beforeend", animalCardHTML);
    });
  });
}
renderAvailableAnimals();

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
}
