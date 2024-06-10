/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// константи значення яких ми знаємо ще до початку роботи програми (означає що значення не обчислюється під час роботи) зазвичай називають кепслоком
const TRANSACTIONS = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    console.log(this.transactions);
    return {
      id: this.transactions.length,
      amount,
      type,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const currentTransaction = this.createTransaction(
      amount,
      TRANSACTIONS.DEPOSIT
    );
    this.transactions.push(currentTransaction);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      console.error('Нема грошей, прийдіть завтра');
      return;
    }

    this.balance -= amount;
    const currentTransaction = this.createTransaction(
      amount,
      TRANSACTIONS.WITHDRAW
    );
    this.transactions.push(currentTransaction);
  },
  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    return id > this.transactions.length ? null : this.transactions[id];
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let totalSum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalSum += transaction.amount;
      }
    }
  },
};

console.log('Current balance:', account.getBalance());
account.deposit(100);
account.deposit(500);
console.log('Current balance:', account.getBalance());
account.withdraw(250);
account.withdraw(1250);
account.withdraw(100);
account.withdraw(50);
console.log('Current balance:', account.getBalance());

console.log(account.getTransactionDetails(2)); // {id: 2}
console.log(account.getTransactionDetails(100)); // null

console.log('SUM DEPOSIT:', account.getTransactionTotal(TRANSACTIONS.DEPOSIT)); // 600
console.log(
  'SUM WITHDRAW:',
  account.getTransactionTotal(TRANSACTIONS.WITHDRAW)
); // 250

console.log(account);
