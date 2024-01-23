//----------------------------------------
let x1=[99,100];
let x2=[1,2,3,4,5,6,7,8,9,0]
console.log(x2[0]);//Reading array
console.log(x2[0]=6);//writing array
console.log(x2)
console.log(x2.length);//length
console.log(x2.push(11)); //push
console.log(x2)
console.log(x2.pop()) //pop
console.log(x2)
console.log(x2.indexOf(8)) //indexof function
console.log(x2);
console.log(x2.concat(x1));//concat function
console.log(x2);
// --------------------------------------
// simple array
const array=[1,2,3,4,5,6,7,8,9,{name:"Ram"},"Hello"];
//print array 
console.log(array);
//---------------------------------------

// empty array
arr = [];
// empty array
console.log(arr);
//---------------------------------------
// push and pop operation
console.log(array.push("Navnath"));
console.log(array);
console.log(array.pop());
console.log(array);

//---------------------------------------
// fisrt and last element print
// const array =[1,2,3,4,5,6,7,8,9,0];
// const FirstElement =array[0];
// const arraylength = array.length;
// const lastelement =array[arraylength - 1];
// console.log(FirstElement ,"", lastelement ,"",arraylength)
// ------------------------------------
// for (const i of array) {
//     console.log(i)
// }
// for (let i=0;i < array.length;i++){
//     console.log(array[i]);
// }
// array.forEach((i,array) => {
//     console.log(array[i]);
// });
// ------------------------------------
// find length of array
const a=[1,2,3,4,5,6,7,8,9];
const arraylength =a.length;
console.log(arraylength)
console.log(a.length);
// ----------------------------------
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
// let elementtocheck = 9;
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
let elementtocheck =11;
if(array.includes(elementtocheck)){
    console.log("element to check is present  in the array");
}
else
{
    console.log('element to check is not present in the array');
}

// solution 3
// let array =[1,2,3,4,5,6,7,8,9,0]
// let elementtocheck =3;
// let elementtocheck =11;
if(array.find(element => element === elementtocheck)){
    console.log("element to check is present  in the array");
}
else
{
    console.log('element to check is not present in the array');
}

// --------------------------------------
// Javascript program to swap two elements in a array
// solution 1
// const array=[1,2,3,4,5,6,7,8,9,10];
// let temp =array[0];
// array[0]=array[1];
// array[1] =temp;
// console.log(array);

// solution 2
// function swapnumber(array, index1, index2){
//     if(index1 < 0 ||index1 >= array.length ||index2 <0 ||index2 >= array.length){
//         console.log("Invalid indices");
//         return;
//     }
//     // swap the number 
//     let temp =array[index2];
//     array[index2]=array[index1];
//     array[index1] =temp;
  
// }
// // console.log(array);
// let array =[1,2,3,4,5,6,7,8,9,0];
// console.log("array swap before :",array);
// // swap number at indices 1 and 3
// swapnumber(array, 1, 3);
// console.log("array swap before the array :",array);

// -----------------------------------------
// Javascript program to interchange first and last elements in a array
// solution 1
// const array1=[1,2,3,4,5];
// {
//  let temp =array1[0];
//  array1[0]=array1[array1.length - 1];
//  array1[array1.length - 1] = temp;
//  }
// console.log(array1);


// // solution 2
// function interchange(array)
// {
//     if(array.length < 2)
//     {
//         console.log("array should have at least two element ");
//         return;
//     }

//     let temp =array[0];
//     array[0]=array[array.length - 1];
//     array[array.length - 1] = temp;
// }
// let array=[1,2,3,4,5];
// console.log("original array :",array);
// interchange(array);
// console.log("interchange array :",array);
// ---------------------------------------
// How do you find the index of an element in an array
// solution 1
// var array =[1,2,3,4,5,6,7];
// let indexarray = array.indexOf(3);
// console.log(indexarray);