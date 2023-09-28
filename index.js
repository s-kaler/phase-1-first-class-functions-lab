// Code your solution in this file!
const returnFirstTwoDrivers = driversArray => driversArray.slice(0,2);
const returnLastTwoDrivers = driversArray => driversArray.slice(driversArray.length - 2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = multiplier => function (fare) {return fare * multiplier};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (driversArray, func) => driversArray = func(driversArray);