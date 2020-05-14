let comfortableTimeForCustomer = [14, 10, 15];

let comfortableTimeForMaster = [9, 10, 11, 12, 13];

function findComfortableTimeForBoth(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]) {
                return array1[i];
            } 
        }
    }
}

let time = findComfortableTimeForBoth(comfortableTimeForCustomer, comfortableTimeForMaster);

if(time) {
    console.log("That time is avilable " + time);  
} else {
    console.log("There is no available time. Please choose another time");
}