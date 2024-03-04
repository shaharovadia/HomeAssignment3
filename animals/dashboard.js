document.addEventListener("DOMContentLoaded",() => {
  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  showFavoriteAnimal(currentVisitor);
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
  const headline = document.createElement("h1");
  headline.textContent = 'Fed animals:' ;
  animalsContainer.appendChild(headline);

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
  const animalsContainer = document.querySelector("#visited-animals");
  animalsContainer.innerHTML = "";
  const headline = document.createElement("h1");
      headline.textContent = 'Visited animals:' ;
      animalsContainer.appendChild(headline);
  for (const animalName in visitedAnimals) {
    const animalData = visitedAnimals[animalName]; // Get the animal's data

    const card = document.createElement("div");
    card.classList.add("animal-card");

    const image = document.createElement("img");
    image.src = `images/${animalName}.jpg`;
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = animalName;
    card.appendChild(name);

    animalsContainer.appendChild(card);
  }
  };


 function showFavoriteAnimal(currentVisitor) {
  const visitedAnimals = currentVisitor.visitedAnimals;
    const favoriteAnimal = getFavoriteAnimal(visitedAnimals);

    if (favoriteAnimal) {
      const favContainer = document.querySelector("#favorite-animal");
      favContainer.innerHTML = "";
      const card = document.createElement("div");
      card.classList.add("animal-card");

      const headline = document.createElement("h1");
      headline.textContent = 'Favorite animal is:' ;
      card.appendChild(headline);

      const image = document.createElement("img");
      image.src = `images/${favoriteAnimal}.jpg`
      card.appendChild(image);

      const name = document.createElement("h3");
      name.textContent = favoriteAnimal;
      card.appendChild(name);

      favContainer.appendChild(card);
    } 

    else 
    {
      document.getElementById("favorite-animal").textContent = "No animals visited yet.";
    }
    
  }

 function getFavoriteAnimal(visitedAnimals) {
  let favoriteAnimal = null;
  let maxVisits = 0;
  for (const animalName in visitedAnimals) {
    const visitCount = visitedAnimals[animalName];

    if (visitCount > maxVisits) {
      favoriteAnimal = animalName;
      maxVisits = visitCount;
    }
  }
  return favoriteAnimal;
}
  



