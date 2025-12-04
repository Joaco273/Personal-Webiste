// Dark mode toggle
/*const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Contact form handler (About page)
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formMessage = document.getElementById("formMessage");
    formMessage.textContent = "Thanks! Your message has been sent.";
    form.reset();
  });
}
  */

// script.js
ScrollReveal().reveal('.card', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.hero h1, .hero p, .hero a', {
  delay: 300,
  distance: '30px',
  origin: 'top',
  interval: 200
});