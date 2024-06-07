import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const resend = new Resend(event.context.cloudflare.env.NUXT_RESEND_TOKEN);

  const body = await readBody(event);

  const turnstileResponse = await verifyTurnstileToken(body.token);

  const data = await resend.emails.send({
    from: "Contact Form <bot@m.buildown.ai>",
    to: ["mail@buildown.ai"],
    subject: "BuildOwn.AI - message from: " + body.name,
    text: `
Contact from ${body.name}
Email: ${body.email}

Message:
===============

${body.message}`,
  });

  return {
    ok: true,
    data,
    message: "Thank You!",
  };
});
