import async from "regenerator-runtime";
//All the ES updates add further features into the core JS language.
// es7();
// es8();
// es9();

// function es7() {
//   //exponent operator **
//   const base = 2;
//   const exponent = 8;
//   console.log(base ** exponent);

//   //Array.includes
//   const GPAList = [2, 3, 4, 3.5, 3.9];
//   console.log(GPAList.includes(2));
// }

// async function es8() {
//   //padStart and padEnd
//   console.log("123456789".padStart(15, "X"));
//   console.log("123456789".padEnd(15, "X"));

//   //async/await function
//   async function givePresentation() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("presentation started");
//       }, 1000);
//     });
//   }

//   const presentationStatus = await givePresentation();
//   console.log(presentationStatus);
// }

// function es9() {
//   const goldMedalistPromise = new Promise((resolve, reject) => {
//     const GPA = 4.0;
//     if (GPA < 4) {
//       reject("no gold medal");
//     } else {
//       resolve("gold medalist");
//     }
//   });

//   //finally
//   goldMedalistPromise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("No matter what, I will run after gold medalist criteria");
//     });
// }
function* generator() {
  yield 1, yield 2, yield 3;
}
// const gen = generator(); // "Generator { }"

// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3

// -----------------------------------------------------

function* generateRegistrationNumber(limit) {
  let num = 0;
  while (num < limit) {
    yield num + 1;
    num++;
  }
  return "Generator end";
}
const gen = generateRegistrationNumber(5);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// -----------------------------------------------
