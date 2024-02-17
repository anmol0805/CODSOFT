
gsap.from("#nav img", {
  opacity: 0,
  duration: 1.4,
  delay: 0.5,
  x: -60,
});
gsap.from("#nav li", {
  opacity: 0,
  duration: 1.4,
  delay: 0.5,
  x: -60,
});
gsap.from("#column3 #box2 p, #box2 img", {
  opacity: 0,
  duration: 1.4,
  delay: 0.5,
  x: 100,
});
gsap.from("#column2 #box h1", {
  opacity: 0,
  duration: 1.4,
  delay: 0.5,
  y: -100,
});
gsap.from(" #page1 #column2 #btns button", {
  opacity: 0,
  duration: 1.4,
  delay: 0.5,
  y: 100,
});
gsap.from(" #box p", {
  opacity: 0,
  duration: 1.4,
  delay: 0.5,
  // y: 100,
});

gsap.from("#page2 #content h1, #cards, #cards .card1,  #cards h3", {
    opacity: 0,
    duration: 1,
    stagger:0.2,
    scale:1,
    y: 70,
    scrollTrigger:{
        trigger:   "#page2",
        scroll: "body",
        start: "top 80%",
        end:"bottom 80%",
        // markers:true,
        scrub:1,
        // markers:true
    }
})

gsap.from("#page3 #content2 #prcard1, #page3 #content2 h1, #prcard1 h2, #prcard1 p", {
    opacity: 0,
    duration: 1.2,
    stagger:0.4,
    scaleX:1,
    y:70,
    scrollTrigger:{
        trigger:   "#page3",
        scroll: "body",
        start: "top 70%",
        end:"bottom 90%",
        // markers:true,
        scrub:1,
        
    }
})
gsap.from("#page4 h2, #page4 #contact, #page4 #bio", {
    opacity: 0,
    // duration: 1.2,
    stagger:0,
    // scaleX:1,
    y:70,
    scrollTrigger:{
        trigger:   "#page4",
        scroll: "body",
        start: "top 90%",
        end:"bottom 100%",
        // markers:true,
        scrub:1,
    }
})