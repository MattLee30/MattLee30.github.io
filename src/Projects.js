import linkedInImg from './Images/LinkedIn.jpeg';

const projects = [
    {
        label: 'Minesweeper',
        bulletPoints: [
            'Designed an algorithm that navigates a maze using Minesweeper rules.',
            'Built in Python.',
            'Used Resolution Inference and stored relevant clauses in a local database.',
        ],
        image: linkedInImg,
    },
    {
        label: 'Toxicity Filter',
        bulletPoints: [
            'Analyzes comment text using Naive Bayes Classifiers and Logistic Regression.',
            'Developed by a 3-person team; used Tetrad and Python.',
        ],
        image: linkedInImg,
    },
    {
        label: 'Wordle Solver',
        bulletPoints: [
            'Modified Wordle game that determines hidden words of 2-14 letters.',
            'Built in Java.',
            'Computes edit distance and makes educated guesses (96% accuracy in under 10 attempts).',
        ],
        image: linkedInImg,
    },
    {
        label: 'Rhythm Monkey Heaven',
        bulletPoints: [
            'Recreated a Rhythm Heaven Fever game using JavaScript and Adobe Animate.',
            'Includes scoring, dynamic sprite animations, and music synchronization.',
        ],
        image: linkedInImg,
    },
    {
        label: 'MonkeyBot',
        bulletPoints: [
            'Discord bot that returns a monkey image from PlaceMonkeys API.',
            'Includes a fact sourced from ChatGPT and stores previous facts in Replit Database.',
        ],
        image: linkedInImg,
    },
];

export default projects;