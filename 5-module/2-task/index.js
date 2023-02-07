function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', function() {
    const text = document.querySelector('#text');
    text.hidden = !text.hidden;
  });
}
