'use strict';
const productName = 'Repair droid';
console.log('JavaScript is awesome!');
console.log(10);
console.log(productName.length); //довжина рядка
const username = 'Poly';
const userStringLong = username.length;
const message = `Username ${username} is ${username.length} characters long`;
console.log(message);

const product = 'Repair droid'; //доступ до потрібного символу
console.log(product[0]); // 'R'
console.log(product[5]); // 'r'
console.log(product[11]); // 'd'
console.log(product[product.length - 1]); // 'd'

// const product = "Repair droid";  //знаходження останього індексу в рядку
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]); // 'd'

// const product = "Repair droid"; //простіша схема знаходження індексу останього
// console.log(product[product.length - 1]); // 'd'

// const courseTopic = 'JavaScript essentials';
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);

// Перетворення рядків у числа
// console.log(Number.parseInt("5")); // 5
// console.log(Number.parseFloat("5.5")); // 5.5
// Метод Number.parseFloat() аналогічний Number.parseInt() з
// однієї відмінністю: перетворює рядок на число з плаваючою крапкою

// ЧИСЛА
//Math.floor(num): повертає найближче ціле число, яке є меншим або дорівнює вказаному числу num.
//Math.ceil(num): повертає найближче ціле число, яке є більшим, або дорівнює зазначеному числу num.
//Math.round(num): повертає значення числа після округлення до найближчого цілого.
//Math.max(num1, num2, ...): повертає найбільше число з набору переданих чисел.
//Math.min(num1, num2, ...): повертає найменше число з набору переданих чисел.
//Math.random(): повертає випадкове число в діапазоні від 0 (включно) до 1 (за винятком).
//Math.sqrt(calculate);  // Визначення квадратного кореня

//toFixed() повертає рядок, що представляє число із зазначеною кількістю знаків після крапки.
