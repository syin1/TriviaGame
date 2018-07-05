$(document).ready(function() {
  var intervalId;
  var timer = 30;

  var questions = [
    {
      question: 'What year did Albert Einstein die?',
      option1: '1954',
      option2: '1949',
      option3: '1960',
      option4: '1955',
      answer: '1955'
    },
    {
      question: 'Which is the largest planet in the solar system?',
      option1: 'Jupiter',
      option2: 'Neptune',
      option3: 'Earth',
      option4: 'Mars',
      answer: 'Jupiter'
    },
    {
      question: 'What colour is Cerulean?',
      option1: 'Red',
      option2: 'Blue',
      option3: 'Yellow',
      option4: 'Green',
      answer: 'Blue'
    },
    {
      question: 'What are a group of Dolphins called?',
      option1: 'School',
      option2: 'Herd',
      option3: 'Pod',
      option4: 'Pool',
      answer: 'Pod'
    },
    {
      question: 'Who invented Penicillin?',
      option1: 'Alexandra Fleming',
      option2: 'Thomas Edison',
      option3: 'Marie Curie',
      option4: 'George Orwell',
      answer: 'Alexandra Fleming'
    },
    {
      question: 'What date was President John F Kennedy assassinated?',
      option1: 'November 22 1962',
      option2: 'November 22 1963',
      option3: 'October 29 1964',
      option4: 'November 24 1962',
      answer: 'November 22 1963'
    },
    {
      question: 'How many men have walked on the moon?',
      option1: '10',
      option2: '5',
      option3: '12',
      option4: '9',
      answer: '12'
    },
    (question8 = {
      question: 'Who has won the most Academy Awards?',
      option1: 'James Cameron',
      option2: 'Walt Disney',
      option3: 'Katherine Hepburn',
      option4: 'Steven Spielberg',
      answer: 'Walt Disney'
    }),
    {
      question: 'What is the currency of Brazil?',
      option1: 'Dollar',
      option2: 'The Bhat',
      option3: 'Real',
      option4: 'Krona',
      answer: 'Real'
    }
  ];

  function displayQuestion(i) {
    $('#question').html('<h3>' + questions[i].question + '</h3>');

    $('#option1').html('<p>' + questions[i].option1 + '</p>');
    $('#option2').html('<p>' + questions[i].option2 + '</p>');
    $('#option3').html('<p>' + questions[i].option3 + '</p>');
    $('#option4').html('<p>' + questions[i].option4 + '</p>');
  }

  function displayTimer() {
    $('#timeremaining').html('<h4>Time Remaining: ' + timer + ' Seconds</h4>');
    timer--;
  }

  $('.btn-primary').on('click', function() {
    displayTimer();
    displayQuestion(5);
    intervalId = setInterval(displayTimer, 1000);
  });
});
