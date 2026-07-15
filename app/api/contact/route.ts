import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form for errors and try again." },
      { status: 400 }
    );
  }

  // TODO: wire up real delivery (e.g. transactional email or CRM webhook).
  // Logged server-side for now so submissions aren't silently dropped.
  console.log("Contact form submission:", parsed.data);

  return NextResponse.json({ success: true });
}
