/**
 * Personal Homepage - Main JavaScript
 *
 * Features:
 * - Smooth scrolling navigation
 * - Active nav link highlighting
 * - Responsive navbar handling
 */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active nav link based on scroll position
    const sections = document.querySelectorAll('.section');

    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY;
        const navHeight = document.querySelector('.navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);
    highlightNavOnScroll(); // Initial call
});

// Add CSS for active nav link (injected via JS to keep CSS clean)
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }
`;
document.head.appendChild(style);
