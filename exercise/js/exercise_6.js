const sum = () => {
    const numbers = [];
    let total = 0;
    let input;

    while (input !== null) {
        input = prompt('Введите число:');

        const number = Number(input);

        if (number) {
            numbers.push(number);
        }
    }

    if (numbers.length === 0) {
        alert(`Вы не ввели ни одного числа.`);
    }

    if (numbers.length > 0) {
        total = numbers.reduce((acc, value) => acc + value, 0);
        alert(`Общая сумма чисел = ${total}`);
    }
};

sum();
