const numberToReversedDigits = number => {
  return number
    .toString()
    .split("")
    .reverse()
    .map(a => Number(a));
};

module.exports = numberToReversedDigits;
