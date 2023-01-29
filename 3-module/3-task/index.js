function camelize(str) {
  const words = str.split('-');
  const result = [ words[0] ];
  
  words.map(function(word, index) {
    if(index) {
      word = word.replace(word[0], word[0].toUpperCase());
      result.push(word);
    }
  })

  return result.join('');
}
