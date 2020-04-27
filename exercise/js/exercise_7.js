const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   if (login.length < 4 || login.length > 16) {
//       console.log('Ошибка! Логин должен быть от 4 до 16 символов');
//   }
//   return false;
// };

const isLoginUnique = function (allLogins, login) {
  for (const unique of allLogins) {
    if (login === unique) {
      return false;
    }
  }
  return true;
};

const addLogin = function (allLogins, login) {
  if (isLoginUnique === false) {
    return 'Такой логин уже используется!';
  } else {
    allLogins.push(login);
    return 'Логин успешно добавлен!';
  }
};

// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(isLoginUnique(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(isLoginUnique(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
