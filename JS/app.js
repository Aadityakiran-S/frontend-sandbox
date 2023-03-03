const people = [
    { name: 'bob', age: 20, profession: 'developer' },
    { name: 'peter', age: 25, profession: 'designer' },
    { name: 'susy', age: 30, profession: 'the boss' }
]

function showPerson(person) {
    console.log(person.profession.toUpperCase());
}

people.forEach(showPerson);