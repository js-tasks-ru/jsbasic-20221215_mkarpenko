function sumSalary(salaries) {
  let sum = 0;

  for (let k in salaries) {
    (isFinite(salaries[k])) ? sum += salaries[k] : sum;
  }

  return sum;
}
