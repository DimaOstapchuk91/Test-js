// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book['title']); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book['genres']); // ["historical prose", "adventure"]

// const propKey = 'author';
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// function countProps(object) {
//   const objektArray = Object.keys(object);

//   return objektArray.length;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const totalSalaryArr = Object.values(salaries);
//   for (const salary of totalSalaryArr) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color['hex']);
//   rgbColors.push(color['rgb']);
// }

// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     console.log(product);
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Grip')); // 1200

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   const totalArr = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       totalArr.push(product[propName]);
//     }
//   }
//   return totalArr;
// }
// console.log(getAllPropValues('names'));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     console.log(Object.values(product).includes(productName));
//     if (Object.values(product).includes(productName)) {
//       // return product['price'] * product['quantity'];
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Radar')); //5200

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       console.log(potion);
//       totalPrice += potion.price;
//     }

//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
// atTheOldToad.updatePotionName('Speed potion', 'Polymorth');
// console.log(atTheOldToad);

// function getExtremeScores(scores) {
//   const total = {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
//   return total;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));



// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

