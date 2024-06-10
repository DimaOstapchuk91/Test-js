// задачка 1 - cума чисел
// const a = 10;
// const b = 27;
// const total = a + b;
// console.log(total);

// Задачка 2 - перевірка на тип даних рядок

const velue = 'hello world';
const checkString = typeof velue === 'string';
console.log(checkString);

// Задачка 3 - Перетворює рядок в число якщо це можливо якщо ні то "Nan"
function convertToNumber(str) {
  console.log(Number(str));
}
convertToNumber('65 go');

// Задачка 4 - Площа прямокутника
function calculateRectangleArea(width, height) {
  const area = width * height;
  return area;
}

console.log(calculateRectangleArea(50, 10));

// Задачка 5 - перевірка парності числа
const isEven = 16;
const checkNumber = isEven % 2 === 0;
console.log(checkNumber);

// Задачка 6 - обєднання рядків шляхом додавання (конкатинація рядків)
const str1 = 'Hello';
const str2 = 'World';
const finishStr = str1 + ' ' + str2 + ' !';
console.log(finishStr);
// обо шаблонний рядок
console.log(`${str1} ${str2} !`);

// Задачка 7 - перевірка віку за допомогою тернарного оператора
const age = 90;
const checkAge = age >= 18 ? 'You age true' : 'You age false';
console.log(checkAge);

// Задачка 8 - форматування рядків за допомогою шаблоного рядка інтерполяція рядків
const names = 'Petro';
const helloString = `Hello ${names} how are you?`;
console.log(helloString);

// задачка 9 - Математичні операції Теорема піфагора довжина двох катетів прям. трик.
function calculateHypotenuse(a, b) {
  const calculate = a * a + b * b;
  const c = Math.sqrt(calculate); // Визначення квадратного кореня
  return +c.toFixed(2); // ПЕретворення два числа після коми (рядок) + перетворення в число
}
console.log(calculateHypotenuse(5, 8));

// Задачка 10 - випадкові числа
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generateRandomNumber(5, 100));
//* Пояснення:
//* Math.random():

//* Цей метод генерує випадкове число в діапазоні від 0 (включно) до 1 (виключно).
//* (max - min + 1):

//* Це забезпечує правильний діапазон значень. Наприклад, для діапазону від 5 до 100 різниця max - min становить 95, і ми додаємо 1, щоб включити обидва кінці діапазону.
//* Math.random() * (max - min + 1) + min:

//* Це масштабування випадкового числа до бажаного діапазону.
//* Спочатку ми отримуємо випадкове число між 0 і 1.
//* Потім множимо його на ширину діапазону (max - min + 1), щоб отримати число в межах від 0 до (max - min + 1).
//* Нарешті, додаємо min, щоб змістити це число до початку діапазону.
//* Math.floor():

//* Округлює результат вниз до найближчого цілого числа, щоб отримати випадкове ціле число в заданому діапазоні.

// Задачка 11 перевірка на множиність кратність числа
function isMultiple(a, b) {
  return a % b === 0;
}
console.log(isMultiple(7, 8));

// Задачка 12 Факторіал числа
function factorial(n) {
  // Базовий випадок: факторіал 0 або 1 дорівнює 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Рекурсивний випадок: n * факторіал (n - 1)
  return n * factorial(n - 1);
  //     Рекурсивний підхід:

  // Базовий випадок: Якщо n дорівнює 0 або 1, повертаємо 1, оскільки факторіал 0 і 1 дорівнює 1.
  // Рекурсивний випадок: Функція викликає сама себе з аргументом n - 1 і множить результат на n.
}

// function factorial(n) {
//   // Якщо n дорівнює 0 або 1, факторіал дорівнює 1
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   let result = 1;
//   // Обчислюємо факторіал за допомогою циклу
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result; те саме тільки циклами
// }

console.log(factorial(5)); // Виведе: 120
console.log(factorial(0)); // Виведе: 1
console.log(factorial(1)); // Виведе: 1
console.log(factorial(10)); // Виведе: 3628800

// Задачка 13 - піднесення до степення
function power(base, exponent) {
  return base ** exponent;
  // return Math.pow(base, exponent); за допомогою match
}
console.log(power(2, 3)); // Виведе: 8 (2^3 = 8)

// Задачка 14 - повернення зворотнього рядка
function reverseString(str) {
  let reversed = ''; // Ми створюємо пустий рядок reversed.
  //Потім ми проходимо по початковому рядку str з кінця до початку за допомогою циклу for.
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i]; //На кожній ітерації ми додаємо поточний символ до рядка reversed.
  }
  return reversed; //На виході отримуємо зворотній рядок.
}

// Те саме але з масивами данних
// Ми використовуємо метод split(""), щоб розділити рядок на масив окремих символів.
// Потім використовуємо метод reverse(), щоб перевернути цей масив.
// Нарешті, за допомогою методу join("") з'єднуємо зворотній масив в один рядок.

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

console.log(reverseString('hello')); // Виведе: "olleh"
console.log(reverseString('JavaScript')); // Виведе: "tpircSavaJ"

// Задачка 15 - поліндром рядка перевірка. це слова яке читається з кінця так само як з початку
// Для початку потрібно перетворити рядок у зворотній, потім порівняти між собою
function polindromeString(str) {
  let reversed = ''; //Приймаємо зворотній рядок
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  let checkPolindrome = reversed === str; // Порівнняня вхідного та зворотнього рядка
  return checkPolindrome;
}

// function isPalindrome(str) {
//   return str === str.split('').reverse().join(''); Те саме тільки з масивами данних
// }

// Ми використовуємо методи рядка split(""), reverse() та join(""), щоб зворотній рядок.
// Потім ми порівнюємо цей зворотній рядок з оригінальним.
// Якщо вони ідентичні, то рядок є паліндромом.

console.log(polindromeString('tenet')); //true
console.log(polindromeString('badabumba')); //false
