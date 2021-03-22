const api_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';
const fetch = require('node-fetch');

const shuffle = (arr) => {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

class QuizFetcher {
  static fetchQuizData(req, res) {
    fetch(api_URL)
    .then(response => response.json())
    .then((json) => {
      for (let i = 0; i < 10; i++) {
        const answers = [json.results[i].correct_answer, ...json.results[i].incorrect_answers]
        const shuffledAnswers = shuffle(answers)
        json.results[i].shuffledAnswers = shuffledAnswers
        console.log(json.results);
      }
      res.json(json);
    })
  }
}
module.exports = QuizFetcher