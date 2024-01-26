// How can you check if two arrays are equal

// solution 1
arr1 = [1,2,3];
arr2 = [1,2,3];
if(arr1 == arr2)
{
    console.log("flase");
}
else{
    console.log("true");
}

// solution 2
// const isArrayEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length){
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++){
//         if (arr1[i] !== arr2[i]){
//             return false;
//         }
//     }
//     return true;

//     // One Line solution
//     // return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i]);
// }

// console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));