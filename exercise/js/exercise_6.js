let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число:');
  numbers.push(input);

  if (input === null) {
    for (const number of numbers) {
      total += Number(number);
    }
    console.log(`Общая сумма чисел = ${total}`);
    break;
  }
}
