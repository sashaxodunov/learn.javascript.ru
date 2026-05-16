/**
 * Задача 1
 * Какой будет результат выполнения этого кода?
 */

let city = null;

city ??= "Берлин"; // Берлин
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city);

/**
 * Задача 2
 * Что выведет код
 */

alert(undefined ?? NaN ?? null ?? "" ?? " "); // NaN

/**
 * Задача 3
 * Перепишите код используя операторы ??, ??=
 */

let num1 = 10,
  num2 = 20,
  result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}

let num1 = 10,
  num2 = 20,
  result;

result ??= num1 ?? num2;
