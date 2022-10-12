const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
       /*if (entry.isIntersecting) observer.unobserve(entry.target) /*= window will animate only once*/
    })
    console.log(entries)
}, {
    threshold: 0.2,
})

cards.forEach(card => {
    observer.observe(card)
})
