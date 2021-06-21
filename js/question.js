export default class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * Retourne true si la réponse est correct
     * @param {*} choice Choix fait par l'utilisateur
     * @returns {Boolean}
     */
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}