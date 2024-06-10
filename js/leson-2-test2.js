function calculateTotal1(number) {
  let numberLog = 0;
  for (let i = 1; i <= number; i++) {
    numberLog += i;
  }
  return numberLog;
}

console.log(calculateTotal1(5));
console.log('Hello');

function sumUpTo(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

// Виклик функції з числом 5
console.log(sumUpTo(5)); // Виведе 15, оскільки 1 + 2 + 3 + 4 + 5 = 15

function calculateTotal(number) {
  let totalNumber = 0;
  for (
    let calculeteNumber = 1;
    calculeteNumber <= number;
    calculeteNumber += 1
  ) {
    totalNumber += calculeteNumber;
  }
  return totalNumber;
}

// повертає та додає тільки парні числа
function calculateEvenTotal(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// оператор нульового злиття" (nullish coalescing operator). Він використовується для надання значення
//  за замовчуванням, якщо вираз зліва від оператора є null або undefined.
let firstName = null;
let nickName = 'Суперкодер';

console.log(firstName ?? nickName ?? 'Анонім');

// перебор числа від старт до енд, і повернуть перше число без остачі які ділиться на 5
const start = 17;
const end = 25;
let number;
for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    console.log(number);
    break;
  }
}
