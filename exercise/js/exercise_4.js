const formatString = function (string) {
  if (string.length < 40) {
    return string;
  }
  let normalizeString;
  if (string.length > 40) {
    normalizeString = string.slice(0, 39);
    // let arrFromString = normalizeString.split(' ');
    // arrFromString.push('...');
    // normalizeString = arrFromString.join(' ');
  }
  return `${normalizeString}...`;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
