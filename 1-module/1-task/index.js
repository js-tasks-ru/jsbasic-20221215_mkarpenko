function factorial(n) {
  let result = 1,
      counter = 1;

  if (n == 0 || n == 1) {
    return result;
  }
  
  while(counter <= n) {
    result *= counter;
    counter++;
  }
  
  return result;
}
