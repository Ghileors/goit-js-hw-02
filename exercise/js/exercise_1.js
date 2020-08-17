function logItems(array) {
    return array.forEach((num, idx) => console.log(`${idx + 1} - ${num}`));
}

/*
 * Вызовы функции для проверки работоспособности реализации.
 */

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
