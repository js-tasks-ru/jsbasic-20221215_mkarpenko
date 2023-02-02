function makeFriendsList(friends) {
  const ul = document.createElement('UL');
  for (let object of friends) {
    const li = document.createElement('LI');
    li.textContent = `${object.firstName} ${object.lastName}`;
    ul.appendChild(li);
  }
  return ul;
}
