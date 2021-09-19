var quote = [
  "Few are those who see with their own eyes and feel with their own hearts",

  "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world",
  "Unthinking respect for authority is the greatest enemy of truth",
  "Try not to become a man of success, but rather try to become a man of value.",
  "Great spirits have always encountered violent opposition from mediocre minds."
]


var randomNumber = Math.floor(Math.random() * (quote.length));
document.getElementById('Display').innerHTML = quote[randomNumber];


document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGray() {
  document.getElementById('Display').style.color = 'gray';
  document.getElementById('Display').style.border = 'thick solid gray';

}

function switchWhite() {
  document.getElementById('Display').style.color = 'white';
  document.getElementById('Display').style.border = 'thick solid black';
}

function switchBlue() {
  document.getElementById('Display').style.color = 'blue';
  document.getElementById('Display').style.border = 'thick solid blue';
}

function switchYellow() {
  document.getElementById('Display').style.color = 'yellow';
  document.getElementById('Display').style.border = 'thick solid yellow';
}