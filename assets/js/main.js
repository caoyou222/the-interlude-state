  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.mobile-toggle');
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
    header.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.textContent = 'Menu';
  }));

