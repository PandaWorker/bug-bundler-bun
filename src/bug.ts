import A from "undici";
import B from "undici/index.js";

// console.log(A, B);

console.log(A.Dispatcher, typeof new A.Dispatcher().dispatch); // undefined
console.log(B.Dispatcher, typeof new B.Dispatcher().dispatch); // function

console.log(Object.keys(A)); // 49 keys
console.log(Object.keys(B)); // 55 keys

console.log(A.interceptors);
console.log(B.interceptors);