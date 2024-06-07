export default defineEventHandler(async (event) => {
  const { token, email } = await readBody(event);

  if (!token) {
    throw createError({
      statusCode: 422,
      statusMessage: "Token not provided.",
    });
  }

  const turnstileResponse = await verifyTurnstileToken(token);
  if (!turnstileResponse.success) {
    throw createError({
      statusCode: 400,
      statusMessage: turnstileResponse["error-codes"][0],
    });
  }

  try {
    const db = event.context.cloudflare.env.DB;

    const result = await db
      .prepare("INSERT INTO waitlist (email) VALUES (?)")
      .bind(email)
      .all();

    return {
      ok: true,
      result,
    };
  } catch (err) {
    console.error(err);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
