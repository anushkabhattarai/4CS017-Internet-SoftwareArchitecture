let a=[1,2,3,4,null, false, "Not persent"]
console.log(a)

// //accessing values
console.log(a[0]) 
console.log(a[1])
console.log(a[7])

// //findint length
console.log("The length of a is",a.length)

// //changing the values in array
a[7]="hello"

// //changing the element in existing array values
a[0]=22
console.log(a)
console.log(a)
console.log(typeof a) //in javascript arrays are object

let alu=["abc",234,31,41,null, false, "Not persent"]
for (i=0;i<alu.length;i++){
console.log(alu[i])
}

// //array methods
let num111=[1,2,3,4,5]
let b=num111.toString()// b is now a string
console.log(b)

// //join() -joins every element 
let c=num.join("_")
console.log(c, typeof c)

// //pop() - removes the last element in arrya
num.pop()
console.log(num)

// //push() - adds the new element at the end of array return the new array length
let r=num.push(24)
console.log(num,r)

// //shift() - removes the first element and returns it
let d=num.shift()
console.log(num)

// //unshift()- adds an element at the start of the array
// //returns with new array lenght
let er=num.unshift(123)
console.log(er,num)

//delete method
let anushka=[1,2,3,4,5]
delete anushka[0]
console.log(anushka.length)
console.log(anushka)

let num12=[1,2,3,4,4]
let num21=[3,4,5,6,7]
console.log(result)
let newArray=num12.concat(num21)
console.log(newArray)
let compare=(a,b)=>{
    return a-b
} 

let num1=[551,23,3,14,5,6,7,289]
num1.sort()
console.log(num1)
let num=[551,23,3,14,5,6,7,289]
num.reverse()
console.log(num)

//splice and slice
//splice ()= can be used to add new item to an array
const numbers=[1,4,5,7,8,91,51,43]
numbers.splice(3,2,1001,1002)
console.log(numbers)

//slice()
const numbers2=[1,4,5,7,8,91,51,43]
let newNum=numbers2.slice(3,6)
console.log(newNum)







