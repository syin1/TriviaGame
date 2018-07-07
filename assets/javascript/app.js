$(document).ready(function() {
  var intervalId;
  var timer = 15;
  var questionindex = 0;

  var correctno = 0;
  var wrongno = 0;
  var unansweredno = 0;

  var questions = [
    {
      question: 'What year did Albert Einstein die?',
      option1: '1954',
      option2: '1949',
      option3: '1960',
      option4: '1955',
      answer: '1955',
      image: 'assets/images/q1.gif'
    },
    {
      question: 'Which is the largest planet in the solar system?',
      option1: 'Jupiter',
      option2: 'Neptune',
      option3: 'Earth',
      option4: 'Mars',
      answer: 'Jupiter',
      image: 'assets/images/q2.gif'
    },
    {
      question: 'What colour is Cerulean?',
      option1: 'Red',
      option2: 'Blue',
      option3: 'Yellow',
      option4: 'Green',
      answer: 'Blue',
      image: 'assets/images/q3.gif'
    },
    {
      question: 'What are a group of Dolphins called?',
      option1: 'School',
      option2: 'Herd',
      option3: 'Pod',
      option4: 'Pool',
      answer: 'Pod',
      image: 'assets/images/q4.gif'
    },
    {
      question: 'Who invented Penicillin?',
      option1: 'Alexander Fleming',
      option2: 'Thomas Edison',
      option3: 'Marie Curie',
      option4: 'George Orwell',
      answer: 'Alexander Fleming',
      image: 'assets/images/q5.gif'
    },
    {
      question: 'What date was President John F Kennedy assassinated?',
      option1: 'November 22 1962',
      option2: 'November 22 1963',
      option3: 'October 29 1964',
      option4: 'November 24 1962',
      answer: 'November 22 1963',
      image: 'assets/images/q6.gif'
    },
    {
      question: 'How many men have walked on the moon?',
      option1: '10',
      option2: '5',
      option3: '12',
      option4: '9',
      answer: '12',
      image: 'assets/images/q7.gif'
    },
    (question8 = {
      question: 'Who has won the most Academy Awards?',
      option1: 'James Cameron',
      option2: 'Walt Disney',
      option3: 'Katherine Hepburn',
      option4: 'Steven Spielberg',
      answer: 'Walt Disney',
      image: 'assets/images/q8.gif'
    }),
    {
      question: 'What is the currency of Brazil?',
      option1: 'Dollar',
      option2: 'The Bhat',
      option3: 'Real',
      option4: 'Krona',
      answer: 'Real',
      image: 'assets/images/q9.gif'
    }
  ];

  function displayQuestion() {
    $('#question').html('<h3>' + questions[questionindex].question + '</h3>');

    $('#option1').html('<p>' + questions[questionindex].option1 + '</p>');
    $('#option2').html('<p>' + questions[questionindex].option2 + '</p>');
    $('#option3').html('<p>' + questions[questionindex].option3 + '</p>');
    $('#option4').html('<p>' + questions[questionindex].option4 + '</p>');

    $('#imageresult').attr('src', '');
    $('#imageresult').attr('alt', '');
  }

  function nextQuestion() {
    $('#correctanswer').text('');
    questionindex++;
    displayQuestion();
    displayTimer();
    intervalId = setInterval(displayTimer, 1000);
  }

  function outOfTime() {
    $('#question').html('<h3>Out of Time!</h3>');
    $('#correctanswer').html(
      '<p>The correct answer was: ' + questions[questionindex].answer + '</p>'
    );
    $('#option1').text('');
    $('#option2').text('');
    $('#option3').text('');
    $('#option4').text('');
    $('#imageresult').attr('src', questions[questionindex].image);
    $('#imageresult').attr('alt', questions[questionindex].answer + ' gif');
  }

  function displayCorrectAnswer() {
    $('#question').html('<h3>Correct!</h3>');
    $('#option1').text('');
    $('#option2').text('');
    $('#option3').text('');
    $('#option4').text('');
    $('#imageresult').attr('src', questions[questionindex].image);
    $('#imageresult').attr('alt', questions[questionindex].answer + ' gif');
  }

  function displayWrongAnswer() {
    $('#question').html('<h3>Nope!</h3>');
    $('#correctanswer').html(
      '<p>The correct answer was: ' + questions[questionindex].answer + '</p>'
    );
    $('#option1').text('');
    $('#option2').text('');
    $('#option3').text('');
    $('#option4').text('');
    $('#imageresult').attr('src', questions[questionindex].image);
    $('#imageresult').attr('alt', questions[questionindex].answer + ' gif');
  }

  function displayTimer() {
    $('#timeremaining').html('<h4>Time Remaining: ' + timer + ' Seconds</h4>');
    if (timer === 0) {
      clearInterval(intervalId);
      timer = 15;
      unansweredno++;
      outOfTime();
      countDown();
    } else {
      timer--;
    }
  }

  function summaryStats() {
    $('#question').html("<h3>All done, here's how you did!</h3>");
    $('#timeremaining').text('');
    $('#correctanswer').text('');
    $('#option1').text('');
    $('#option2').text('');
    $('#option3').text('');
    $('#option4').text('');
    $('#imageresult').attr('src', '');
    $('#imageresult').attr('alt', '');

    $('#correctno').text('Correct Answers: ' + correctno);
    $('#wrongno').text('Incorrect Answers: ' + wrongno);
    $('#unansweredno').text('Unanswered: ' + unansweredno);

    $('.startover').show();
  }

  function countDown() {
    if (questionindex === questions.length - 1) {
      summaryStats();
    } else {
      setTimeout(nextQuestion, 3000);
    }
  }

  $('.start').on('click', function() {
    displayTimer();
    displayQuestion();

    intervalId = setInterval(displayTimer, 1000);
  });

  $('#option1').on('click', function() {
    clearInterval(intervalId);
    timer = 15;

    if ($(this).text() === questions[questionindex].answer) {
      displayCorrectAnswer();
      correctno++;
    } else {
      displayWrongAnswer();
      wrongno++;
    }
    countDown();
  });

  $('#option2').on('click', function() {
    clearInterval(intervalId);
    timer = 15;

    if ($(this).text() === questions[questionindex].answer) {
      displayCorrectAnswer();
      correctno++;
    } else {
      displayWrongAnswer();
      wrongno++;
    }
    countDown();
  });

  $('#option3').on('click', function() {
    clearInterval(intervalId);
    timer = 15;

    if ($(this).text() === questions[questionindex].answer) {
      displayCorrectAnswer();
      correctno++;
    } else {
      displayWrongAnswer();
      wrongno++;
    }
    countDown();
  });

  $('#option4').on('click', function() {
    clearInterval(intervalId);
    timer = 15;

    if ($(this).text() === questions[questionindex].answer) {
      displayCorrectAnswer();
      correctno++;
    } else {
      displayWrongAnswer();
      wrongno++;
    }
    countDown();
  });

  $('.startover').on('click', function() {
    $('.startover').hide();
    $('#correctno').text('');
    $('#wrongno').text('');
    $('#unansweredno').text('');

    questionindex = 0;
    correctno = 0;
    wrongno = 0;
    unansweredno = 0;

    displayTimer();
    displayQuestion();

    intervalId = setInterval(displayTimer, 1000);
  });
});
