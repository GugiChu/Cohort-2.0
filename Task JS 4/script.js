// 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)

// 1. Create a function that prints "Hello Javascript".
// function a(){
//     console.log("Hello Javascript")
// }
// a()

// 2. Create a function that takes two numbers as parameters and returns their sum.
// let call = (a,b)=>{
//     return a + b
// }
// console.log(call(2,6))

// 3. Make a function with a default parameter that prints "Hi" followed by the name passed to it. If no name is passed, it should print "Hi Guest".
// function wlcm(name = "Guest"){
// return `Welcome ${name}`
// }
// console.log(wlcm()) // Welcome Guest
// console.log(wlcm("Gugi")) // Welcome Gugi

// 4. Use rest parameters to make a function that adds unlimited numbers.
// function add(...nums){
//     return arr.reduce((acc,val)=>acc+val,0)
// }
// let arr = [1,2,3,4,5,6,7,8,9,0]
// console.log(add(arr))

// 5. Create an IIFE that prints "I run instantly!".
// (()=>{
//     console.log("I run instantly!")
// })();

// 6. Make a nested function where the inner one prints a variable from the outer one.
// function parent(){
//     let a = 10;
//     function child(){
//         console.log(a)
//     }
//     child();
// };
// parent();

// 7. Create an array of 5 fruits. Add a fruit to the end and another to the beginning.
// let arr = ["orange" , "banana" , "apple" , "guava" , "lichi"];
// console.log(arr);
// arr.unshift("pineapple");
// arr.push("custard apple");
// console.log(arr);

// 8. Use a for loop to print all elements of an array.
// let arr = ["orange" , "banana" , "apple" , "guava" , "lichi" , "custard apple"]
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i])
// };

// 9. Create an object person with keys name, age and city and print each key's value.
// let obj = {
//     name: "Gugi",
//     age: 16,
//     isEnrolled: true,
// };
// for (let key in obj) {
//     console.log(obj[key]);
// }

// 10.Use setTimeout to log "Time's up!" after 2 seconds.
// function mess(name){
//     console.log("Welcome", name)
// };
// setTimeout(mess , 2000 , "Gugi")


// 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)


// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
// function runTwice(fn){
//     fn();
//     fn();
// }
// function a(){
//     console.log("Hellow!")
// }
// runTwice(a)

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
// function pure(a,b){
//     console.log(a+b)
// };
// let global = 0;
// function impure(a){
//     global++;
//     console.log(global+a)
// };
// pure(1,1) // 2
// impure(1) // 2

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
// let obj = {
//     name : "GugiChu",
//     age : 17
// }
// function abcd({name,age}){
//     console.log(name);
//     console.log(age)
// }
// abcd(obj);

// 4. Demonstrate the difference between normal
// function and arrow function when used as object
// methods (the `this` issue).
// console.log(this) // window 
// let obj = {
//     name : "GugiChu",
//     fnc1 : function abcd(){
//         console.log(this)
//     },
//     fnc2 : ()=>{
//         console.log(this)
//     }

// }
// obj.fnc1()
// obj.fnc2()

// 5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.
// let arr = [1,2,3,4,5,6,7,8,9,0]
// let newarr = arr.map(a => a*a)
// console.log(newarr)

// 6. Use `filter()` to get only even numbers from an
// array.
// let arr = [1,2,3,4,5,6,7,8,9,0]
// arr.filter((a)=>{
//     if(a%2===0){
//         console.log(a)
//     }
// })

// 7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.
// let arr = [1000,2000,3000]
// console.log(arr.reduce((acc,val)=>acc+val,0))

// 8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).
// let arr = ["Ram" , "Adi" , "GugiChu" , "Mudit" , "la"];
// arr.some((...a)=>{
//     console.log(a.length === 3)
// });
// arr.every((...a)=>{
//     console.log(a.length === 3)
// }); 

// 9. Create an object `user` and test the behavior of
// `Object.freeze()` and `Object.seal()` by
// adding/changing keys.
// let obj = {
//     user : "JAIP4358"
// };
// Object.freeze(obj); // no change in key value and cannot add new key 
// Object.seal(obj) // can change key value but cannot add new key 
// obj.user = null 
// obj.pass = "hello123"

// 10. Create a nested object (`user → address → city`) and
// access the city name inside it.\
// let obj = {
//     user : {
//         address : {
//             city : "Bhopal"
//         }
//     }
// };
// console.log(obj.user.address.city);