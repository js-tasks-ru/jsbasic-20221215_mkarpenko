function showSalary(users, age) {
  let filtered = users
    .filter(user => user.age <= age)
    .map(user => `${user.name}, ${user.balance}`)
    .join('\n');
  return filtered;
}
