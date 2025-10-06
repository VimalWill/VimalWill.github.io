/**
 * Simple Script for Academic Website
 * Minimal JS for smooth experience
 */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add simple fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(10px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Profile section doesn't need animation
const profileSection = document.querySelector('.profile-section');
if (profileSection) {
    profileSection.style.opacity = '1';
    profileSection.style.transform = 'none';
}

// Log for developers
console.log('%c👋 Hi there!', 'font-size: 16px; font-weight: bold; color: #1a73e8;');
console.log('%cInterested in my work? Let\'s connect!', 'font-size: 14px; color: #666;');
console.log('%cvimalwilliam@arizona.edu', 'font-size: 14px; color: #1a73e8; font-weight: bold;');
