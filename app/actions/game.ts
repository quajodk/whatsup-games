"use server";

import { FormState, GameInviteFormSchema } from "@/lib/definitions";
import { generateInviteSession, getSession } from "@/app/lib/session";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/common/email-template";
import { getGame } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { fromErrorToFormState, toFormState } from "@/lib/to-form-state";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function invite(state: FormState, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const gameId = formData.get("gameId") as string;

    const { data: validatedFields } = GameInviteFormSchema.safeParse({
      name,
      email,
      gameId,
    });

    // Create an anonymous session
    const sessionId = Math.random().toString(36).substring(2, 15);
    const session = await generateInviteSession({
      id: sessionId,
      name: validatedFields?.name as string,
    });
    const inviteLink = `http://127.0.0.1:3000/invite/${gameId}#${session}`;
    const inviter = await getSession();
    const game = getGame(validatedFields?.gameId as string);

    const { error } = await resend.emails.send({
      from: "Watsup Games <onboarding@resend.dev>",
      to: [validatedFields?.email as string],
      subject: "Game Invite 🎮",
      react: EmailTemplate({
        invitee: name,
        gameName: game?.name as string,
        inviteLink,
        inviter: inviter?.name as string,
      }),
    });
    console.log(error, "[error send invite]");
    if (error) {
      return fromErrorToFormState(error);
    }
  } catch (error) {
    return fromErrorToFormState(error);
  }

  revalidatePath("/lobby");
  return toFormState("SUCCESS", "Invite link sent");
}
