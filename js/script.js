import display from './display.js';
import Quiz from './quiz.js';
import loadQuestions from './datas/questionsData.js';

loadQuestions()
    .then((questions) => (display.quiz = new Quiz(questions)))
    .then(() => display.quizApp());