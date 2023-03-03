const people = [
    { name: 'bob', age: 20, profession: 'developer' },
    { name: 'peter', age: 25, profession: 'designer' },
    { name: 'susy', age: 30, profession: 'the boss' },
    { name: 'anna', age: 21, profession: 'HR' }
]

const ages = people.map((person) => {
    return person.age;
});
console.log(ages);

const names = people.map((person) => {
    return {
        name: person.name.toUpperCase(),
        age: person.age
    }
})
console.log(names);

const headings = people.map((person) => {
    return `<h1>${person.name}</h1>`;
})

document.body.innerHTML = headings.join('');

console.log(headings);