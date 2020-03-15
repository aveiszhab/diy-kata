const humanCatDogYears = humanYears => {
  return [
    humanYears,
    (humanYears - 1 ? 16 : 11) + 4 * humanYears,
    (humanYears - 1 ? 14 : 10) + 5 * humanYears
  ];

  /* let dogYears;
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  } else {
    catYears = 15 + 9 + (humanYears - 2) * 4;
    dogYears = 15 + 9 + (humanYears - 2) * 5;
  }

  return [number, catYears, dogYears]; */
};

module.exports = humanCatDogYears;
