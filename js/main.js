/* ================================================================
   GREENFARMS — Main JavaScript
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll behavior ─────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Active nav link ─────────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Hamburger ───────────────────────────────────────────────── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ── Animate on scroll ───────────────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.anim-fade').forEach(el => observer.observe(el));

  /* ── Form submission (EmailJS or mailto fallback) ────────────── */
  document.querySelectorAll('form[data-gf-form]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const successEl = form.parentElement.querySelector('.form-success');
      const originalText = btn ? btn.textContent : '';

      if (btn) { btn.textContent = 'Enviando…'; btn.disabled = true; }

      const data = new FormData(form);
      const subject = encodeURIComponent(form.dataset.subject || 'Contato — GREENFARMS');
      const body = encodeURIComponent(
        [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
      );

      // Fallback: open mailto
      setTimeout(() => {
        window.location.href = `mailto:contato@greenfarms.com.br?subject=${subject}&body=${body}`;
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
        if (successEl) {
          successEl.style.display = 'block';
          form.style.display = 'none';
        }
      }, 600);
    });
  });

  /* ── Smooth counter animation ────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();
      const animate = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (Number.isInteger(target)
          ? Math.round(eased * target)
          : (eased * target).toFixed(1)) + suffix;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countObserver.observe(el));

});
