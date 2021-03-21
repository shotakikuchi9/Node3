const port = 3000;
const express = require('express');
const controller = require('./controllers/controller');
const app = express();

app.set('view engine', 'ejs');

app.get('/', controller.showQuizPage);

app.get('/api/quizzes', controller.fetchQuiz);

app.use(express.static('public'));

app.listen(port);