let input;
const numbers = [];
let total = 0;

input = prompt('Введите число:');

if (input === null) {
  console.log('Cancel');
} else {
  prompt('Введите число:');
  numbers.push(input);
  console.log(numbers);
}
