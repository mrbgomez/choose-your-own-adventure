
const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`your name is ${username}`);


console.log('What type of race car will you choose?')
const raceCar = prompt('Mclaren, Ferrari, Bugatti, Pagani ; ')
console.log(`Your type of ${raceCar}`)


let raceCarOption = (raceCar)
if (raceCarOption ==='Mclaren') {
    mclarenUpgrade()
} else if (raceCarOption === 'Ferrari') {
    ferrariUpgrade()
} else if (raceCarOption === 'Bugatti') {
    bugattiUpgrade()
} else if (raceCarOption === 'Pagani') {
    paganiUpgrade()
}

function mclarenUpgrade() {
    
console.log('Engine Nos Tires & Light Chassis')
    const mclarenUpgrade = prompt('What is your Upgrade choice? ')
    console.log('You chose ${mclarenUpgrade}')
}

function ferrariUpgrade() {
    console.log('Engine Nos Tires & Light Chassis')
    const ferrariUpgrade = prompt('What is your Upgrade choice? ')
    console.log('You chose ${ferrariUpgrade}')
}

function bugattiUpgrade() {
    console.log('Engine Nos Tires & Light Chassis')
    const bugattiUpgrade = prompt('What is your Upgrade choice? ')
    console.log('You chose ${bugattiUpgrade}')
}

function paganiUpgrade() {
    console.log('Engine Nos Tires & Light Chassis')
    const paganiUpgrade = prompt('What is your Upgrade choice? ')
    console.log('You chose ${paganiUpgrade}')
}

