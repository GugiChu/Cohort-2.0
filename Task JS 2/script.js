// 1. Create two numbers a = 10 and b = 3. Perform and log: a + b, a - b, a * b, a / b, a % b.
// let a = 10
// let b = 3
// console.log(a+b,a-b,a*b,a/b,a%b)

// 2. Write: let x = 5; x = x + 3; Now rewrite the same using +=. Do the same for -=, *=, /=.
// let x = 5
// console.log(x = x + 3)
// console.log(x = x += 3)
// console.log(x= x -= 3)
// console.log(x= x *= 3)
// console.log(x= x /= 3)

// 3. let count = 5; Use count++ and log value before and after. Repeat for count–.
// let count = 5
// console.log(count)
// count++
// console.log(count)
// let count = 5
// console.log(count)
// count--
// console.log(count)

// 4. Compare two values: 5 == “5” and 5 === “5”. Observe difference.
// console.log(5 == "5") // True, not sctrict comparision
// console.log(5 === "5") // False, stcict comparision

// 5. Check if 10 is greater than 5, less than 20, and equal to 10.
// console.log(10>5) // true
// console.log(10<20) // true
// console.log(10===10) // true

// 6. Try logical AND and OR: true && false, true || false, !(true)
// console.log(true&&true) // true
// console.log(true&&false) // false
// console.log(false&&false) // false
// console.log(true||true) // true
// console.log(true||false) // true
// console.log(false||false) // false
// console.log(!(false)) // true
// console.log(!(true)) // false

// 7. Predict the result of: (5 > 3 && 10 > 8), (5 > 3 || 10 < 8)
// console.log(5 > 3 && 10 > 8) // true
// console.log(5 > 3 || 10 < 8) // true

// 8. Predict output of: console.log(a); var a = 10
// console.log(a) // undefined
// var a = 10 

// 9. Predict output of: console.log(b); let b = 10
// console.log(b); let b = 10 // connot access b before initialization

// 10. Predict output of: test() function test() { console.log(“Hello”) }
// test()
// function test() {
//     console.log("Hello")
// } // function ka koi tdz nhi hota 
// output : "Hello"

// 11. Try writing a function expression before initialization and call it: Write what happened and why.
// hello()
// var hello = function () {
//     console.log("Hi")
// } // output : hello is not a function
// because hello is not a function it is a variable

// 12. Write one sentence: What gets hoisted? What does not get hoisted fully?


// a. Take input using prompt for age. If age > 18 → log “Adult”. Else → log “Minor”.
// let age = prompt("Enter Your Age")
// if(age>=18){
//     console.log("Adult");
// }else{
//     console.log("Minor")
// }

// b. Write a program:
// let marks = prompt("Enter Your Marks")
// if(marks >= 90){
//     console.log("Grade A");   
// }else if (marks >= 75){
//     console.log("Grade B"); 
// }else if (marks >= 50){
//     console.log("Grade C")
// }else{
//     console.log("Fail");   
// }


// c. Create a variable 
// const city = "Bhopal"
// if(city==="Bhopal"){
//     console.log("MP");    
// }else if(city==="Delhi"){
//     console.log("Capital");  
// }else{
//     console.log("Another City");   
// }


// d. Use ternary operator:
// let score = 40.
// console.log(score > 35 ? "Pass" : "Fail")

// e. Convert this if-else into a ternary: if (temperature > 30) { “Hot” } else { “Pleasant” }
// let temperature = 45
// console.log(temperature > 30 ? "Hot" : "Pleasant")

// f. Write a switch case: Take day number (1 to 7). Print the day name. Default case: “Invalid Day”.
// let daynum = Number(promp("Enter Day Number"))
// switch (daynum){
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Error")
// }

// g. Using logical operators in condition: If age > 18 and country === “India” → log “Eligible for Vote” Else → “Not Eligible”
// let age = 20
// let country = "India"
// if(age > 18 && country === "India"){
//     console.log("Eligible For Vote")
// }else{
//     console.log("Not eligible")
// }



