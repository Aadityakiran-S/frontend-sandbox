const headings = document.getElementsByTagName('h2');

// console.log(headings);

headings[0].style.color = 'red';

// console.log(headings.length);

const items = document.getElementsByTagName('li');
items[2].style.color = 'orange';
//Cannot use this since items by default isn't an array
// items.forEach(element => {
//     console.log(element);
// });
const betterItems = [...items];
betterItems.forEach((item) => {
    console.log(item.textContent);
})

console.log(items);
console.log(betterItems);