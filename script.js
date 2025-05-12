function highlight() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach(word => {
    word.style.color = 'rgb(0, 128, 0)'; // Green
  });
}

function return_normal() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach(word => {
    word.style.color = 'rgb(0, 0, 0)'; // Black
  });
}
