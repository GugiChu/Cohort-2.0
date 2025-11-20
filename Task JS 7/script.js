let div = document.createElement('div') // created div element
let main = document.querySelector('main') // selected main tag
main.appendChild(div) // injected div tag in main tag
div.innerHTML = 'Click Me!'
const arr = [
  "Code. Sleep. Repeat.",
  "Eat, Code, Debug.",
  "Hello World!",
  "Less talk, more code.",
  "Keep it simple.",
  "Bug is my buddy.",
  "Trust the process.",
  "Think twice, code once.",
  "Code never lies.",
  "Stay curious, stay coding."
];

div.addEventListener('click', ()=>{
    let p = document.createElement('p') // created p element
    main.appendChild(p) // injected div tag in main tag
    let ran1 = Math.floor(Math.random()*10)  
    let ran2 = Math.floor(Math.random()*100)  
    let ran3 = Math.floor(Math.random()*100)  
    p.innerHTML = arr[ran1] 
    p.style.left = `${ran2}%`
    p.style.top = `${ran3}%`
})

