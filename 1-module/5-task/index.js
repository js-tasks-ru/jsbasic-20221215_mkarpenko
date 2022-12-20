function truncate(str, maxlength) {
  const postfix = '…';

  if (str.length > maxlength - 1) {
    return str.slice(0, maxlength - 1) + postfix;
  } else {
    return str;
  }
}
