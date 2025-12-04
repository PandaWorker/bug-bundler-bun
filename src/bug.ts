import A from "undici";
import B from "undici/index.js";

// console.log(A, B);

console.log(A.Dispatcher, typeof new A.Dispatcher().dispatch); // undefined
console.log(B.Dispatcher, typeof new B.Dispatcher().dispatch); // function

console.log(Object.keys(A));
console.log(Object.keys(B));