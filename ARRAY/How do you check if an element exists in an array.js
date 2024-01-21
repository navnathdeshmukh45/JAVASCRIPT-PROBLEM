// How do you check if an element exists in an array

// solution 0
// const arr = [1, 2, 3, 4, "Hello", {name: "Vishal"}, [1,2,3], 4]; 

// const findElement = (arr, target) => {
//     for (let x of arr){
//         if (x === target){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(findElement(arr, "Hello"));
// console.log(findElement(arr, "H"));
// console.log(arr.includes("Hello"));

// solution 1
// let array =[1,2,3,4,5,6,7];
// // let elementtocheck =3;
// // let elementtocheck =9;
// if(array.indexOf(elementtocheck) !== -1){
//     console.log("element to check is present in the array ");
// }
// else
// {
//     console.log("element to check is not present in the array");
// }

// solution 2
// let array =[1,2,3,4,5,6,7,8,9,0]
// let elementtocheck =3;
// // let elementtocheck =11;
// if(array.includes(elementtocheck)){
//     console.log("element to check is present  in the array");
// }
// else
// {
//     console.log('element to check is not present in the array');
// }

// solution 3
let array =[1,2,3,4,5,6,7,8,9,0]
let elementtocheck =3;
// let elementtocheck =11;
if(array.find(element => element === elementtocheck)){
    console.log("element to check is present  in the array");
}
else
{
    console.log('element to check is not present in the array');
}