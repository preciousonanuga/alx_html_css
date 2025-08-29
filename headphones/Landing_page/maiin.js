// Do these chores

// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

function walkDog() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if (dogWalked) {
                resolve("You walk the dog 🐕");
            } else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You cleaned the kitchen");
            } else {
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takenOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false;

            if (trashTakenOut) {
                resolve("You have taken the trash out");
            } else {
                reject ("You DIDN'T take the trash out");
            }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takenOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.error(error));