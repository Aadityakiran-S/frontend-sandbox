const first = document.querySelector('.first');
first.style.color = 'red';

//This is just going to be a whitespace
const whiteSpaceBeforeSecond = first.nextSibling;
console.log(typeof (whiteSpaceBeforeSecond));
console.log(whiteSpaceBeforeSecond);

//This is gonna give us the correct next sibling
const second = first.nextSibling.nextSibling;
console.log(typeof (second));
console.log(second);
second.style.color = 'blue';

//This will also do the same
const sameAsAbove = first.nextElementSibling;
console.log(typeof (sameAsAbove));
console.log(sameAsAbove);