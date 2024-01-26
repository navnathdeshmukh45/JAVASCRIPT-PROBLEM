// `filter()` vs `find()`

// filter
const number =[1,2,3,4,5];
const even = number.filter(function (num){
     // return num %2 == 0;
     console.log(num % 2 == 0);
})

// find
const even1 = number.find((num)=> num > 3);
console.log(even1);