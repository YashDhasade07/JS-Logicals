// // 1. What does this print?
// console.log(typeof typeof 1);

// // 2. Guess the output:
// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// // 3. What is printed?
// var foo = 1;
// function myFun(){
//   console.log(foo);
//   var foo = 2;
// }
// myFun();

// // 4. What is the result?
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// // 5. And this version?
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// // 6. What gets logged?
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());

// // 7. Predict output:
// console.log(null == 0);
// console.log(null > 0);
// console.log(null >= 0);

// // 8. What gets printed?
// Promise.resolve()
//   .then(() => console.log("A"))
//   .then(() => { throw "err"; })
//   .catch(() => console.log("B"))
//   .then(() => console.log("C"));

// // 9. Guess what this prints:
// console.log(2 + "2");
// console.log("2" - "2");
// console.log("A" - "A");

// // 10. What is the output?
// let x = 1;
// if (function f(){}) {
//   x += typeof f;
// }
// console.log(x);


// // 1. Output?
// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});

// // 2. What's printed?
// Promise.resolve(1)
//   .then(val => {
//     console.log(val);
//     return val * 2;
//   })
//   .then(val => {
//     console.log(val);
//     throw new Error('oops');
//   })
//   .catch(err => {
//     console.log(err.message);
//     return 10;
//   })
//   .then(val => console.log(val));

// // 3. Prototype behavior?
// function A() {}
// A.prototype = { foo: () => 1 };
// const a = new A();
// A.prototype.foo = () => 2;
// console.log(a.foo());

// // 4. Constructor return?
// function Foo() {
//   this.value = 1;
//   return { value: 2 };
// }
// const obj = new Foo();
// console.log(obj.value);

// // 5. Hoisting inside function:
// let count = 0;
// function increment() {
//   if (count === 0) {
//     var count = 10;
//   }
//   console.log(count);
// }
// increment();

// // 6. Type coercion & compare:
// console.log(null == 0);
// console.log(null > 0);
// console.log(null >= 0);

// // 7. Unary and arithmetic:
// console.log(+"5" + 5);
// console.log(-"5" + 5);

// // 8. Complex typeof:
// let x = 1;
// if (function f() {}) {
//   x += typeof f;
// }
// console.log(x);

// // 9. Object.freeze & delete:
// const person = { name: "John", age: 30 };
// Object.freeze(person);
// person.age = 40;
// delete person.name;
// console.log(person.age, person.name);

// 10. Chaining relational weirdness:
console.log(true < 2 < 3);
console.log(true > 2 > 0);
