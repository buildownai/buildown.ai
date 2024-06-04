export const prerender = false;

import type { APIRoute } from "astro";
import { z } from "zod";
import { waitlist } from "../../schema";

const formSchema = z.object({
  email: z.string().email({
    message: "Email is not valid.",
  }),
});

export const POST: APIRoute = async (context) => {
  console.log(context)
  const {request} =context
  const payload = await request.json();
  const { email } = formSchema.parse(payload);

  const db = context.locals.runtime.env.DB;

  if (typeof email === "string") {
    try {
      await db.insert(waitlist).values({ email });
    } catch (error) {
      console.error(error)
      return new Response(
        JSON.stringify({
          message: "failed to insert",
        }),
        { status: 400 },
      );
    }
  }

  return new Response(
    JSON.stringify({
      message: "success",
    }),
    { status: 200 },
  );
};
