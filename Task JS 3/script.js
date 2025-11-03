// Level 1 – Pure Beginner Practice
// 1. print numbers from 1 to 10  loop from 1 to 10 and print each numbers.
// for (i = 1; i < 11; i++) {
//     console.log(i)
// }

// 2. print only even numbers from 1 to 20 use loop and conditions to print even ones.
// for(i=2; i<21; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// 3 .print numbers from 10 to 1 reverse loop with a decrement.
// for (i = 10; i > 0 ; i--) {
//     console.log(i)
// }

// 4. print the word "yes" 5 times repeat using a loop.
// for(i=0; i<5; i++){
//     console.log("Yes")
// }

// 5. print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd".
// for(i=1; i<11; i++){
//     if(i%2===0){
//         console.log(`${i} is even`)
//     }else{
//         console.log(`${i} is odd`)
//     }
// }

// 6.ask user for a number and say if its  positive or negative  use prompt() and a condition.
// let userinput = parseInt(prompt("Enter a Number"))
// if (userinput > 0) {
//     console.log("Positive No.")
// }else{
//     console.log("Negetive No.")
// }


// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”
// let age = prompt("Enter Your Age:")
// if (age === null) {
//     console.error("You Pressed cancel")
// } else if (isNaN(age) || age.trim() === "" || age < 0) {
//     console.warn("Dhang Se Likh")
// }else if (age > 100) {
//     console.warn("Mujhe pagal smjha hein kya")
// } else if (age > 18) {
//     console.log("Eligible")
// } else if (age < 18) {
//     console.warn("Leave the site immediately ; Reason : Minor")
// }else if (age < 100) {
//     console.log("Please give some proof to verify your age")
// }

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${5 * i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// let count = 0
// for (i = 1; i<16; i++ ){
//     if(i>8){
//         count++
//     }
// }
// console.log(`There is total ${count} no. which are grater than 8 from 1 to 15`)

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// const hardcoded = "Happy123"
// let pass = promp("Enter Your Password")
// if(hardcoded === pass){
//     console.log("Access Granted")
// }else{
//     console.error("Access Denied")
// }

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password

// Approach 1
// If user gets it right early, stop. If not → “Account locked”
// let pass = "hello123"
// let attempt1 = prompt("Enter Your Password (Attempt left : 3)")
// if(attempt1 !== pass){
//     let attempt2 = prompt("Password is Incorrect , Try Again ; (Attempt Left : 2)")
//     if( attempt2 === pass){
//         console.log("Access Granted")
//     }else if(attempt2 !== pass){
//         let attempt3 = prompt("Password is Incorrect , Try Again ; (Attempt Left : 1)")
//     if( attempt3 === pass){
//         console.log("Access Granted")       
//     }else if(attempt3 !== pass){
//         let attempt4 = prompt("Password is Incorrect , Try Again ; (Attempt Left : 0)")
//     if( attempt4 === pass){
//         console.log("Access Granted")
//     }else if(attempt4 != pass){
//         console.error("Account Blocked")
//     }
// }}}

// Approach 2
// let pass = "hello123";
// for (let i = 3; i > 0; i--) {
//   let input = prompt(`Enter password (Attempts left: ${i})`); 
//   if (input === pass) {
//     console.log("Access Granted");
//     break;
//   } 
//   if (i === 1) console.error("Account Blocked");
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
// let count = 0
// for(;;){
//     let input = prompt("Enter yes/stop")
//     if(input === "yes"){
//         count++
//     }
//     if(input === "stop"){
//         break;

//     }
// }
// console.log(`you have entered "Yes" ${count} times`)

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// for(i = 1 ; i < 51 ; i++){
//     if(i%7===0){
//         console.log(i)
//     }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let odd = 0
// for(i=1;i<30;i++){
//     if(i%2!==0){
//         odd = odd + i

//     }
// }console.log(odd)

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// let input = Number(prmpt("enter a number:"))
// while(true){
//     if(input%2===0){
//         input = Number(prompt("enter a number:"))
//     }else{
//         console.log("You Have Entered A Odd Number")
//         break;
//     }

// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// let a = Number(prompt("Enter Starting No."))
// let b = Number(prompt("Enter Ending No."))
// for(i = a ; i<b ; i++ ){
//     console.log(i)
// }

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// for (i = 1; i < 21; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//         if (i > 3) {
//             break;
//         }
//     }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// let positive = 0
// for(i = 1; i<6; i++){
//     let input = Number(prompt(`Enter ${i} Number`))
//     if(input>0){
//         positive++
//     }
// }console.log(positive)

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
// let bal = 1000
// for(i = 0; i<3; i++){
//     let withdrawal = Number(prompt("Enter Your withdrawl Amount:"))
//     if(bal !==0){
//         bal = bal - withdrawal
//     }else{
//         console.log("Insufficient Balance")
//     }
// }console.log(`balance left : ${bal}`)



