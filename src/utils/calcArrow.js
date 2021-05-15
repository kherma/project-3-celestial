const calcBasePercentage = (distance) => {
  const min = 30;
  const max = 3000;
  if (distance === 30) return 1;
  return Math.ceil(((distance - min) * 100) / (max - min));
};

const calcPercentagesToValue = (min, max, distance) => {
  return Math.floor((calcBasePercentage(distance) * (max - min)) / 100 + min);
};

export const clacArrowWidth = (distance) => {
  return calcPercentagesToValue(10, 50, distance);
};
export const calcArrowPosition = (distance) => {
  return calcPercentagesToValue(30, 50, distance);
};
export const calcPlanetPosition = (distance) => {
  return calcPercentagesToValue(40, 80, distance);
};
