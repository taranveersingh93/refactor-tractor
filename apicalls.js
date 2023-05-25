let newWords;

const setWords = () => {
  fetch('http://localhost:3001/api/v1/words')
    .then(response => response.json())
    .then(data => {
      newWords = data;
      winningWord = getRandomWord();
      console.log(newWords);
      console.log(winningWord)
    })
    .catch(error => {console.error(error)})
}