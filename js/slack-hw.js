/**
 * А ось і перша задачка).
Задача: Управління бібліотекою
Ви розробляєте програму для управління книгами в бібліотеці. Напишіть об'єкт `бібліотека`, який містить масив книг та функції для додавання нових книг, видалення книг за назвою, пошуку книг певного автора та отримання списку всіх книг.
Завдання:
Створіть об'єкт `бібліотека` з властивістю `книги`, яка є масивом для зберігання об'єктів книг.
Напишіть метод `додатиКнигу(назва, автор, рік_видання, кількість_сторінок)`, який додає нову книгу до бібліотеки.
Напишіть метод `видалитиКнигу(назва)`, який видаляє книгу з бібліотеки за назвою.
Напишіть метод `знайтиКнигиАвтора(автор)`, який повертає масив книг певного автора.
Напишіть метод `отриматиУсіКниги()`, який повертає масив усіх книг у бібліотеці.
Хто знає ключове слово this той практикує методи обʼєкту, а хто ще незнає, то зробіть банальними функціями. А хто знає класи то бігом робити класами)) :grin: .Взагалі раджу вивчити this і одразу ж застосувати свої знання на практиці :muscle: :fire:. Пишіть розвʼязки в коментарях, правильні - відмічу реакцією :ok_hand: :relaxed:
 */

const libraryManagement = {
  books: [
    {
      id: 0,
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      year: 2005,
      pages: 370,
    },
    {
      id: 1,
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      year: 2000,
      pages: 470,
    },
    {
      id: 2,
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      year: 1991,
      pages: 751,
    },
    {
      id: 3,
      title: 'Redder Than Blood',
      author: 'Tanith Lee',
      year: 1996,
      pages: 270,
    },
    {
      id: 4,
      title: 'The Last',
      author: 'Bernard Cornwell',
      year: 2007,
      pages: 570,
    },
    {
      id: 5,
      title: 'Enemy of God',
      author: 'Bernard Cornwell',
      year: 1980,
      pages: 424,
    },
    { id: 6, title: 'Blood', author: 'Tanith Lee', year: 1996, pages: 270 },
  ],
  cauntBooks: [],
  addBook(title, author, year, pages) {
    this.books.push({
      id: {},
      title: title,
      author: author,
      year: year,
      pages: pages,
      rating: undefined,
    });
  },

  dellBook(titleBook) {
    const indexBook = this.books.findIndex(book => book.title === titleBook);
    if (indexBook !== -1) {
      return this.books.splice(indexBook, 1);
    }
    // return this.books.filter(book => book.title !== titleBook);
  },
  getAuthorBook(booksOfAuthor) {
    const checkAuthor = this.books.filter(
      book => book.author === booksOfAuthor
    );

    return checkAuthor;
  },
  getTitleBook() {
    return this.books.map(book => book.title);
  },
};

libraryManagement.addBook('Atlas Shrugged', 'Ayn Rand', 1957, 456);
console.log(libraryManagement.books);
libraryManagement.dellBook('The Last Kingdom');
// console.log(libraryManagement.dellBook('The Last Kingdom'));
console.log(libraryManagement.books);
console.log(libraryManagement.getAuthorBook('Tanith Lee'));
console.log(libraryManagement.getTitleBook());
console.log(libraryManagement.dellBook('The Last Kingdom'));

// console.log(libraryManagement.books.[3]);
