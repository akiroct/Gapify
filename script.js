const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const budgetForm = document.querySelector('.budget-form');
const statusMessage = document.querySelector('.form-status');

if (budgetForm && statusMessage) {
  budgetForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nome')?.value.trim() || 'Cliente';
    statusMessage.textContent = `Obrigado, ${name}! Sua solicitação de orçamento foi recebida com sucesso.`;
    statusMessage.style.color = '#1a2744';
    budgetForm.reset();
  });
}
