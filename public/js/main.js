// Navigation toggle
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');
if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for internal links
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof Element && target.matches('a[href^="#"]')) {
    const id = target.getAttribute('href');
    if (id && id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nav?.classList.remove('nav--open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    }
  }
});

// Simple form handling
const form = document.querySelector('[data-form]');
const feedback = document.querySelector('.form__feedback');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const nome = String(fd.get('nome') || '').trim();
  const tel = String(fd.get('telefone') || '').trim();
  const esp = String(fd.get('especialidade') || '').trim();
  if (!nome || !tel || !esp) {
    if (feedback) { feedback.textContent = 'Preencha todos os campos.'; feedback.style.color = '#e03131'; }
    return;
  }
  if (feedback) { feedback.textContent = 'Recebido! Entraremos em contato em breve.'; feedback.style.color = '#2f9e44'; }
  form.reset();
});

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());



