// // // // create a variable of the type string and try to add a number to it
// // // let a="anushka"
// // // let b=6
// // // console.log(a+b)
// // // //  use typeof operato)rs to find the datatype of the string in the last question
// // // console.log(typeof (a+b))
// // // // create a const object in javascript. can you chnage it to hold a number later?
// // // const and={
// // //     name:"anushka",
// // //     section:1,
// // // }
// // // // try to add a new key to the const obejct in problem 3. were you able to do it?
// // // and['friend']="amanda"
// // // and['name']="anu"
// // // console.log(and)
// // // // write a js program to crate a word meaning dictionary of 4 words
// // // const dict ={
// // //     appreciate:"recognize the full worth",
// // //     today:"i am feeling happy",
// // //     mind:"my head is roaming",
// // //     yaka:"work, especially hard work"
// // // }
// // // console.log(dict.yaka) // or console.log(dict['yaka])

// // // operators and expressions
// // console.log("operators in js")
// // let a=10;
// // let b=4;
// // console.log("a-b =",a-b)// print garda kheri string lekheko print garcha, ra opration chai perform huncha
// // console.log("a%b", a%b)
// // console.log("a++ =", ++a)// result ma 10 dekhaucha beacuse + add garda suru ma 10 nei huncha
// // console.log("a =", a)// ani aba + add gare pachi 11 huncha
// // console.log("a-- =", a--)
// // let a=1;
// // a +=5 // same as a= a+5
// //  console.log(a)
// let comp1=6;
// let comp2="6";
// console.log("comp1==comp2", comp1 == comp2)
// console.log("comp1!=comp2", comp1 != comp2)
// console.log("comp1===comp2", comp1 === comp2)// valye equal ho tara type farak cha
// console.log("comp1!==comp2", comp1 !== comp2)
// let c=5;
// let b=8;
// console.log(c<b && c==5) // true true= true, true false= false
// console.log(c<b || c==5)
// console.log(!false)// true to false, false to true
// /* this is amulti line comment in js */
// // this is a single line comment

// conditional expressions
// let a=prompt("he whats your age?")
// a= Number.parseInt(a) // converting the string to a number

// let a= prompt ("enter you age:");
// if (a>=10 && a<=20){
//     console.log("the person age is between 10 and 20");
// }
// else{
//     console.log("the persona ge is not between 10 and 20")
// };
// let a= prompt("enter the age");
// if (a>10 &&  a<=20){
//      console.log("the age lies between 10 and 20");
// }
// else{
//     console.log("the age doesn't lies between 10 and 20");
// }
//while loops
// let n=prompt("enter the value of n")
// let i=0;
// while(i<n){35
//     console.log(n);
//     i++;
// }
//functions in javascripts
const hello=()=>{
    console.log("hello hi")
   
}
function averageOfSum(x, y) {
    console.log("Done");
    return (x + y) / 2;
}
 const sum=(p,q)=>{
    return p+q;
 }
let a=1;
let b=2;
let c=3;
hello();

console.log("average of a+b is", averageOfSum(a, b));  
console.log("average of b+c is", averageOfSum(b, c)); 
console.log("average of a+c is", averageOfSum(a, c));
console.log(sum(5,6))



