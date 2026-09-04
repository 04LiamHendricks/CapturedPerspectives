const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function updateHeader(){
  if(window.scrollY > 40) header?.classList.add('scrolled');
  else header?.classList.remove('scrolled');
}
updateHeader();
window.addEventListener('scroll', updateHeader);

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', navLinks?.classList.contains('open') ? 'true' : 'false');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('form[data-prototype-form]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if(status){
      status.textContent = 'Thank you. Your enquiry has been captured for this prototype.';
      status.style.marginTop = '16px';
    }
    form.reset();
  });
});

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
