document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.style.textAlign = "center";
  footer.style.marginTop = "40px";

  footer.innerHTML = `
    <a href="https://instagram.com/treetophuatulco" target="_blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
        <rect x="2" y="2" width="20" height="20" rx="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="18" cy="6" r="1"></circle>
      </svg>
    </a>
  `;

  document.body.appendChild(footer);
});
