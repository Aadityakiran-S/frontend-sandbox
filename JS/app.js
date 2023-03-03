const people = [
    { name: 'bob', age: 20, profession: 'developer', id: 1, salary: 200 },
    { name: 'peter', age: 25, profession: 'designer', id: 2, salary: 100 },
    { name: 'susy', age: 30, profession: 'the boss', id: 3, salary: 300 },
    { name: 'anna', age: 21, profession: 'HR', id: 4, salary: 50 }
]

const totalSalary = people.reduce((acc, currentItem) => {
    console.log(`total ${acc}`);
    console.log(`current money: ${currentItem.salary}`);

    acc += currentItem.salary;
    return acc;
}, 0)

console.log(totalSalary);