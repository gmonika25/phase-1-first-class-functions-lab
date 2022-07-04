// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
};

// console.log(returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
};

// console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers(driversArray, cb) {
//   if ((cb = returnFirstTwoDrivers)) {
//     return returnFirstTwoDrivers(driversArray);
//   } else if ((cb = returnLastTwoDrivers)) {
//     return returnLastTwoDrivers(driversArray);
//   }
// }

function selectDifferentDrivers(driversArray, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(driversArray);
}
