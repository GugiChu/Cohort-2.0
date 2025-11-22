let c1 = document.querySelector('.c1');
let d1 = document.querySelector('.d1');
let e1 = document.querySelector('.e1');
let f1 = document.querySelector('.f1');
let g1 = document.querySelector('.g1');
let a1 = document.querySelector('.a1');
let b1 = document.querySelector('.b1');
let c2 = document.querySelector('.c2');
let d2 = document.querySelector('.d2');

let cs1 = document.querySelector('.cs1');
let ds1 = document.querySelector('.ds1');
let fs1 = document.querySelector('.fs1');
let gs1 = document.querySelector('.gs1');
let as1 = document.querySelector('.as1');
let cs2 = document.querySelector('.cs2');
let ds2 = document.querySelector('.ds2');


let sound28 = new Audio('mp3/28.mp3');
let sound29 = new Audio('mp3/29.mp3');
let sound30 = new Audio('mp3/30.mp3');
let sound31 = new Audio('mp3/31.mp3');
let sound32 = new Audio('mp3/32.mp3');
let sound33 = new Audio('mp3/33.mp3');
let sound34 = new Audio('mp3/34.mp3');
let sound35 = new Audio('mp3/35.mp3');
let sound36 = new Audio('mp3/36.mp3');
let sound37 = new Audio('mp3/37.mp3');
let sound50 = new Audio('mp3/50.mp3');
let sound51 = new Audio('mp3/51.mp3');
let sound52 = new Audio('mp3/52.mp3');
let sound53 = new Audio('mp3/53.mp3');
let sound54 = new Audio('mp3/54.mp3');
let sound55 = new Audio('mp3/55.mp3');
let sound56 = new Audio('mp3/56.mp3');



document.addEventListener('keydown', (dets) => {
    console.log(dets.code);

    if (dets.code === 'KeyZ') {
        sound28.currentTime = 0;
        sound28.play();
        c1.style.backgroundColor = '#999'
        setTimeout(() => { c1.style.backgroundColor = 'white' }, 200);

    } else if (dets.code === 'KeyX') {
        sound29.currentTime = 0;
        sound29.play();
        d1.style.backgroundColor = '#999'
        setTimeout(() => { d1.style.backgroundColor = 'white' }, 200);

    } else if (dets.code === 'KeyC') {
        sound30.currentTime = 0;
        sound30.play();
        e1.style.backgroundColor = '#999'
        setTimeout(() => { e1.style.backgroundColor = 'white' }, 200);

    } else if (dets.code === 'KeyV') {
        sound31.currentTime = 0;
        sound31.play();
        f1.style.backgroundColor = '#999'
        setTimeout(() => { f1.style.backgroundColor = 'white' }, 200);

    } else if (dets.code === 'KeyB') {
        sound32.currentTime = 0;
        sound32.play();
        g1.style.backgroundColor = '#999'
        setTimeout(() => { g1.style.backgroundColor = 'white' }, 200);

    } else if (dets.code === 'KeyN') {
        sound33.currentTime = 0;
        sound33.play();
        a1.style.backgroundColor = '#999'
        setTimeout(() => { a1.style.backgroundColor = 'white' }, 200);

    } else if (dets.code === 'KeyM') {
        sound34.currentTime = 0;
        sound34.play();
        b1.style.backgroundColor = '#999'
        setTimeout(() => { b1.style.backgroundColor = 'white' }, 200);

    } else if (dets.code === 'Comma') {
        sound35.currentTime = 0;
        sound35.play();
        c2.style.backgroundColor = '#999'
        setTimeout(() => { c2.style.backgroundColor = 'white' }, 200);

    } else if (dets.code === 'Period') {
        sound36.currentTime = 0;
        sound36.play();
        d2.style.backgroundColor = '#999'
        setTimeout(() => { d2.style.backgroundColor = 'white' }, 200);

    } else if (dets.code === 'KeyA') {
        sound50.currentTime = 0;
        sound50.play();
        cs1.style.top = '2px';
        setTimeout(() => { cs1.style.top = 0 }, 200);
    } else if (dets.code === 'KeyS') {
        sound51.currentTime = 0;
        sound51.play();
        ds1.style.top = '2px';
        setTimeout(() => { ds1.style.top = 0 }, 200);
    } else if (dets.code === 'KeyF') {
        sound52.currentTime = 0;
        sound52.play();
        fs1.style.top = '2px';
        setTimeout(() => { fs1.style.top = 0 }, 200);
    } else if (dets.code === 'KeyG') {
        sound53.currentTime = 0;
        sound53.play();
        gs1.style.top = '2px';
        setTimeout(() => { gs1.style.top = 0 }, 200);
    } else if (dets.code === 'KeyH') {
        sound54.currentTime = 0;
        sound54.play();
        as1.style.top = '2px';
        setTimeout(() => { as1.style.top = 0 }, 200);
    } else if (dets.code === 'KeyK') {
        sound55.currentTime = 0;
        sound55.play();
        cs2.style.top = '2px';
        setTimeout(() => { cs2.style.top = 0 }, 200);
    } else if (dets.code === 'KeyL') {
        sound56.currentTime = 0;
        sound56.play();
        ds2.style.top = '2px';
        setTimeout(() => { ds2.style.top = 0 }, 200);
    }else{
        console.log('press right key')
    }


});
