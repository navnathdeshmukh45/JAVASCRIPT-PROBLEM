// Javascript program to swap two elements in a array
// solution 1
// const array=[1,2,3,4,5,6,7,8,9,10];
// let temp =array[0];
// array[0]=array[1];
// array[1] =temp;
// console.log(array);

// solution 2
function swapnumber(array, index1, index2){
    if(index1 < 0 ||index1 >= array.length ||index2 <0 ||index2 >= array.length){
        console.log("Invalid indices");
        return;
    }
    // swap the number 
    let temp =array[index2];
    array[index2]=array[index1];
    array[index1] =temp;
  
}
// console.log(array);
let array =[1,2,3,4,5,6,7,8,9,0];
console.log("array swap before :",array);
// swap number at indices 1 and 3
swapnumber(array, 1, 3);
console.log("array swap before the array :",array);