function cakes(recipe, available) {
  let count = 0;
  while (true) {
    for (let ingredient in recipe) {
      if (!available[ingredient]) {
        return count;
      }
      if (available[ingredient] - recipe[ingredient] < 0) {
        return count;
      } else {
        available[ingredient] -= recipe[ingredient];
      }
    }
    count++;
  }
}
