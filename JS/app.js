const people = [
    { name: 'bob', age: 20, profession: 'developer', id: 1 },
    { name: 'peter', age: 25, profession: 'designer', id: 2 },
    { name: 'susy', age: 30, profession: 'the boss', id: 3 },
    { name: 'anna', age: 21, profession: 'HR', id: 4 }
]

const person = people.find((p) => {
    return p.id === 1;
})
console.log(person); //Returns single object

const filteredPerson = people.filter((person) => {
    return person.id === 1;
})
console.log(filteredPerson); //Returns array