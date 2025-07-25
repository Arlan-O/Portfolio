gsap.from('.img .nome', {
	scrollTrigger: '.nome', // start the animation when ".box" enters the viewport (once)
	x: -500,
    delay: 1,
    duration:1,
    rotate: 0,
    opacity:0,
    ease:"power3.out"
});
gsap.from( '.sub .s2',{
    scrollTrigger: '.s2',
    y:-400,
    delay:1.8,
    duration:1.1,
    opacity:0,
    ease: "elastic.out(0.8, 0.7)"

})

gsap.from( '.sub .s1',{
    scrollTrigger: '.s1',
    x:100,
    delay:2.5,
    duration:1.1,
    opacity:0,
    ease: "elastic.out(0.8, 0.7)"
    
})



gsap.from(".sobre", {
    scrollTrigger: {
    trigger:".sobre",
    start: "center center",
    toggleActions: "restart pause reverse none"
    },
    y:300,
    duration:3

})