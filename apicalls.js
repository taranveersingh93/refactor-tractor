let newWords;

const setWords = () => {
  fetch('http://localhost:3001/api/v1/words')
    .then(response => response.json())
    .then(data => {
      newWords = data;
      winningWord = getRandomWord();
      console.log(winningWord)
    })
    .catch(error => {console.error(error)})
}

const postStats = () => {
  fetch('http://localhost:3001/api/v1/games', {
    method:"POST",
    body: JSON.stringify(lastGame),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .catch(err => console.errror(err))
}

const getStats = () => {
  fetch('http://localhost:3001/api/v1/games')
    .then(response => response.json())
    .then(data => {
      gamesPlayed = data;
      setStats();
      console.log(gamesPlayed);
    })
    .catch(error => console.error(error))
}