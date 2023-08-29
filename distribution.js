const diamonds = [2, 3, 1, 5, 5, 4];

function distributeDiamonds(diamonds) {
  const numPeople = 4;
  const distribution = Array.from({ length: numPeople }, () => []);
  const totalDiamonds = diamonds.length;

  diamonds.sort((a, b) => a - b);

  const diamondsPerPerson = Math.floor(totalDiamonds / numPeople);
  const extraDiamonds = totalDiamonds % numPeople;

  let diamondIndex = 0;

  for (let personIndex = 0; personIndex < numPeople; personIndex++) {
    const diamondsForThisPerson =
      diamondsPerPerson + (personIndex < extraDiamonds ? 1 : 0);

    for (let i = 0; i < diamondsForThisPerson; i++) {
      if (diamondIndex < totalDiamonds) {
        distribution[personIndex].push(diamonds[diamondIndex]);
        diamondIndex++;
      }
    }
  }

  distribution.forEach((person, index) => {
    console.log(`Person ${index + 1}: ${person.join(", ")}`);
  });
}

distributeDiamonds(diamonds);
