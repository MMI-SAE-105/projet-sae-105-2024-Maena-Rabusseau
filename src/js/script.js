/*menu*/

// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        // Mise à jour des attributs ARIA pour accessibilité
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}

/*carousel*/
const carousel = document.querySelector('.carousel');
let startX = 0;
let scrollLeft = 0;


carousel.addEventListener('mousedown', (e) => {
    carousel.style.cursor = 'grabbing';
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.isDown = true;
});

carousel.addEventListener('mouseleave', () => carousel.isDown = false);
carousel.addEventListener('mouseup', () => carousel.isDown = false);


carousel.addEventListener('mousemove', (e) => {
    if (!carousel.isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = x - startX;
    carousel.scrollLeft = scrollLeft - walk;
});


carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].clientX;
    const walk = x - startX;
    carousel.scrollLeft = scrollLeft - walk;
});
