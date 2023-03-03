const people = [
    { name: 'bob', age: 20, profession: 'developer' },
    { name: 'peter', age: 25, profession: 'designer' },
    { name: 'susy', age: 30, profession: 'the boss' },
    { name: 'anna', age: 21, profession: 'HR' }
]

const youngPeople = people.filter((person) => {
    return person.age <= 25;
})
console.log(youngPeople);

const developers = people.filter((person) => {
    return person.profession === 'senior developer';
})
console.log(developers);