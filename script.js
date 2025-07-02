// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navbar and scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 54, 93, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = 'var(--azul-oscuro)';
        navbar.style.boxShadow = 'none';
    }
    
    // Hide scroll down arrow after scrolling
    const scrollDown = document.querySelector('.scroll-down');
    if (window.scrollY > 200) {
        scrollDown.style.opacity = '0';
    } else {
        scrollDown.style.opacity = '1';
    }
});

// Animation for feature cards when they come into view
const featureCards = document.querySelectorAll('.feature-card, .labor-card, .normativa-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Current year in footer
document.querySelector('.copyright p').innerHTML = `&copy; ${new Date().getFullYear()} Archivística Profesional. Todos los derechos reservados.`;
