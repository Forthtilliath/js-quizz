export default class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }

    /**
     * Retourne la question en cours
     * @returns {String}
     */
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    /**
     * Ajoute 1 point au score si la réponse est bonne et passe à la question suivante
     * @param {*} answer 
     */
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    /**
     * Retourn true si le quizz est terminé
     * @returns {Boolean}
     */
    isFinished() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}
