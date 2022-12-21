function checkSpam(str) {
  const stringUpperCased = str.toUpperCase();
  let spamLibrary = '1xBet XXX'.toUpperCase().split(' ');
  
  let isSpam = false;
  let i = 0;

  while (!isSpam && i < spamLibrary.length) {
    isSpam = stringUpperCased.includes( spamLibrary[i] );
    i++;
  }
  
  return isSpam;
}
