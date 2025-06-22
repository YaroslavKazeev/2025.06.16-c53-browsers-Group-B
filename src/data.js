/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  catWalkStarted: false,
  currentQuestionIndex: 0,
  score: 0,
  questions: [
    {
      text: 'Which city is considered the most beautiful in the Netherlands?',
      image: './public/images/0.jpg',
      answers: {
        a: 'Rotterdam',
        b: 'Amsterdam',
        c: 'Utrecht',
        d: 'The Hague',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'In which city can you find the famous "dancing houses"?',
      image: './public/images/1.jpg',
      answers: {
        a: 'Haarlem',
        b: 'Amsterdam',
        c: 'Eindhoven',
        d: 'The Groningen',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'What is the most popular traditional Dutch dish?',
      image: './public/images/2.jpg',
      answers: {
        a: 'Herring with onions',
        b: 'Fries with mayonnaise',
        c: 'Stroopwafel (syrup waffles)',
        d: 'Bitterballen (fried meatballs)',
      },
      correct: 'c',
      selected: null,
    },
    {
      text:
        'Which city is called the "city of the future" because of its modern architecture?',
      image: './public/images/3.jpg',
      answers: {
        a: 'Maastricht',
        b: 'Rotterdam',
        c: 'Leiden',
        d: 'Delft',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'What is the most popular Dutch supermarket chain?',
      image: './public/images/4.jpg',
      answers: {
        a: 'Jumbo',
        b: 'Albert Heijn',
        c: 'Lidl',
        d: 'Dirk',
      },
      correct: 'b',
      selected: null,
    },
    {
      text:
        'Which city is the political capital of the Netherlands, where the government is located?',
      image: './public/images/5.jpg',
      answers: {
        a: 'Amsterdam',
        b: 'Rotterdam',
        c: 'Utrecht',
        d: 'The Hague',
      },
      correct: 'd',
      selected: null,
    },
    {
      text: 'What is the most popular means of transport among locals?',
      image: './public/images/6.jpg',
      answers: {
        a: 'Bicycles',
        b: 'Buses',
        c: 'Electric scooters',
        d: 'Cars',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'What is the name of the famous tulip park that opens in spring?',
      image: './public/images/7.jpg',
      answers: {
        a: 'Keukenhof',
        b: 'Vondelpark',
        c: 'Hoge Veluwe',
        d: 'Giethoorn',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'Which of these cheeses are originally from the Netherlands?',
      image: './public/images/8.jpg',
      answers: {
        a: 'Cheddar',
        b: 'Limburger',
        c: 'Gouda',
        d: 'Parmesan',
      },
      correct: 'c',
      selected: null,
    },
    {
      text:
        'Which Dutch city is famous for its canals and is often called "Little Amsterdam"?',
      image: './public/images/9.jpg',
      answers: {
        a: 'Utrecht',
        b: 'Haarlem',
        c: 'Leiden',
        d: 'Maastricht',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'Which Dutch airport is one of the largest in Europe?',
      image: './public/images/10.jpg',
      answers: {
        a: 'Schiphol',
        b: 'Eindhoven',
        c: 'Rotterdam',
        d: 'Maastricht',
      },
      correct: 'a',
      selected: null,
    },
    {
      text:
        'Which holiday is celebrated in the Netherlands, when everyone wears orange?',
      image: './public/images/11.jpg',
      answers: {
        a: 'Independence Day',
        b: 'Amsterdam Day',
        c: 'Tulip Day',
        d: "King's Day",
      },
      correct: 'd',
      selected: null,
    },
  ],
};
const STORAGE_KEY = 'quiz-progress';

export const saveQuizProgress = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(quizData));
};

export const loadQuizProgress = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    Object.assign(quizData, JSON.parse(saved));
  }
};

export const clearQuizProgress = () => {
  localStorage.removeItem(STORAGE_KEY); // Clear saved progress
};
