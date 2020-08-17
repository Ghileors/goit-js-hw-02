const findLongestWord = function (string) {
    string = string.split(' ');
    let longestWord = ' ';

    for (const word of string) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
