<<<<<<< HEAD
gsap.registerPlugin(ScrollTrigger);


gsap.from(".container-sobre", {
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:".paragrafo-sobre",
        scrub:1,
        start:"top center",
        end:"top center",
    }
})


let elementScrol = document.querySelector('.scroll_container')

let elementContainer = elementScrol.querySelector('.Skilss')

let elementFilho = Array.from(elementContainer.children);

elementFilho.forEach(item => {
    let elementDouble = item.cloneNode(true);
    elementContainer.appendChild(elementDouble);
    console.log(item);

})

document.querySelectorAll("button").forEach((botao) =>{
  botao.disabled = true;
})


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.nome',
    start: 'top 50%', // pode ajustar
  }
});

tl.from('.img .nome', { x: -500,rotate:90 , opacity: 0, duration: 1, ease: 'power3.out' })
  .from('.s2', { y: 50, opacity: 0, duration: 1.1, ease: 'elastic.out(0.8, 0.5)' }, "+=0.3")
  .from('.s1', { x: 100, opacity: 0, duration: 1.1, ease: 'elastic.out(0.8, 0.7)' }, "+=0.2");


=======
// gsap.from('.img .nome', {
// 	scrollTrigger: '.nome', 
// 	x: -500,
//     delay: 1,
//     duration:1,
//     rotate: 0,
//     opacity:0,
//     ease:"power3.out"
// });
// gsap.from( '.sub .s2',{
//     scrollTrigger: '.s2',
//     y:-400,
//     delay:1.8,
//     duration:1.1,
//     opacity:0,
//     ease: "elastic.out(0.8, 0.7)"

// })

// gsap.from( '.sub .s1',{
//     scrollTrigger: '.s1',
//     x:100,
//     delay:2.5,
//     duration:1.1,
//     opacity:0,
//     ease: "elastic.out(0.8, 0.7)"
    
// })

let elementScrol = document.querySelector('.scroll_container')

let elementContainer = elementScrol.querySelector('.Skilss')

let elementFilho = Array.from(elementContainer.children);

elementFilho.forEach(item => {
    let elementDouble = item.cloneNode(true);
    elementContainer.appendChild(elementDouble);
    console.log(item);

})



const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.nome',
    start: 'top 50%', // pode ajustar
  }
});

tl.from('.img .nome', { x: -500,rotate:90 , opacity: 0, duration: 1, ease: 'power3.out' })
  .from('.s2', { y: 50, opacity: 0, duration: 1.1, ease: 'elastic.out(0.8, 0.5)' }, "+=0.3")
  .from('.s1', { x: 100, opacity: 0, duration: 1.1, ease: 'elastic.out(0.8, 0.7)' }, "+=0.2");


>>>>>>> ef411d05e7dc8e2f948a18a40cff588279d91d60
  