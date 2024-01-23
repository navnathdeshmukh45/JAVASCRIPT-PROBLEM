// To print 
console.log("Hello world");
// alert("hello bahi");
// document.getElementById(my);
// window.alert("hello sir");
// console.clear();
// document.getElementsByTagName('p');
// let html = document.getElementById(my).innerHTML;
// document.getElementById("my").innerHTML = html;

// In html page used this tag 
/* <script>
</script> */

// js file link
//<script type="text/javascript" src="variable.js"></script>

// variables--->store data
// let name="ram";
// var a = "shree";
// const b=45;
// console.log(a,b,name);

// To data type 
// To number 
let num = 20;
let float=16.00;
console.log(num ,float);

// To string 
let name1 ="Ram";
let name2= false;
console.log(name1);
console.log(name2);

// TO object 
let person={
    name:"ram",
    age:34,
    city:"pune"
};
console.log(person);

// To array 
let array =[1,2,3,4,5,6,7,8,9,0];
console.log(array);

// undfine 
let name4 ;
console.log(name4);

// To null
let name5 = null;
console.log(name5);

// string 
// simple string
x = "Navnath"
y = "Priya"
z ="Deshmukh"
console.log(x);
console.log(z + " "+ y + " " + x);//To concatination
console.log((x[0]));//To access chracter by index 
console.log((x.length));//To check length of string
console.log((x.toUpperCase()));//uppercase 
console.log(y.toLowerCase());//lowercase
console.log(x.indexOf('n'))//To Find the indexof string
console.log(x.includes('a'))//includes to check 
console.log(x.trim());//To remove white space at start and end
console.log(x.slice(1,3)) //slice
console.log(x.split()); //split

// typeof
let age = 20;
let address= {};
let names = "Ram";
let city =[];
let course;
console.log(typeof age);
console.log(typeof address);
console.log(typeof names);
console.log(typeof city);
console.log(typeof course);


// array -->
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
console.log(x);

// for loop using array
for(let i=0;i<x2.length;i++){
console.log(x2[i]);
}

// while loop using array
let i=0;
while(i<x2.length){
    console.log(x2[i]);
    i++;
}
// do while loop using array
var t =0;
do{
    console.log(x2[t]);
    t++;
}while(t<=x2.length)

// for in loop using array
for(i in x2)
{
    console.log(x2[i]);
}

// for of loop using array
for (const i of x2) {
    console.log(x2[i]);
}

// for each loop using array
array.forEach((i,x2) => {
    console.log(x2[i]);
});


// Switch Case 
// var code="in";
// switch(code){
//     case "in":
//         console.log("India");
//         break;
//     case "US" :
//         console.log("United States");
//         break;
//     case "uk":
//         console.log("uk");
//         break;
//     default :
//         console.log("not match");    
// }


// // condition
// var j=56;
// if(50<=j){
//     console.log("true");
// }
// else if(j==56)
// {
//     console.log("false");
// }
// else
// {
//     console.log("true")
// }

// function
function ds()
    {
    console.log("a,b,c");
    }
ds();

function sum1(a,b,c)
    {
    console.log(a + b + c);
    }
sum1(2,3,4);