import Question from '../question.js';

/**
 * Retourne les questions enregistrées localement. Toutefois, l'ordre des questions
 * est aléatoire ainsi que celui des réponses, afin de complexifier, très légèrement.
 * @returns Liste des questions enregistrées localement
 */
const questionsData = () => new Promise((resolve) => resolve(shuffle([
    new Question(
        "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
        shuffle(['indexOf()', 'map()', 'filter()', 'reduce()']),
        'filter()',
    ),
    new Question(
        'Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau',
        shuffle(['isNaN()', 'includes()', 'findIndex()', 'isOdd()']),
        'includes()',
    ),
    new Question(
        'Quelle méthode transforme du JSON en un objet Javascript ?',
        shuffle(['JSON.parse()', 'JSON.stringify()', 'JSON.object()', 'JSON.toJS']),
        'JSON.parse()',
    ),
    new Question(
        "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
        shuffle(['Math.ceil()', 'Math.floor()', 'Math.round()', 'Math.random()']),
        'Math.round()',
    ),
])));

/**
 * Mélange un tableau. Dans notre cas, par l'api nous avons la bonne réponse 
 * séparée des mauvais, il est donc nécessaire de mélanger les réponses afin que 
 * la bonne réponse ne soit pas toujours à la même place !
 * @param {any} array 
 * @returns 
 */
const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

// https://opentdb.com/api_config.php
// prettier-ignore
const apiSettings = {
    amount    : 20,           // 50 max
    category  : 11,           // 9 à 32
    difficulty: 'easy',       // easy, medium or hard
    type      : 'multiple',   // multiple or boolean
};

const loadQuestions = () => {
    let link = `https://opentdb.com/api.php?amount=${apiSettings.amount}`;
    link += apiSettings.category == 'any' ? '' : `&category=${apiSettings.category}`;
    link += apiSettings.difficulty == 'any' ? '' : `&difficulty=${apiSettings.difficulty}`;
    link += apiSettings.type == 'any' ? '' : `&type=${apiSettings.type}`;

    return fetch(link)
        .then((response) => response.json())
        .then((questions) => {
            let tabQuestions = [];
            questions.results.map((question) => {
                tabQuestions.push(
                    new Question(
                        question.question,
                        shuffle([...question.incorrect_answers, question.correct_answer]),
                        question.correct_answer,
                    ),
                );
            });
            return tabQuestions;
        });
};

export { questionsData, loadQuestions };
