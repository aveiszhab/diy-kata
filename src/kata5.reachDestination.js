const reachDestination = (distance, speed) => {
  return `I should be there in ${Math.ceil((distance / speed) * 2) / 2} hours.`;
};

module.exports = reachDestination;
