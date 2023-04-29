let a=[1,2,3,4,null, false, "Not persent"]
console.log(a)

//accessing values
console.log(a[0]) 
console.log(a[1])
console.log(a[7])

//findint length
console.log("The length of a is",a.length)

//changing the values in array
a[7]="hello"

//changing the element in existing array values
a[0]=22
console.log(a)
console.log(a)
console.log(typeof a) //in javascript arrays are object

let alu=["abc",234,31,41,null, false, "Not persent"]
for (i=0;i<alu.length;i++){
console.log(alu[i])
}

//array methods
let num=[1,2,3,4,5]
let b=num.toString()// b is now a string
console.log(b)

//join() -joins every element 
let c=num.join("_")
console.log(c, typeof c)

//pop() - removes the last element in arrya
num.pop()
console.log(num)

//push() - adds the new element at the end of array return the new array length
let r=num.push(24)
console.log(num,r)

//shift() - removes the first element and returns it
let d=num.shift()
console.log(num)

//unshift()- adds an element at the start of the array
//returns with new array lenght
let er=num.unshift(123)
console.log(er,num)






