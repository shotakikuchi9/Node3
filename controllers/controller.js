const QuizFetcher = require('../models/quiz')
module.exports = {
  showQuizPage: function (req, res) {
    res.render('quiz')
  },
  fetchQuiz: function (req, res) {
    QuizFetcher.fetchQuizData(req, res);
  }
}