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

// Modal Content Populator
const projectModal = document.getElementById('projectModal');

if (projectModal) {
  projectModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const card = event.relatedTarget;

    // Extract info from data-bs-* attributes
    const title = card.getAttribute('data-title');
    const desc = card.getAttribute('data-desc');
    const tech = card.getAttribute('data-tech');
    const link = card.getAttribute('data-link');

    // Update the modal's content.
    const modalTitle = projectModal.querySelector('#modalTitle');
    const modalDesc = projectModal.querySelector('#modalDesc');
    const modalTech = projectModal.querySelector('#modalTech');
    const modalLink = projectModal.querySelector('#modalLink');

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalLink.href = link;

    // Clear previous tech tags and add new ones
    modalTech.innerHTML = '';
    const techArray = tech.split(',');
    techArray.forEach(item => {
      const span = document.createElement('span');
      span.className = 'skill-tag'; // Reusing your existing style
      span.textContent = item.trim();
      modalTech.appendChild(span);
    });
  });
}