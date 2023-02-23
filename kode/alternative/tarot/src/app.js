const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const drawCard = document.getElementById('draw')

function toggleButton() {
  navList.classList.toggle('show')
}

function card(name, meaning, image) {
  this.name = name;
  this.meaning = meaning;
  this.image = image;
}

var deck = [
  new card('The Magician', 'You have whatever it takes to achieve your goals. You need to start trying and you will eventually succeed.', 'magician'),
  new card('The Emperor', 'Just like Uncle Ben said, with great power comes great responsibility.', 'emperor'),
  new card('Wheel of Fortune', 'Life is ever changing. You might be going through some changes right now (or soon) but it is all for the better.', 'wheelOfFortune'),
  new card('The Hanged Man', 'No matter how bad the situation you are in might seem, you should consider being calm and present.', 'hangedMan'),
  new card('Death', 'Endings can be bitter, sweet or bittersweet. This could possibly be the end of an era for you. Take all the lessons and good memories and move on.', 'death'),
  new card('The Devil', 'Do you feel held back by hedonistic habits? Make sure you are not.', 'devil'),
  new card('The Tower', 'Beware of chaos! This chaos could be sudden changes in your life. Although possibly devastating at first, this might actually lead to something good further down the line, depending on you deal with the chaos.', 'tower'),
  new card('The Moon', 'Your intuition might be warning you of certain things and you might be feeling particularly fearful based on your own anxieties. While not dismissing any concerns that might actually be legitimate, try to be grounded and remember that things are likely not as bad as you might think.', 'moon'),
  new card('The Sun', 'Cheer up and connect with your inner child. You possess so much joy that you can pass on. Do not let people around you miss out on that joy.', 'sun'),
  new card('Judgement', 'You might have come to a point where you have no choice but to meet yourself with all the things you are proud of and all your mistakes alike. Do not judge (haha) yourself too harshly. Accept all of yourself because this is but an opportunity to self-evaluate, improve and move on stronger than ever before.', 'judgement'),
  new card('The World', 'Completeness on the horizon! You might be completing a big chapter in your life or feeling complete in general. The world is your tarot card!', 'world')
];

function getRandom(n){
  var random = Math.floor(Math.random() * n);
  return random;
}

function shuffle(){
  var index = getRandom(11); //78
  var currentCard = deck[index];
  document.getElementById("title").innerHTML = 'Think of another question or a situation';
  document.getElementById("card-comment").innerHTML = '<img class="card-image" src = "src/images/' + currentCard.image + '.jpg"><h3>' + currentCard.name + '</h3><p>' + currentCard.meaning + '</p>' ;
}

hamburgerButton.addEventListener('click', toggleButton)
drawCard.addEventListener('click', shuffle)
