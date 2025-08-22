🔹 JavaScript Interview Q&A
1. What is JavaScript?

👉 JavaScript is a lightweight, interpreted programming language used to make web pages interactive. It runs in the browser and can also be used on the server with Node.js.

2. What is the difference between == and ===?

== → compares values only (performs type conversion).

=== → compares both value and type.

// 5 == "5"   // true
// 5 === "5"  // false

3. What is the difference between null and undefined?

undefined → variable declared but not assigned.

null → intentional absence of value.

let a;
console.log(a);  // undefined
let b = null;
console.log(b);  // null

4. What are JavaScript Data Types?

👉 Two types:

Primitive → string, number, boolean, null, undefined, symbol, bigint

Non-Primitive → object, array, function

5. What is Hoisting in JavaScript?

👉 JavaScript moves variable and function declarations to the top of their scope before execution.

console.log(x); // undefined
var x = 10;

6. What is the difference between var, let, and const?

var → function-scoped, re-declarable, hoisted

let → block-scoped, can be updated but not re-declared in same scope

const → block-scoped, cannot be updated or re-declared

7. What is an Arrow Function?

👉 Shorter syntax for functions, does not bind its own this.

const add = (a, b) => a + b;

8. What are truthy and falsy values?

Falsy values → false, 0, "", null, undefined, NaN

Everything else is truthy.

9. What is the difference between Function Declaration and Function Expression?

Function Declaration → hoisted, can be called before defining.

Function Expression → not hoisted, must be defined before calling.

10. What is the difference between localStorage and sessionStorage?

localStorage → stores data permanently (until cleared).

sessionStorage → stores data only for the current browser tab session.