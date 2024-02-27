function showVisitedAnimals(visitor) {
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי ביקר בהן
  if (!visitor) {
    console.log("Visitor not found.");
    return false;
  }
    if (visitor.visitedAnimals.length === 0) {
      console.log(visitor.name, "has not visited any animals yet.");
      return false;}

      console.log("Visited animals for", visitor.name, ":");
  for (const animal of visitor.visitedAnimals) {
    console.log("- ", animal.name);
  }
}
function showFeededAnimals(visitor) {
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי האכיל אותן
  if (!visitor) {
    console.log("Visitor not found.");
    return false;
  }
    if (visitor.FeededAnimals.length === 0) {
      console.log(visitor.name, "has not feeded any animals yet.");
      return false;}

    console.log("feeded animals for", visitor.name, ":");
    for (const animal of visitor.FeededAnimals) {
      console.log("- ", animal.name);
    }


}
function showFavoriteAnimal(visitor) {
  //ממשו את הלוגיקה שמציגה את החיה שהאורח ביקר הכי הרבה פעמים אצלה
  if (!visitor) {
    console.log("Visitor not found.");
    return false;
  }

  if (visitor.visitedAnimals.length === 0) {
    console.log(visitor.name, "has not visited any animals yet.");
    return false;
  }
  const animalVisitCounts = new Map();

  // Count visits for each animal
  for (const animal of visitor.visitedAnimals) {
    const animalName = animal.name;
    const currentCount = animalVisitCounts.get(animalName) || 0;
    animalVisitCounts.set(animalName, currentCount + 1);
  }

  // Find the animal with the most visits (handle ties)
  let mostVisitedAnimal;
  let maxVisitCount = 0;
  for (const [animalName, visitCount] of animalVisitCounts.entries()) {
    if (visitCount > maxVisitCount) {
      mostVisitedAnimal = animalName;
      maxVisitCount = visitCount;
    }
     else if (visitCount === maxVisitCount) {
      // In case of ties, append animal names to a string
      mostVisitedAnimal = (mostVisitedAnimal || "") + (mostVisitedAnimal ? ", " : "") + animalName;
    }
  }

  // Display the result
  if (mostVisitedAnimal) {
    console.log(visitor.name + "'s favorite animal(s) is/are:", mostVisitedAnimal);
  } else {
    console.log(visitor.name, "has no favorite animal (all animals visited the same number of times).");
  }
}

  



