let input;
const numbers = [];
let total = 0;

input = prompt('Введите число:');

const culc = function(num) {
    numbers.push(input);
    total += input
    if (num === null) {
        alert(`Общая сумма чисел равна ${total}`)
    }

}