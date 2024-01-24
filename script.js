// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// When the mouse is moving then circle is with that pointer
function circlemove(){
    window.addEventListener("mousemove",(dets)=>{
        document.querySelector("#circle").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px)`;
    })
}
circlemove();

// time
let time = document.getElementById("nowtime");
let date = new Date().toUTCString();
time.innerText = `${date}`
