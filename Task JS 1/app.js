// 1. Open any website → right-click → Inspect → Console → type: document.title

// 2. Try: alert(“Hello from Sheryians!”)
// alert('Hello from Sheryians!')

// 3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what is JS?”
// Ans : Brain

// 4. Write one example of where you’ve seen JS being used (like popup, animation, etc.)
// Ans : Form Validation (Age , email , etc.)

// 5. Create an HTML file and link JS file like this:

// 6 In app.js, write: console.log(“Connected!”)
// console.log("Connected!!")

// 7. Move the script tag to the section and see what happens.

// 8. Try using defer:

// 9. Open console and type: 2 + 2

// 10. Type: alert(“Hi”)

// 11. Try: prompt(“Your name?”)

// 12. Type: let city = “Bhopal”; city

// 13. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c= “School”
// var a = "Gugi"
// let b = "Sheryians"
// const c = "School"

// 14. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
// var a = "GugiChu"
// b = "Sheryjs" // possible
// const c = "college" // error
// console.log(a)
// console.log(b)
// console.log(c)

// 15. Create a variable inside curly braces using let and log it outside.
// {
//     let a = "Shery"
//     var b = "Sher"
//     const c = "Sheryians"
// }

// 16. Predict output before running.
// console.log(a) //  Error
// console.log(b) // Working
// console.log(c); // Error

// 17. Write 3 examples where const is useful (like PI, baseURL, etc.)
// Ans: DOB , userId/userToken , E-mail ID , User Phone No. 

// 18. Log name, age, and city using console.log, console.info, console.warn.
// let Name = "Gugi"
// let age = Infinity
// let city = null
// console.log("Your Name Is",Name)
// console.error("Your Age Is",age)
// console.warn( "Your City Is",city)

// 19. Use prompt to take user’s name → alert a welcome message.
// let a = prompt("Enter Your Name")
// alert(`Welcome ${a}`)

// 20. Log typeof of user’s input.
// let a = prompt("Enter Your Name")
// console.log(typeof(a))

// 21. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what happens.
// let age = Number(prompt("Enter Your Age")) // Use Number + sign
// let a = prompt("Enter Your Age")
// console.log(age+5)
// console.log(a+5)

// 22. let msg = “I love Sheryians”;
// let msg = "I love Sheryians"

// 23. Try msg.slice(2, 6) and predict the result.
// console.log(msg.slice(2,6)) // love

// 24. Try msg.split(” “) and count words.
// console.log(msg.split('')) // create a array with every single element
// console.log(msg.length)

// 25. Try msg.replace(“love”, “study at”).
// console.log(msg.replace("love","hate")) // I hate sheryians

// 26. Template string example: let name = “Harsh”; console.log(Hey ${name}, welcome to JS!)
// let name = "Gugi"
// console.log(`Hey ${name}, Welcome to sheryians`)

// 27. Check if msg.includes(“love”)
// if(msg.includes("love")){
//     console.log("Haan Bhaii haan")
// }else{
//     console.log("Nhiiiiiiii")
// }

// 28. Remove semicolon and check if code still runs.
// console.log("hellowww"); // Runs
// console.log("hellowww") // Runs

// 29. Combine two statements in one line and see if it breaks.
// let a = 20; let b = 30; console.log(a+b) // Importance of semicolons


// 30. Write 3 console.log statements without semicolons and predict output.
// console.log("hellowww") // Runs
// console.log("hellowww") // Runs
// console.log("hellowww") // Runs

// 31. Write your name as a single-line comment.
// My Name Is GugiChu

// 32. Write a 3-line comment explaining what your code does.
/*
This Code Is Solving The Questions.
The Questions Are Given By Harsh Bhaiyaa.
The Questions Are COOL!!.
*/

// 33. Hide one console.log using comment and check output.
// console.log("Hellowwww") // No Output If Commented.

// 34. Type 5 + 10 (expression).
// 5+10;

// 35. Type let x = 10; (statement).
// let x = 10;

// 36. Which one gives a value immediately?
// Expression 

// 37. Try: let y = (5 + 10) * 2; console.log(y)
// let y = (5+10)*2 ; console.log(y)

// 38. Write one line explaining the difference between both.
// An Expresssion gives a value while statement takes a action.

// 39. let age = 25; let name = “Harsh”; let isStudent = true; let skills = [“JS”, “HTML”]; let user = { city: “Bhopal” }; let x = null; let y; let z = Symbol(“id”)
// let age = 25; // Number
// let name = "Harsh"; // String
// let isStudent = true; // Boolean
// let skills = ['JS', 'HTML']; // Object
// let user = { city: 'Bhopal' }; // Object
// let x = null; // Object
// let y; // Undefined
// let z = Symbol('id') // Symbol

// 40. Log typeof each variable.
// console.log(typeof(age))
// console.log(typeof(name))
// console.log(typeof(isStudent))
// console.log(typeof(skills))
// console.log(typeof(user))
// console.log(typeof(x))
// console.log(typeof(y))
// console.log(typeof(z))

// 41. Change one value and recheck typeof.
// No Change in Typeof

// 42. Try adding a number and string together.
// let str = "6"
// let num = 9
// console.log(str+num) // 69 => String

// 43. Log 1 / 0, 0 / 0, Number(“abc”), undefined + 1
// console.log(1/0) // infinity
// console.log(0/0) // NaN
// console.log(Number("abc")) // NaN
// console.log(undefined + 1) // NaN

// 44. Write what appears (Infinity, NaN, etc.)
// Infinity , NaN , NaN , NaN

// 45. Write one line explaining when to use null vs undefined.
// Use null when you intentionally want to show an empty or missing value, and undefined when a variable has been declared but not assigned any value yet.

// 46. let x = 5; let y = x; y = 10; console.log(x, y)
// let x = 5
// let y = x
// y = 10 
// console.log(x,y) // 5,10 (Primitive Value)

// 47. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”; console.log(obj1.name)
// let obj1 = { name: "Harsh" }; 
// let obj2 = obj1; 
// obj2.name = "Sheryians"; 
// console.log(obj1.name) // Sheryians (Reference Value)


// 48. Observe which one changes together.
// obj1 and obj2 is changing togeather

// 49. Draw memory boxes on paper to visualize difference.
// x ──► [ 5 ]
// y ──► [10]
// obj1 ─┐
//       ▼
//    { name: "Sheryians" }  ←─── obj2












