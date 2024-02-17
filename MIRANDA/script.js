const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let tl = gsap.timeline();

tl.to("#page-1",{
    y:"100vh",
    scale:0.5,
    duration:0
})

tl.to("#page-1",{
    y:"30vh",
    duration:1,
    delay:0.6
})

tl.to("#page-1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})