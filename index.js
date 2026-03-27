const phrases = [
  "sleepy baby rabbit nibbling",
  "cute bear with salad",
  "tiny mouse lifting weights",
  "cozy soft carpet scene"
];

function getRandomPhrase(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}