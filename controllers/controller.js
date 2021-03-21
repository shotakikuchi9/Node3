const { response, json } = require('express');

module.exports = {
  showQuizPage: function (req, res) {
    res.render('quiz')
  },
  fetchQuiz: function (req, res) {
    const api_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const fetch = require('node-fetch');
    class QuizFetcher {
      static fetchQuizData() {
        fetch(api_URL)
        .then(response => response.json())
        .then((json) => {
          res.json(json);
          console.log(json);
        })
      }
    }
    QuizFetcher.fetchQuizData();
  }
}