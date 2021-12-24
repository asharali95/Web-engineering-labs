"use strict";

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generator),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(generateRegistrationNumber);

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
function generator() {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
} // const gen = generator(); // "Generator { }"
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
// -----------------------------------------------------


function generateRegistrationNumber(limit) {
  var num;
  return regeneratorRuntime.wrap(function generateRegistrationNumber$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          num = 0;

        case 1:
          if (!(num < limit)) {
            _context2.next = 7;
            break;
          }

          _context2.next = 4;
          return num + 1;

        case 4:
          num++;
          _context2.next = 1;
          break;

        case 7:
          return _context2.abrupt("return", "Generator end");

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

var gen = generateRegistrationNumber(5);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // -----------------------------------------------