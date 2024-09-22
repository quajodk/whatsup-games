"use server";
import { redirect } from "next/navigation";
import { FormState, LoginFormSchema } from "@/lib/definitions";
import { createSession, deleteSession } from "@/app/lib/session";
import { fromErrorToFormState } from "@/lib/to-form-state";

export async function login(state: FormState, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const validatedFields = LoginFormSchema.safeParse({
      name,
    });

    const sessionId = Math.random().toString(36).substring(2, 15);
    await createSession({
      id: sessionId,
      name: validatedFields.data?.name as string,
    });
  } catch (error) {
    return fromErrorToFormState(error);
  }

  redirect("/lobby");
}

export async function logout() {
  deleteSession();
  redirect("/");
}
