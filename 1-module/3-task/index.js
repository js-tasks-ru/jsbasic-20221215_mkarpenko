function ucFirst(str) {
  if (str) {
    return str.replace( str.at(0), str.at(0).toUpperCase() );
  } else {
    return str;
  } 
}
