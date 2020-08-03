gsap.registerPlugin(ScrollTrigger);

//gsap.to("#yellow-box",{duration:1, x:400, rotation: 360, scrollTrigger:"#yellow-box"});

// Toggle Actions 

gsap.to("#yellow-box",{
    duration:1, 
    x:400, 
    rotation: 360, 
    scrollTrigger:{
        trigger: "#yellow-box",
        // first property of top refers to the yellow box, the center property refers to the viewport
        //start: "top 45%",
        // first property of top refers to the yellow box, the center property refers to the viewport
        //end: "+=500 50%",
        //markers: true,
        //scrub:1,
        //pin: true,
        // onEnter, onLeave, onEnterBack, onLeaveBack
        toggleActions: "restart none none none"
    }});

    // keywords
    // play pause resume reverse restart reset complete none