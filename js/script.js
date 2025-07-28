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


  