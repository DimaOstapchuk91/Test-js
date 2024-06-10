// const fruits = ['Яблуко', 'Груша', 'Апельсин'];
// const shoppingCart = fruits;
// shoppingCart.push('Банан');
// console.log(fruits.length);

// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// const planets = ['Earth', 'Mars', 'Venus'];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"

// function getLength(array) {
//   const newStr = array.join('');

//   return newStr.length;
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train'])); // 22

// function getSlice(array, value) {
//   const checkMassif = array.indexOf(value);
//   let newMassif;
//   if (value === array[checkMassif]) {
//     newMassif = array.slice(0, checkMassif + 1);
//   } else {
//     newMassif = [];
//   }
//   return newMassif;
// }

// Інший спосіб більш правильний
// function getSlice(array, value) {
//   const checkMassif = array.indexOf(value);
//   if (checkMassif !== -1) {
//     return array.slice(0, checkMassif + 1);
//   } else {
//     return [];
//   }
// }
/*
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); // повертає ["Mango", "Poly"]);
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); // повертає ["Mango", "Poly", "Ajax"]

function calculateTotalPrice(order) {
  let total = 0;
  for (const namber of order) {
    total += namber;
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));

function getEvenNumbers(start, end) {
  let result = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}
*/
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(6, 12));

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));

function getCommonElements(array1, array2) {
  let elementArray = [];
  for (const arr of array1) {
    if (array2.includes(arr)) {
      console.log(array2.includes(arr));
      elementArray.push(arr);
    }
  }
  return elementArray;
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]

function calculateTotalPrice(order) {
  let totalNumber = 0;
  for (const number of order) {
    totalNumber += number;
  }
  return totalNumber;
}

console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

function createReversedArray() {
  const checkArgument = Array.from(arguments);
  return checkArgument.toReversed();
}

console.log(createReversedArray(412, 371, 94, 63, 176)); //[176, 63, 94, 371, 412]

function calculateTax(amount, taxRate = 0.2) {
  const totalTax = amount * taxRate;
  return totalTax;
}

console.log(calculateTax(100, 0.2)); // 20
console.log(calculateTax(300, 0.3)); // 90
