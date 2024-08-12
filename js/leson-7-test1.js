/** 
Підсумкова пам'ятка
Згадаємо та підсумуємо основні методи і властивості DOM-елементів, з якими ми будемо працювати далі:



Пошук DOM-елементів

element.querySelector(selector) - повертає перший елемент, який відповідає вказаному CSS селектору всередині елемента element.
element.querySelectorAll(selector) - повертає всі елементи, які відповідають вказаному CSS селектору всередині елемента element.


Властивості DOM-елемента

element.textContent - містить текстовий вміст елемента element, ігноруючи всі теги HTML всередині.
element.innerHTML - містить HTML-вміст елемента element.
element.style - об'єкт, що містить вбудовані стилі елемента element, які можна змінювати динамічно з JavaScript.


CSS класи на DOM-елементах

element.classList.contains(className) - перевіряє, чи міститься вказаний клас className на елементі element.
element.classList.add(className) - додає клас className до списку класів елемента element.
element.classList.remove(className) - видаляє клас className зі списку класів елемента element.
element.classList.toggle(className) - додає клас className, якщо його немає, або видаляє, якщо він вже присутній, на елементі element.
element.classList.replace(oldClassName, newClassName) - замінює клас oldClassName на newClassName в списку класів елемента element.


Створення та видалення DOM-елементів

document.createElement(tagName) - створює новий HTML-елемент з вказаним ім'ям тегу tagName.
element.append(el) - додає вміст (або елемент) до кінця списку дочірніх елементів element.
element.prepend(el) - додає вміст (або елемент) до початку списку дочірніх елементів element.
element.remove() - видаляє DOM-елемент з DOM дерева.
insertAdjacentHTML(position, string) - додає вказаний рядок HTML після, перед, всередині або перед вказаним елементом.


Події

element.addEventListener(event, handler) - додає обробник події handler для події event на елемент element.
element.removeEventListener(event, handler) - видаляє обробник події handler для події event на елементі element.
keydown - подія, яка виникає, коли клавіша на клавіатурі натиснута.
submit - подія, яка виникає при відправці форми.
change - подія, яка виникає при зміні значення елемента форми.
input - подія, яка виникає при введенні даних в текстове поле.
focus - подія, яка виникає, коли елемент отримує фокус.
blur - подія, яка виникає, коли елемент втрачає фокус.
*/

console.log(document);
console.dir(document);

const title = document.querySelector('h1');
console.log(title);
const ulList = document.querySelector('#list');
console.log(ulList);
const firstElement = document.querySelector('.first-element');
console.log(firstElement);
const elementsAll = document.querySelectorAll('li');
const newElementsAll = Array.from(elementsAll); // Перетворення псевдомасива в масив
const newElementAllSpred = [...elementsAll]; // те саме тільки перетворення за допомогою спред оператора
// console.log(elementsAll);
// console.log(newElementsAll);
console.log(newElementAllSpred);

