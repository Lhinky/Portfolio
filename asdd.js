// Select elements
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');

// Show sections on load
window.addEventListener("load", () => {
  sections.forEach(section => {
    section.classList.add("visible");
  });
});

// Highlight nav on scroll
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop;
    if (scrollY >= top - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});