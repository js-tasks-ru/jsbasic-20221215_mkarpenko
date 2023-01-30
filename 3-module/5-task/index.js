function getMinMax(str) {
  let array = str
    .split(' ')
    .filter(string => Number.parseFloat(string))
    .map(number => Number(number))

  const min = Math.min(...array);
  const max = Math.max(...array);

  return { min, max};
}
