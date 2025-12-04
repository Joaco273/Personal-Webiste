// Simple contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // For now, just show a success message
  document.getElementById("formMessage").textContent = 
    `Thanks ${name}! Your message has been received.`;
  
  // Clear form
  document.getElementById("contactForm").reset();
});


// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});