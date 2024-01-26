// `splice()` vs `slice()`
// splice-->used for add or remove element into the array
const array = [1,2,3,4,5];
array.splice(2, 2, 'a', 'b');
console.log(array);
// slice -->not modify the original array  but return a new array containing selected element
let myarray = array.slice(1, 3);
console.log(myarray);