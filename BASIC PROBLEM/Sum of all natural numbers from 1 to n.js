// Sum of all natural numbers from 1 to n
function sum(num){
    let sum = 0;
    for(let i =1; i<=num;i++){
        sum =sum +i;
    
    }
    return sum;
}
console.log(sum(6));
console.log(sum(5));
console.log(sum(16));
console.log(sum(10));