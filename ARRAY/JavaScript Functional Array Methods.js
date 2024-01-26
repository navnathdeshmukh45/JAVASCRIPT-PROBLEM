// JavaScript Functional Array Methods
//  map function applies passed function transformation to every element in the array and returns a new array with those transformations applied.

// map -->new array by applying a provided function to each element in the original array
const numbers =[1,2,3,4,5,6,7,8];
const dublednumber = numbers.map(function (num) {
//     return num * 2;
// console.log(num * 2);
});

// filter 
const number =[1,2,3,4,5];
const even = number.filter(function (num){
     // return num %2 == 0;
     console.log(num % 2 == 0);
})

// reduce
const number1 =[1,2,3,4,5,6];
const reducenum =number1.reduce((accumulator, current)=>accumulator +current, 0);
console.log(reducenum);