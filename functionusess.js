// class Car {
//     constructor(name, color,number){
//         this.name = name;
//         this.color = color;
//         this.number = number;
//     }
// }

// let car1 = new Car("afzal", "blue", 788);
// console.log(car1);

// class Account{
//     #pin;
//     #balance;
//     #history = [];
//     constructor(name,ac_number,pin,m_no,balsnce){
//         this.name = name;
//         this.ac_number = ac_number;
//         this.m_no = m_no;
//         this.#pin = pin;
//         this.#history[this.#history.length] = {
//             method : "Deposit",
//             amount : balsnce,
//         };
//         this.#balance = balsnce;
//     }
//     deposit(a){
//         if (typeof a !=`number` || a < 0 ){
//             return { error: "provide number or must be positive"};
//         }
//         this.#history[this.#history.length] = { method: "deposit", amount: a};
//         this.#balance += a;
//         return {
//             data : `tha amount ${a} is added to your bank account`
//         };
//     }
//     gethistory(){
//         return { history: this.#history };
//     }
// }

// let Bankacount = new Account(
//     "afzal ansari",
//     "10101",
//     "12#5",
//     "9324612916",
//     20000
// );
// console.log(Bankacount.deposit(12300));
// console.log(Bankacount.gethistory());