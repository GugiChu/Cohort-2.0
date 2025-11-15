let screen = document.querySelector('.screen');
let btn = document.querySelector('.btn');

const arr = [
    "https://i.pinimg.com/736x/f5/f1/48/f5f148a2cc03c029eaa7dd3ce13d933e.jpg",
    "https://i.pinimg.com/736x/be/53/08/be5308b226f34643f582b4b76e82da42.jpg",
    "https://i.pinimg.com/736x/8a/9f/55/8a9f55cc6d36b7ddb9e3000e1ff01503.jpg",
    "https://i.pinimg.com/736x/6a/d2/3e/6ad23ebbc690d4bf22116430d9fa204f.jpg", 
    "https://i.pinimg.com/736x/22/88/b7/2288b73471bdebd3cb7c5610c47481c1.jpg"
];

btn.addEventListener('click', ()=>{
    // Color Changer
    // let r = Math.floor(Math.random()*257)
    // let g = Math.floor(Math.random()*257)
    // let b = Math.floor(Math.random()*257)
    // screen.style.backgroundColor = `rgb(${r},${g},${b})`
    // console.log(`rgb(${r},${g},${b})`)

    let char = Math.floor(Math.random()*5) 
    console.log(char)
    screen.style.backgroundImage = `url(${arr[char]})`
})

// Done