function initializeNavigation() {
  const toggle = document.querySelector('[data-toggle="nav"]');
  const nav = document.querySelector('[data-nav]');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

function serializeForm(form) {
  const values = [];
  const elements = Array.from(form.elements).filter((element) => {
    return element.name && !element.disabled && ['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName);
  });

  elements.forEach((element) => {
    const label = element.placeholder || element.name;
    const value = element.value.trim();
    values.push(`${label}: ${value}`);
  });

  return values.join('\n');
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const targetEmail = form.dataset.emailTarget || 'contato@greenfarms.com.br';
  const subject = encodeURIComponent('Solicitação GREENFARMS - formulário online');
  const body = encodeURIComponent(serializeForm(form));
  const mailto = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

  window.location.href = mailto;
}

function bindForms() {
  const forms = document.querySelectorAll('form[data-email-target]');
  forms.forEach((form) => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

function init() {
  initializeNavigation();
  bindForms();
}

document.addEventListener('DOMContentLoaded', init);
