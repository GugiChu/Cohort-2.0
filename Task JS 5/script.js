// let h1 = document.querySelector('h1');
// h1.innerHTML = "Who are you?"; // change html
// h1.style.color = 'red'; // change css
// h1.style.backgroundColor = 'lightblue';
// h1.style.fontFamily = 'Lucida Grande';
// h1.style.fontWeight = 100;
// h1.style.fontSize = '15px';
// h1.addEventListener('click' , ()=>{
//     console.log("changed!!");
//     h1.innerHTML = "I'm GugiChu";
//     h1.style.color = "white";
//     h1.style.backgroundColor = "skyblue";
//     h1.style.fontWeight = 100;
//     h1.style.fontSize = '15px';
// });

let h2 = document.querySelector('h2');
let increase = document.querySelector('#i');
let decrease = document.querySelector('#d');

let a = 0

display = 0;
decrease.addEventListener('click', () => {
    a--;
    h2.innerHTML = a
    console.log("success decrement");
})
increase.addEventListener('click', () => {
    a++;
    h2.innerHTML = a
    console.log("success increament");
})

// Done
