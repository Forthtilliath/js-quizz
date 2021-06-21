const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
import Quiz from './quiz.js';

const display = {
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
     * @param {Quiz} quiz
     */
    quizApp: function (quiz) {
        if (quiz.isFinished()) {
            this.endQuiz();
        } else {
            this.question(quiz);
            this.choices(quiz);
            this.progress(quiz);
        }
    },
    /**
     * Affiche un message pour signaler la fin du quizz
     */
    endQuiz: function () {
        let endQuizHTML = `
            <h1>Quiz terminé !</h1>
            <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
        `;
        this.elementShown('#question', endQuizHTML);
    },
    /**
     * Affiche la question actuelle du quizz
     * @param {Quiz} quiz
     */
    question: function (quiz) {
        this.elementShown('#question', quiz.getCurrentQuestion().text + ' ?');
    },
    guessHandler : (id, guess, quiz) => {
        $(id).onclick = (quiz)=> {
          quiz.guess(guess);
          this.quizApp(quiz);
        }
      },
    /**
     *
     * @param {Quiz} quiz
     */
    choices: function (quiz) {
        let choices = quiz.getCurrentQuestion().choices;
        // const guessHandler = (id, guess) => {
        //     let self = this;
        //     $(id).addEventListener('click', function (e) {
        //         console.log(e.target);
        //         quiz.guess(guess);
        //         self.quizApp(quiz);
        //         this.removeEventListener('click');
        //     });
        // };
        // const guessHandler = (id, guess) => {
        //     let self = this;
        //     $(id).addEventListener('click', function (e) {
        //         console.log(e.target);
        //         quiz.guess(guess);
        //         self.quizApp(quiz);
        //         this.removeEventListener('click');
        //     });
        // };
        // const guessHandler = (id, guess, quiz) => {
        //     $(id).onclick = (quiz)=> {
        //       quiz.guess(guess);
        //       this.quizApp(quiz);
        //     }
        //   }
        for (let [key, choice] of choices.entries()) {
            this.elementShown('#choice' + key, choice);
            this.guessHandler('#guess' + key, choice, quiz);
        }
    },
    progress: function (quiz) {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown('#progress', `Question ${currentQuestionNumber} sur ${quiz.questions.length}`);
    },
};

export default display;
