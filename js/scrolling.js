const seccionesOcultas = document.querySelectorAll('.hidden-scroll');


// El observer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        entry.target.classList.toggle('mostrar', entry.isIntersecting);
    })
})

seccionesOcultas.forEach((seccion)=>observer.observe(seccion));