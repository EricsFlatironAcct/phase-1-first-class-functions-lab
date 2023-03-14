// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);
const returnLastTwoDrivers = drivers => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = num => mult => num*mult;
const fareDoubler = num => createFareMultiplier(num)(2);
const fareTripler = num => createFareMultiplier(num)(3);
const selectDifferentDrivers= (arrayOfDrivers, f) => f(arrayOfDrivers);