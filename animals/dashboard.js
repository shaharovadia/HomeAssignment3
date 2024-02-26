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

  


}
