// "use client";

import { invite } from "@/app/actions/game";
import { FieldError } from "@/components/common/field-error";
import { SubmitButton } from "@/components/common/submit-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormReset } from "@/hooks/use-form-reset";
import { useToastMessage } from "@/hooks/use-toast-message";
import { Game } from "@/lib/definitions";
import { EMPTY_FORM_STATE } from "@/lib/to-form-state";
import { useRouter } from "next/navigation";
import React, { SetStateAction } from "react";
import { useFormState, useFormStatus } from "react-dom";

type Props = {
  game: Game;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
};

const GameInviteModal = ({ game, isModalOpen, setIsModalOpen }: Props) => {
  const [state, formAction] = useFormState(invite, EMPTY_FORM_STATE);
  const router = useRouter();

  const noScriptFallback = useToastMessage(state);
  const formRef = useFormReset(state, () => {
    setIsModalOpen(false);
    router.push("/game");
  });

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite a Friend to Play {game.name}</DialogTitle>
          <DialogDescription>
            Enter your friend&apos;s details to send them an invite link.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div>
            <Label htmlFor="inviteName">Friend&apos;s Name</Label>
            <Input id="inviteName" name="name" required />
            <FieldError formState={state} name="name" />
          </div>
          <div>
            <Label htmlFor="inviteEmail">Friend&apos;s Email</Label>
            <Input id="inviteEmail" name="email" type="email" required />
            <FieldError formState={state} name="email" />
          </div>

          <Input
            hidden
            id="gameId"
            name="gameId"
            type="text"
            className="hidden"
            value={game.id}
          />

          <SubmitButton label="Send Invite" loading="Sending invite .." />
        </form>

        {noScriptFallback}
      </DialogContent>
    </Dialog>
  );
};

export default GameInviteModal;
