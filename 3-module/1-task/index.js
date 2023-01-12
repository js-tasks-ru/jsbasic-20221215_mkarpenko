function namify(users) {
  let names = [];

  for ( let object of users ) {
    names.push(object.name);
  }

  return names;
}
