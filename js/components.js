/* ================================================================
   GREENFARMS — Shared Components (Nav + Footer + WhatsApp)
   ================================================================ */

(function () {
  /* ── Navigation ─────────────────────────────────────────────── */
  const navHTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      <img src="images/logo.png" alt="GREENFARMS">
    </a>
    <div class="nav__links">
      <a href="index.html">Início</a>
      <a href="sobre.html">Sobre</a>
      <a href="engenharia.html">Engenharia &amp; Soluções</a>
      <a href="inovacoes.html">Inovações</a>
      <a href="contato.html">Contato</a>
    </div>
    <div class="nav__cta">
      <a href="contato.html" class="btn btn--outline">Solicitar Orçamento</a>
      <a href="https://wa.me/5516981349898" target="_blank" class="btn btn--whatsapp">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
        </svg>
        WhatsApp
      </a>
    </div>
    <button class="nav__hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav__mobile">
  <a href="index.html">Início</a>
  <a href="sobre.html">Sobre a Empresa</a>
  <a href="engenharia.html">Engenharia &amp; Soluções</a>
  <a href="inovacoes.html">Inovações</a>
  <a href="contato.html">Contato</a>
  <a href="https://wa.me/5516981349898" target="_blank" class="btn btn--whatsapp">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
    </svg>
    Falar no WhatsApp
  </a>
</div>`;

  /* ── Footer ──────────────────────────────────────────────────── */
  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <div class="footer__logo">
          <img src="images/logo.png" alt="GREENFARMS">
        </div>
        <p style="color:var(--gf-text-dim);font-size:0.85rem;line-height:1.9;max-width:280px;font-weight:300;">
          Pesquisa, desenvolvimento e engenharia industrial aplicada aos setores agropecuário, farmacêutico, alimentício, biotecnológico e químico.
        </p>
      </div>
      <div class="footer__col">
        <h4>Navegação</h4>
        <a href="index.html">Início</a>
        <a href="sobre.html">Sobre a Empresa</a>
        <a href="engenharia.html">Engenharia &amp; Soluções</a>
        <a href="inovacoes.html">Inovações</a>
        <a href="contato.html">Contato</a>
      </div>
      <div class="footer__col">
        <h4>Soluções</h4>
        <a href="inovacoes.html#plantas-piloto">Plantas Piloto</a>
        <a href="inovacoes.html#cisalhador">Sistemas de Cisalhamento</a>
        <a href="inovacoes.html#bomba">Bombas Centrífugas</a>
        <a href="engenharia.html#bioprocessos">Bioprocessos</a>
        <a href="engenharia.html#automacao">Automação Industrial</a>
      </div>
      <div class="footer__col">
        <h4>Contato</h4>
        <p>Av. 5, 154 – Centro<br>CEP: 14620-027<br>Orlândia – SP, Brasil</p>
        <a href="mailto:contato@greenfarms.com.br" style="margin-top:12px;">contato@greenfarms.com.br</a>
        <a href="https://wa.me/5516981349898" target="_blank">+55 16 98134-9898</a>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 GREENFARMS Indústria e Comércio. Todos os direitos reservados.</span>
      <span style="font-family:var(--gf-mono);font-size:0.65rem;letter-spacing:0.1em;">CNPJ · Orlândia – SP · Brasil</span>
    </div>
  </div>
</footer>`;

  /* ── WhatsApp Float ───────────────────────────────────────────── */
  const waFloat = `
<a href="https://wa.me/5516981349898" target="_blank" class="whatsapp-float" aria-label="WhatsApp">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
  </svg>
</a>`;

  /* ── Inject ──────────────────────────────────────────────────── */
  const navContainer = document.getElementById('nav-container');
  if (navContainer) navContainer.innerHTML = navHTML;

  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  const waContainer = document.getElementById('wa-float');
  if (waContainer) waContainer.innerHTML = waFloat;

})();
