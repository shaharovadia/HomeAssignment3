document.addEventListener("DOMContentLoaded",() => {
  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  showFedAnimals(currentVisitor);
  showVisitedAnimals(currentVisitor);

});

function showFedAnimals(currentVisitor) {
  
  const fedAnimals = currentVisitor.fedAnimals;
  if (!currentVisitor || !fedAnimals || fedAnimals.length === 0) {
    console.log(currentVisitor.name, "has not visited any animals yet.");
    return false;
  };

  displayFedAnimals(fedAnimals); 
}

function displayFedAnimals(fedAnimals) {
  
  const animalsContainer = document.querySelector("#fed-animals");
  animalsContainer.innerHTML = "";

  fedAnimals.forEach((animal) => {
    const card = document.createElement("div");
    card.classList.add("animal-card");

    const image = document.createElement("img");
    image.src = `images/${animal}.jpg`; 
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = animal;
    card.appendChild(name);
    animalsContainer.appendChild(card);
  });
};

 function showVisitedAnimals(currentVisitor) {
  const visitedAnimals = currentVisitor.visitedAnimals;
  displayVisitedAnimals(visitedAnimals)
 }
//   //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי ביקר אותן
function displayVisitedAnimals(visitedAnimals) {
  const animalsContainer = document.querySelector("#visited-animals"); // Assuming this element exists

  animalsContainer.innerHTML = "";

  // Assuming visitedAnimals is an object with animal names as keys
  for (const animalName in visitedAnimals) {
    const animalData = visitedAnimals[animalName]; // Get the animal's data

    const card = document.createElement("div");
    card.classList.add("animal-card");

    const image = document.createElement("img");
    image.src = `images/${animalName}.jpg`; // Adjust path as needed
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = animalName;
    card.appendChild(name);

    animalsContainer.appendChild(card);
  }
  };


// function showFavoriteAnimal(visitor) {
//   //ממשו את הלוגיקה שמציגה את החיה שהאורח ביקר הכי הרבה פעמים אצלה
//   if (!visitor) {
//     console.log("Visitor not found.");
//     return false;
//   }

//   if (visitor.visitedAnimals.length === 0) {
//     console.log(visitor.name, "has not visited any animals yet.");
//     return false;
//   }
//   const animalVisitCounts = new Map();

//   // Count visits for each animal
//   for (const animal of visitor.visitedAnimals) {
//     const animalName = animal.name;
//     const currentCount = animalVisitCounts.get(animalName) || 0;
//     animalVisitCounts.set(animalName, currentCount + 1);
//   }

//   // Find the animal with the most visits (handle ties)
//   let mostVisitedAnimal;
//   let maxVisitCount = 0;
//   for (const [animalName, visitCount] of animalVisitCounts.entries()) {
//     if (visitCount > maxVisitCount) {
//       mostVisitedAnimal = animalName;
//       maxVisitCount = visitCount;
//     }
//      else if (visitCount === maxVisitCount) {
//       // In case of ties, append animal names to a string
//       mostVisitedAnimal = (mostVisitedAnimal || "") + (mostVisitedAnimal ? ", " : "") + animalName;
//     }
//   }

//   // Display the result
//   if (mostVisitedAnimal) {
//     console.log(visitor.name + "'s favorite animal(s) is/are:", mostVisitedAnimal);
//   } else {
//     console.log(visitor.name, "has no favorite animal (all animals visited the same number of times).");
//   }
// }

  



