const $ = (selector) => document.querySelector(selector);

import Quiz from './quiz.js';
import questions from './datas/questionsData.js';

const display = {
    quiz: new Quiz(questions),
    /**
     * Met à jour le contenu HTML d'un élément à l'aide de son sélecteur
     * @param {String} id Sélecteur de l'élément
     * @param {String} text Nouveau contenu
     */
    elementShown: function (id, text) {
        $(id).innerHTML = text;
    },
    /**
     * Gère le déroulement du quizz
     */
    quizApp: function () {
        if (this.quiz.isFinished()) {
            this.endQuiz();
        } else {
            this.question();
            this.choices();
            this.progress();
        }
    },
    /**
     * Affiche un message pour signaler la fin du quizz
     */
    endQuiz: function () {
        let endQuizHTML = `
            <h1>Quiz terminé !</h1>
            <h3>Votre score est de : ${this.quiz.score} / ${this.quiz.questions.length}</h3>
        `;
        this.elementShown('#quiz', endQuizHTML);
    },
    /**
     * Affiche la question actuelle du quizz
     */
    question: function () {
        this.elementShown('#question', this.quiz.getCurrentQuestion().text + ' ?');
    },
    /**
     * Déclare un écouter qui s'active lorsque l'utilisateur sélectionne une réponse
     * @param {String} id Sélecteur de la réponse
     * @param {String} guess Choix fait par l'utilisateur
     */
    guessHandler: function(id, guess) {
        $(id).onclick = () => {
            this.quiz.guess(guess);
            this.quizApp();
        };
    },
    /**
     * Affiche les différentes réponses possibles (et créer un écouteur pour écouter la réponse)
     */
    choices: function () {
        let choices = this.quiz.getCurrentQuestion().choices;
        for (let [key, choice] of choices.entries()) {
            this.elementShown('#choice' + key, choice);
            this.guessHandler('#guess' + key, choice);
        }
    },
    /**
     * Affiche un message pour indiquer la progression du quizz
     */
    progress: function () {
        let currentQuestionNumber = this.quiz.currentQuestionIndex + 1;
        this.elementShown('#progress', `Question ${currentQuestionNumber} sur ${this.quiz.questions.length}`);
    },
};

export default display;
