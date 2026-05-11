export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contato' && request.method === 'POST') {
      return handleContato(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};

async function handleContato(request, env) {
  try {
    const data = await request.json();
    const { _subject, ...fields } = data;

    // DEBUG TEMPORÁRIO
    const k = env.RESEND_API_KEY;
    console.log('DEBUG_KEY_EXISTS:', !!k);
    console.log('DEBUG_KEY_TYPE:', typeof k);
    console.log('DEBUG_KEY_LENGTH:', k?.length);
    console.log('DEBUG_KEY_PREFIX:', k?.substring(0, 7));
    console.log('DEBUG_KEY_LAST4:', k?.slice(-4));
    console.log('DEBUG_KEY_HAS_SPACES:', k?.includes(' '));
    console.log('DEBUG_KEY_HAS_NEWLINE:', k?.includes('\n'));

    // Validação básica
    if (!fields.Nome || !fields.Email) {
      return jsonResponse({ error: 'Nome e e-mail são obrigatórios.' }, 400);
    }

    const esc = (s) => String(s || '').replace(/[<>&"']/g, (c) => ({
      '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;'
    }[c]));

    // Monta tabela HTML com todos os campos preenchidos
    const rows = Object.entries(fields)
      .filter(([k, v]) => v && String(v).trim())
      .map(([k, v]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;font-weight:600;color:#555;width:35%;vertical-align:top;background:#fafafa;">${esc(k.replace(/_/g, ' '))}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;color:#222;">${esc(v).replace(/\n/g, '<br>')}</td>
        </tr>
      `).join('');

    const subject = _subject || `Contato pelo site — ${fields.Nome}`;

    const emailHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;background:#fff;">
        <div style="background:#1a5d3a;color:#fff;padding:20px 24px;">
          <h2 style="margin:0;font-size:18px;font-weight:600;">${esc(subject)}</h2>
          <p style="margin:6px 0 0;font-size:13px;opacity:0.85;">Recebido pelo site greenfarms.com.br</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows}
        </table>
        <div style="padding:16px 24px;background:#f5f5f5;font-size:12px;color:#888;text-align:center;">
          Para responder, basta usar "Responder" — o e-mail do remetente está pré-configurado.
        </div>
      </div>
    `;

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'GreenFarms Site <contato@greenfarms.com.br>',
        to: ['contato@greenfarms.com.br'],
        reply_to: fields.Email,
        subject: subject,
        html: emailHtml,
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