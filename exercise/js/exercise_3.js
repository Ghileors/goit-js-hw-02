const findLongestWord = function (string) {
  string = string.split(' ');

  let longestWord = ' ';
  for (const word of string) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'

// How did I come to a decision

// console.log(longestWord);
// let numbers = [0, 21, 3, 4, 5];
// let biggerNumberd = 0;
// for (const number of numbers) {
//   if (biggerNumberd < number) {
//     biggerNumberd = number;
//     console.log(biggerNumberd);
//   }
// }

// let string = 'The quick brown fox jumped over the lazy dog';
// string = string.split(' ');

// let longestWord = ' ';

// for (const word of string) {
//   if (longestWord.length < word.length) {
//     longestWord = word;
//   }
// }
