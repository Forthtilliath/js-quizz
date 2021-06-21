import display from './display.js';
import Quiz from './quiz.js';
import { questionsData, loadQuestions } from './datas/questionsData.js';

/**
 * Défini si on charge les questions enregistrées localement ou les questions de
 * l'API externe.
 */
const local = false;

/**
 * Les questions sont soit récupérées localement à l'aide de questionsData, soit
 * récupéré via une API externe avec loadQuestions.
 */
const questions = local ? questionsData : loadQuestions;

questions()
    .then((questions) => (display.quiz = new Quiz(questions)))
    .then(() => display.quizApp());