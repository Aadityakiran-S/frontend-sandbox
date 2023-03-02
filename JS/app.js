const person = {
    name: 'John',
    lastName: 'Peters',
    age: 40,
    education: true,
    married: false,
    siblings: ['anna', 'peter', 'susan'],
    greeting: function sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
console.log(person.name);
person.greeting();

person.name = 'bob';
person.greeting();