var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 70%",
    scrub: true,
}});

tl.to("#fanta", {
    top:"120%",
    left: "5%",
    rotate: "360deg"
},"orange")

tl.to("#orange2", {
    top:"150%",
    left:"25%",
    rotate:"-360deg"
}, "orange")

tl.to("#leaf", {
    top:"130%",
    left:"30%"
}, "orange")

tl.to("#leaf2", {
    top:"100%",
    left:"10%",
}, "orange")

tl.to("#orange", {
    top:"160%",
    right:"5%",
}, "orange")


var t2 = gsap.timeline({scrollTrigger:{
    trigger: "#three",
    start: "0% 40%",
    end: "20% 50%",
    scrub: true,
}});

t2.to("#orange2", {
    left:"40%",
    top:"200%",
    rotate:"360deg"
})

t2.to("#fanta", {
    top:"220%",
    left:"30%",
    rotate:"-360deg"
})
