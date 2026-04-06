const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove active from all nav links and sections
    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Add active to clicked nav link
    link.classList.add('active');

    // Show corresponding section
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).classList.add('active');
  });
});