/**
 * Ось короткий огляд властивостей, пов'язаних з вузлами:
firstChild: повертає перший дочірній вузол (включаючи текстові вузли та коментарі).
lastChild: повертає останній дочірній вузол.
childNodes: повертає живу колекцію всіх дочірніх вузлів (включаючи текстові вузли та коментарі).
firstElementChild: повертає перший дочірній елемент (ігноруючи текстові вузли та коментарі).
lastElementChild: повертає останній дочірній елемент (ігноруючи текстові вузли та коментарі).
children: повертає живу колекцію всіх дочірніх елементів (ігноруючи текстові вузли та коментарі).

Важливе зауваження:
firstChild і lastChild включають всі типи вузлів, такі як текстові вузли, коментарі тощо. Якщо потрібно працювати лише з елементами, краще використовувати firstElementChild і lastElementChild.
childNodes повертає NodeList, який включає всі типи вузлів, тоді як children повертає HTMLCollection, що містить лише елементи.
Таким чином, використання firstChild, lastChild, childNodes, firstElementChild, lastElementChild та children допомагає ефективно працювати з DOM, дозволяючи доступ до різних типів дочірніх вузлів та елементів.

Методи та властивості для елементів типу Element:
Властивості:

element.id: повертає або задає значення атрибута id.
element.className: повертає або задає значення атрибута class.
element.classList: повертає живий об'єкт DOMTokenList, що представляє атрибути класу.
element.innerHTML: повертає або задає HTML-содержиме елемента.
element.outerHTML: повертає HTML-содержиме елемента з самим елементом.
element.textContent: повертає або задає текстовий контент елемента.
element.tagName: повертає назву тега елемента.
element.style: повертає живий об'єкт CSSStyleDeclaration, що представляє інлайн-стилі елемента.
Методи:

element.getAttribute(attributeName): повертає значення заданого атрибута.
element.setAttribute(name, value): задає значення атрибута.
element.removeAttribute(attributeName): видаляє заданий атрибут.
element.hasAttribute(attributeName): перевіряє, чи має елемент заданий атрибут.
element.appendChild(node): додає дочірній елемент в кінець списку дочірніх елементів.
element.removeChild(node): видаляє заданий дочірній елемент.
element.replaceChild(newChild, oldChild): замінює один дочірній елемент іншим.
element.insertBefore(newNode, referenceNode): вставляє новий елемент перед заданим дочірнім елементом.
element.addEventListener(type, listener): додає обробник події до елемента.
element.removeEventListener(type, listener): видаляє обробник події з елемента.
element.querySelector(selectors): повертає перший дочірній елемент, що відповідає CSS-селектору.
element.querySelectorAll(selectors): повертає всі дочірні елементи, що відповідають CSS-селектору.
element.matches(selector): перевіряє, чи відповідає елемент CSS-селектору.


Методи та властивості для NodeList:
NodeList — це колекція вузлів, які можуть бути або статичними (тобто, список вузлів не змінюється), або живими (тобто, список вузлів оновлюється, якщо DOM змінюється).

Властивості:

nodeList.length: повертає кількість вузлів у NodeList.
[index]: доступ до вузлів за індексом (як в масиві).
Методи:

nodeList.item(index): повертає вузол на заданій позиції в NodeList.
nodeList.forEach(callback): викликає передану функцію один раз для кожного вузла в NodeList.


Так, властивість value існує у деяких типів елементів HTML, зокрема у елементів форм, таких як <input>, <textarea>, <select>. Вона використовується для отримання або встановлення значення цих елементів.

Приклади використання властивості value:
<input> елемент:
html
Копіювати код
<input type="text" id="myInput" value="Hello">
<script>
  const inputElement = document.getElementById('myInput');
  console.log(inputElement.value); // Виведе: Hello
  inputElement.value = 'New Value';
  console.log(inputElement.value); // Виведе: New Value
</script>
<textarea> елемент:
html
Копіювати код
<textarea id="myTextarea">Hello</textarea>
<script>
  const textareaElement = document.getElementById('myTextarea');
  console.log(textareaElement.value); // Виведе: Hello
  textareaElement.value = 'New Text';
  console.log(textareaElement.value); // Виведе: New Text
</script>
<select> елемент:
html
Копіювати код
<select id="mySelect">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
<script>
  const selectElement = document.getElementById('mySelect');
  console.log(selectElement.value); // Виведе: 1 (або поточне значення вибраного option)
  selectElement.value = '2';
  console.log(selectElement.value); // Виведе: 2
</script>
Застереження:
Властивість value не працює для всіх елементів HTML. Наприклад, вона не існує для <div>, <span> та інших несхильних до вводу даних елементів.
Використовуйте value тільки для тих елементів, які підтримують введення або вибір значень.
Перевірка елемента на наявність властивості value:
Якщо ви не впевнені, чи має елемент властивість value, можна перевірити це за допомогою оператора in:

javascript
Копіювати код
const element = document.querySelector('.some-element');
if ('value' in element) {
  console.log('Element has a value property:', element.value);
} else {
  console.log('Element does not have a value property');
}
Це забезпечить, що ви працюєте з елементами, які мають властивість value, і уникнете помилок, пов'язаних з доступом до цієї властивості у невідповідних елементах.
 */
