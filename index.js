const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    const fareMultiplier = function(fare){
        return (fare * multiplier);
    };
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, fn){
    return fn(drivers);
}
