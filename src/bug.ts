import A from "undici";
import B from "undici/index.js";

// console.log(A, B);

console.log(`A`, A.Dispatcher, typeof new A.Dispatcher().dispatch); // undefined
console.log(`B`, B.Dispatcher, typeof new B.Dispatcher().dispatch); // function

console.log(`A`, Object.keys(A)); // 49 keys
console.log(`B`, Object.keys(B)); // 55 keys

console.log(`A`, A.interceptors);
console.log(`B`, B.interceptors);
