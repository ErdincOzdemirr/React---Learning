// setTimeout(() => {
//     console.log("Merhaba")
// }, 5000)

// setInterval(() => {
// console.log("Ben Çalışıyorum")
// },1000)

// const sayHi = (cb) => {
//     cb();
// }
// sayHi(() => {
//     console.log("Hello")
// });

import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data.json))
.then((users) => console.log(users));