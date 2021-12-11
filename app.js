const fullImg = document.querySelector('.full__image');
const smallImg = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');


smallImg.forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add("open");
        fullImg.classList.add("open");

        const originalQuality = img.getAttribute("alt")
        fullImg.src = `img/full/${originalQuality}.jpg`
    })

})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open")
    }

})