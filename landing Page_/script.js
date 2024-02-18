gsap.from(".left", { 
    opacity: 0,
    duration: 1.5,
    delay:0.4,
    y:65,
})

gsap.from(".right-top", {
    opacity: 0,
    duration: 1.5,
    delay:0.4,
    x:65,
})

gsap.from(".right-bottom", {
    opacity: 0,
    duration: 1.5,
    delay:0.4,
    y:-65,
})

gsap.from("#main h1", {
    opacity: 0,
    duration: 1.5,
    delay:0.4,
    // y:-65,
})


gsap.from("#page2 .linebox, #page2 h1 ,#page2 img, #page2 .linebox2", {
    opacity: 0,
    duration: 1,
    stagger:0.3, // for if many tags are thhere thn one by one come
    scrollTrigger:{
        trigger: "#page2 .linebox",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        scrub:1,
    }
})