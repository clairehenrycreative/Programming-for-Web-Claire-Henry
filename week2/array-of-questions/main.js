const animalQuiz = 
[
    {
        question: 'What is the tallest animal in the world?', answer: 'The Giraffe'
    },
    {
        question: 'What is the only mammal that can fly?', answer: 'The Bat'
    },
    {
        question: 'Which is the only land animal that cannot jump?' , answer: 'The Elephant'
    },
    {
        question: 'Which kind of bird can fly backwards?', answer: 'The Hummingbird'
    },
    {
        question: 'How many legs does a lobster have?', answer: 'Ten'
    },
];

console.log(animalQuiz);

const randomQuizQuestion = Math.round(Math.random() * (animalQuiz.length - 1));

const prompt = window.prompt(animalQuiz[randomQuizQuestion].question);

window.alert ('You answered: ' + prompt + 'The correct answer is ' + animalQuiz[randomQuizQuestion].answer);
