//Write a function that takes two numbers as input and returns their sum.
// function addtwonumber(a,b){
//     return a+b;
// }
// let v=prompt("enter a number")
// let c=prompt("enter second number");
// // when taking the input the values are initially stored in
// // string so we have to conver to number thats is
// // parsInt or v=Number(V)
// v=Number(v)
// c=Number(c)
// result=addtwonumber(v,c)
// console.log("the sum is "+ result );

// write a function that takes a string as an input and return it length
// function takesstring(str){
//     return str.length;
// }
// let inputstring= prompt("enter a string");
// let length=takesstring(inputstring);
// console.log("the length of string is " +length);

//Write a function that takes an array of numbers as input and returns the average of those numbers.
// function calculateAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum =sum+ arr[i];
//     }
//     return sum / arr.length;
//   }
//   onsole.log(calculateAverage([1, 2, 3, 4, 5]));

//write a program to print the marks of a student in an object using for loop
// obj={harry;98,rohan;70, akasha:7} 
let marks={
  harry:90,
  rohan:70,
  akasha:7
} //for loop
for(let i=0;i<Object.keys(marks).length; i++){
  console.log("The marks of"+ Object.keys(marks)[i]+" are"+ marks[bject.keys(marks)[i]]);
}

//for in loop
for (let key in marks){
  console.log(console.log("The marks of"+key+" are"+ marks[key]))
}
//wap to print "try again" until the user enter the correct number
let cn=5;
while (i !=cn){
  let i=prompt("Enter a number")
  console.log("try again")
}
console.log("you entered correct number")

//wap to fin the mean of 5 number
const mean =(a,b,c,d,e)=>{
  return (a+b+c+d+e)/5
}
console.log(mean(4,5,6,7,8))


