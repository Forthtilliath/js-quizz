# Introduction

Mini projet fait à la suite de cette vidéo : [Créer un jeu en pur Javascript](https://www.youtube.com/watch?v=U50RvnAIHhQ). Le but était de fait un QCM en javascript.

# Intérêts du projet

Petit projet qui en soit ne devrait pas m'apprendre grand chose, donc c'est surtout par plaisir que je le fais.

# Améliorations apportées et difficultées rencontrées

## Segmentation du code

Le projet n'étant pas complexe à la base, j'ai pu constater que le code était entièrement dans un seul fichier. J'ai donc décidé de le développer avec segmentant le code pour plus de clarté.

Les premières difficultés sont survenus lié à la portée des variables. La variable qui était vraiment génante était la variable `quiz`. Afin de rendre son utilisation plus simple, j'ai pris la décision de stocker son contenu dans l'objet display.

Ainsi, je n'avais qu'à stocker au début du programme et y faire appel tout du long du projet !

## Utilisation d'une API externe

Lors du développement du projet, la méthode employée dans le projet était de stocker les questions directement dans le code.

Après quelques recherches, je suis tombé sur [Open Trivia Database](https://opentdb.com), un site générant des json contenant des questions.

Il était aussi possible de choisir différents paramètres tel que le nombre de questions, la catégorie de question (dans mon projet, j'ai choisit les films, mais il est très facilement possible de changer cela), la difficulté (j'ai choisit facile, rien de tel pour une bonne génération de dopamine !) et le type de question (QCM ou Binaire, ici seul QCM nous intéresse).

Afin que le programme ne continue pas à s'exécuter le temps du chargement des questions, il a été nécessaire de mettre en place une Promesse, ce qui m'a pas mal compliqué la tache car le code mis en place n'était pas prévu pour attendre une promesse de questions, mais un tableau.

Voici ce que cela donne au final :
![loadQuestions](/screenshots/loadQuestions.png)
Les questions envoyées par l'API n'étant pas dans le format que l'on utilisait, il a été nécessaire de les formater. De plus, les bonnes réponses étaient toujours à la même position, il fallait donc ne pas oublier à mélanger les réponses !

Et son utilisation :
![utilisation_loadQuestions](/screenshots/utilisation_loadQuestions.png)
Une fois les questions chargées, on crée un nouveau Quiz que l'on stock dans display.quiz, comme précisé plus haut, pas question de simplicité. Et enfin, on lance le quiz.

## Rendre simple le changement de source des questions

Comme les 2 systèmes, questions en local et questions chargées à travers une API externe, n'avaient pas la meme structure, il a donc fallu uniformiser tout cela.

Pour cela, j'ai imbriqué les questions locales dans une promesse :
![questionsData](/screenshots/questionsData.png)
Au passage, j'ai réutilisé ma fonction pour mélanger les questions et les réponses, histoire que ce ne soit pas trop simple non plus (RIP la dopamine).

Afin de rendre facile le changement de source (via le code), je charge donc les questions de la source souhaitée en fonction de la variable `local`.
![toggleSource](/screenshots/toggleSource.png)

# Améliorations possibles

### Choix de la source

Pour revenir à ce que je viens de dire, il serait possible de rajouter un formulaire pour choisir la source. Rien de bien compliqué en soit.

### Configuration des questions de l'API

L'utilisateur pourrait lui-même choisir la catégorie de question, la quantité ainsi que leur complexité directement par un autre formulaire. Rien de bien compliqué non plus.

### Tableau des scores

Beaucoup plus lourd à mettre en place, mais il serait aussi possible de faire des classements en fonction des catégories et du nombre de questions répondues.

Il faudrait mettre en place une base de données pour rendre cela possible.

# Screenshots du projet

![quiz](/screenshots/quiz.png)
![result](/screenshots/result.png)