// ІНСТРУКЦІЯ ЕЛСЕ ІФ
function checkStorage(available, ordered) {
  if (available < ordered) {
    return 'Not enough goods in stock!';
  } else {
    return 'Order is processed, our manager will contact you';
  }
}

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'There are no products in the order!';
  } else if (available < ordered) {
    return 'Your order is too large, there are not enough items in stock!';
  } else {
    return 'The order is accepted, our manager will contact you';
  }
}

// ТЕРНАРНИЙ ОПЕРАТОР
function checkPassword(password) {
  const correctPassword = 'jqueryismyjam';
  let checkPassword =
    password === correctPassword
      ? 'Access granted'
      : 'Access denied, wrong password!';
  return checkPassword;
}

// Switch ОПЕРАТОР
function getSubscriptionPrice(type) {
  switch (type) {
    case 'starter':
      return 0;
      break;

    case 'professional':
      return 20;
      break;
    case 'organization':
      return 50;
      break;
    default:
      return 'Invalid subscription type!';
  }
}

function normalizeInput(input, to) {
  if (to === 'upper') {
    const normalString = input.toUpperCase();
    return normalString;
  } else {
    const lowerString = input.toLowerCase();
    return lowerString;
  }
}

// Перевірка рядка за останім словом
function checkFileExtension(fileName, ext) {
  const changeFileName = fileName.toLowerCase();
  const changeExt = ext.toLowerCase();
  const checkString = changeFileName.endsWith(changeExt);
  if (checkString) {
    return 'File extension matches';
  } else {
    return 'File extension does not match';
  }
}

// Перевірка індексу першого входження слова чи символа, вирізання частини після індексу
function getFileName(file) {
  const chekedFile = file.toLowerCase();
  const chekedIndex = chekedFile.indexOf('.');
  if (chekedIndex >= 0) {
    const newString = file.slice(0, chekedIndex);
    return newString;
  } else {
    return chekedFile;
  }
}

// видалляна пробілів
function createFileName(name, ext) {
  const fullNameFile = `${name.trim()}.${ext}`;
  return fullNameFile;
}
