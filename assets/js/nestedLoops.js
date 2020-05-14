let comfortableTimeForCustomer = [14, 10, 15];

let comfortableTimeForMaster = [9, 10, 11, 12, 13];

for(let i = 0; i < comfortableTimeForCustomer.length; i++) {
    for(let j = 0; j < comfortableTimeForMaster.length; j++) {
        if(comfortableTimeForCustomer[i] === comfortableTimeForMaster[j]) {
            console.log("That time is avilable " + comfortableTimeForCustomer[i]);
        } 
    }
}