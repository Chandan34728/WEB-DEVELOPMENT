function locomotiveAminations(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAminations();


// -------------------------------------------------------------------------------------------------------------------------

function animations(){
    gsap.to("#nav-part-2 #links",{
        transform:"translateY(-150%)",
        scrollTrigger:{
            trigger:"#page-1",
            opacity:0,
            scroller:"#main",
            start:"top 0",
            end:"top -10%",
            scrub:2
        }
    })
    
    gsap.from("#page-2 #elem-1",{
        x:-200,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page-2",
            scroller:"#main",
            start:"top 150%",
            end:"bottom 30%",
            scrub:5
        }
    })
    
    gsap.from("#page-2 #elem-2",{
        y:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page-2",
            scroller:"#main",
            start:"top 150%",
            end:"bottom 30%",
            scrub:5,
        }
    })
    
    gsap.from("#page-2 #elem-3",{
        x:200,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page-2",
            scroller:"#main",
            start:"top 150%",
            end:"bottom 30%",
            scrub:5
        }
    })
    
    gsap.from("#page-3 #container #left",{
        y:100,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:"#page-3",
            scroller:"#main",
            start:"top 50%",
            end:"top 100%",
            scrub:4
        }
    })
    
    gsap.from("#page-3 #container #right",{
        x:100,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:"#page-3",
            scroller:"#main",
            start:"top 50%",
            end:"top 100%",
            scrub:4
        }
    })
    
    let tl = gsap.timeline();
    
    tl.from("#page-4 h1",{
        x:100,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:"#page-4",
            scroller:"#main",
            start:"top 20%",
            end:"top 80%",
            scrub:6
        }
    })
    
    tl.from("#page-4 button",{
        y:-70,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
            trigger:"#page-4",
            scroller:"#main",
            start:"top 18%",
            end:"top 80%",
            scrub:4
        }
    })
    
    tl.from("#page-4 p",{
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
            trigger:"#page-4",
            scroller:"#main",
            start:"top 10%",
            end:"top 80%",
            scrub:4
        }
    })
    
    let t2 = gsap.timeline();
    
    t2.from("#part-1 #sec-1",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:4,
        scrollTrigger:{
            trigger:"#page-5",
            scroller:"#main",
            start:"top 30%",
            end:"top 100%",
            scrub:4
        }
    })
    
    t2.from("#sec-3",{
        x:100,
        duration:1,
        opacity:0,
        stagger:4,
        scrollTrigger:{
            trigger:"#page-5",
            scroller:"#main",
            start:"top 30%",
            end:"top 100%",
            scrub:4
        }
    })
    
    t2.from("#page-6 p",{
        y:100,
        duration:1,
        opacity:0,
        stagger:4,
        scrollTrigger:{
            trigger:"#page-5",
            scroller:"#main",
            start:"top 30%",
            end:"top 100%",
            scrub:4
        }
    })
    
}
animations();


// ----------------------------------------------------------------------------------------------------------------

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoAnimation(){
    let video = document.querySelector("#video-container");
let playbtn = document.querySelector("#play");
video.addEventListener("mousemove", (dets)=>{
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y-200,
        scale:1,
        opacity:1
    })
})
video.addEventListener("mouseleave", ()=>{
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
}
videoAnimation();


// ---------------------------------------------------------------------------------------------------------

function loadingAnimatipon(){
    gsap.from("#page-1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:1,
        stagger:0.5
    })

    gsap.from("#page-1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.5,
    })
}
loadingAnimatipon();


// -------------------------------------------------------------------------------------------------------------------

function cursor(){
    let cursor = document.querySelector("#cursor");
let child1 = document.querySelector("#child1");
let child2 = document.querySelector("#child2");
let child3 = document.querySelector("#child3");
let child4 = document.querySelector("#child4");


child1.addEventListener("mousemove", (dets)=>{
    cursor.style.backgroundColor = "#4a3b3787";
    gsap.to(cursor,{
        left:dets.x,
        top:dets.y,
        opacity:1,
        scale:1
    })
})
child1.addEventListener("mouseleave", ()=>{
    gsap.to(cursor,{
        opacity:0,
        scale:0
    })
})

child2.addEventListener("mousemove", (dets)=>{
    cursor.style.backgroundColor = "#fa32008a";
    gsap.to(cursor,{
        left:dets.x,
        top:dets.y,
        opacity:1,
        scale:1
    })
})
child2.addEventListener("mouseleave", ()=>{
    gsap.to(cursor,{
        opacity:0,
        scale:0
    })
})


child3.addEventListener("mousemove", (dets)=>{
    cursor.style.backgroundColor = "#44474f8b";
    gsap.to(cursor,{
        left:dets.x,
        top:dets.y+500,
        opacity:1,
        scale:1
    })
})
child3.addEventListener("mouseleave", ()=>{
    gsap.to(cursor,{
        opacity:0,
        scale:0
    })
})

child4.addEventListener("mousemove", (dets)=>{
    cursor.style.backgroundColor = "#44474fc1";
    gsap.to(cursor,{
        left:dets.x,
        top:dets.y+500,
        opacity:1,
        scale:1
    })
})
child4.addEventListener("mouseleave", ()=>{
    gsap.to(cursor,{
        opacity:0,
        scale:0
    })
})
}
cursor();

// ------------------------------------------------------------------------------------------------