// const testString = NaN && 'string' && 'test';
// console.log(testString);

// const testString2 = null || undefined || 0 || false || 'чай' || NaN;
// console.log(testString2);

// Задача 1 - перевірка темпиратури, якщо позитивна то тру, негативна фолс
const temperature = -25;
const checkTemperature =
  temperature >= 0
    ? `Temperature on street is a hot ${temperature} gradus celsiy`
    : `Wery cold mazafaca temperature is ${temperature}`;
console.log(checkTemperature);
//  Задача 2 - перевірка числа на парність
const numbers = 158;
const checkNumbers = numbers % 2 === 0;
console.log(`Чи парне число ${numbers} - `, checkNumbers);
// Задачка 3 -
