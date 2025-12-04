// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false // Animations happen only once
});

// Target elements
sr.reveal('.hero h1', { delay: 200, origin: 'left' });
sr.reveal('.hero p', { delay: 400, origin: 'left' });
sr.reveal('.hero .btn', { delay: 600, origin: 'bottom', interval: 200 });

sr.reveal('.section-title', { origin: 'top' });
sr.reveal('.glass-card', { origin: 'bottom', interval: 200 });
sr.reveal('.project-card', { origin: 'bottom', interval: 200 });
sr.reveal('.skill-tag', { origin: 'bottom', interval: 100 });