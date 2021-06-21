// import Question from './question.js';
import Quiz from './quiz.js';
import display from './display.js';
import questions from './datas/questionsData.js';

// let quiz = new Quiz(questions);
// display.quizApp(quiz);

display.quiz = new Quiz(questions);
display.quizApp();