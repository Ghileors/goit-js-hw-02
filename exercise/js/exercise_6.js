const numbers = [];
let total = 0;
let input;

while (input !== null) {
    input = prompt('Введите число:');

    const number = Number(input);

    if (number) {
        numbers.push(number);
        total += number;
    }
}

if (numbers.length > 0) {
    console.log(`Общая сумма чисел = ${total}`, numbers);
}
