let loadingttext = document.querySelector('.loading-text');
let progressbar = document.querySelector('.progress-fill');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    button.style.PointerEvent = 'none';
    button.innerHTML = 'Downloading';
    let num = 50 + Math.floor(Math.random() * 50);
    console.log('Your file will be downloaded in', num / 10, 'seconds');
    let a = 0;
    let int = setInterval(() => {
        a++
        progressbar.style.width = `${a}%`;
        loadingttext.innerHTML = `Loading...${a}%`
    }, num);
    setTimeout(() => {
        clearInterval(int)
        button.innerHTML = 'Downloaded'
    }, num * 100)
})

