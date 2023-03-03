function morning(name) {
    return `Good morning ${name.toUpperCase()}`;
}

function greet(name, callback) {
    const myName = 'John';
    console.log(`${callback(name)}, my name is ${myName}`);
}

greet('bobo', morning);


// function greetMorning(name) {
//     const myName = `john`;
//     console.log(`Goodmorning ${name} my name is ${myName}`);
// }
// greetMorning('bobo');

