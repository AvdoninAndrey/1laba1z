// // 'use strict';
// const equivalence = (x, y) => !(x ^ y);
// const implication = (x, y) => !x || y;
// const antiimplication = (x, y) => !(!x || y);
// const additionModulo = (x, y) => !!(x ^ y);
// const antidisjunction = (x, y) => !(x || y);
// const anticonjunction = (x, y) => !(x && y);
// const disjunction = (x, y) => x || y;
// const conjunction = (x, y) => x && y;
// const denial = (x) => !x;

// const f1 = function (x, y) {
//   const result = disjunction(equivalence(x, denial(y)), antidisjunction(y, x));
//   if (result === true) {
//     return 1;
//   }
//   return 0;
// };

// const f2 = function (x, y, z) {
//   const result = additionModulo(
//     anticonjunction(implication(x, denial(y)), denial(z)),
//     anticonjunction(x, y)
//   );
//   if (result === true) {
//     return 1;
//   }
//   return 0;
// };

// let x, y, z;
// console.log('x', 'y', 'f1');
// for (let i = 0; i < 4; i++) {
//   if (i < 2) {
//     x = 0;
//   } else {
//     x = 1;
//   }
//   if (i % 2 !== 0) {
//     y = 1;
//   } else {
//     y = 0;
//   }
//   console.log(x, y, f1(x, y));
// }
// console.log('x', 'y', 'z', 'f1');
// for (let i = 0; i < 8; i++) {
//   if (i < 4) {
//     x = 0;
//   } else {
//     x = 1;
//   }
//   if (i <= 1 || i === 4 || i == 5) {
//     y = 0;
//   } else {
//     y = 1;
//   }
//   if (i % 2 !== 0) {
//     z = 1;
//   } else {
//     z = 0;
//   }
//   console.log(x, y, z, f2(x, y, z));
// }
