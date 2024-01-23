// Javascript program to interchange first and last elements in a array
// solution 1
const array1=[1,2,3,4,5];
{
 let temp =array1[0];
 array1[0]=array1[array1.length - 1];
 array1[array1.length - 1] = temp;
 }
console.log(array1);


// solution 2
function interchange(array)
{
    if(array.length < 2)
    {
        console.log("array should have at least two element ");
        return;
    }

    let temp =array[0];
    array[0]=array[array.length - 1];
    array[array.length - 1] = temp;
}
let array=[1,2,3,4,5];
console.log("original array :",array);
interchange(array);
console.log("interchange array :",array);
