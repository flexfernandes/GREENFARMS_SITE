export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Endpoint do formulário de contato
    if (url.pathname === '/api/contato' && request.method === 'POST') {
      return handleContato(request, env);
    }

    // Qualquer outra requisição → entrega o arquivo estático (site normal)
    return env.ASSETS.fetch(request);
  }
};

async function handleContato(request, env) {
  try {
    const { nome, email, telefone, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return jsonResponse({ error: 'Preencha nome, e-mail e mensagem.' }, 400);
    }

    const esc = (s) => String(s).replace(/[<>&"']/g, (c) => ({
      '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;'
    }[c]));

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'GreenFarms Site <contato@greenfarms.com.br>',
        to: ['contato@greenfarms.com.br'],
        reply_to: email,
        subject: `Contato pelo site — ${esc(nome)}`,
        html: `
          <h2>Nova mensagem pelo site GreenFarms</h2>
          <p><strong>Nome:</strong> ${esc(nome)}</p>
          <p><strong>E-mail:</strong> ${esc(email)}</p>
          <p><strong>Telefone:</strong> ${esc(telefone || '—')}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${esc(mensagem).replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      return jsonResponse({ error: 'Falha no envio', detail }, 502);
    }

    return jsonResponse({ ok: true });
  } catch (e) {
    return jsonResponse({ error: e.message }, 500);
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}