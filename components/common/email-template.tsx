import * as React from "react";
import { Button } from "../ui/button";

interface EmailTemplateProps {
  inviter: string;
  invitee: string;
  inviteLink: string;
  gameName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  invitee,
  inviteLink,
  inviter,
  gameName,
}) => (
  <div>
    <h1 className="mb-2 font-semibold">Hey, {invitee}!</h1>
    <span className="text-sm">
      {inviter} want to play {gameName} with you. Join the game with the link
      below.
    </span>
    <span className="text-sm pl-2">
      Use this to{" "}
      <a
        className="p-2 bg-slate-500 border border-slate-400 my-4"
        target="_black"
        href={inviteLink}
      >
        Join Game
      </a>
    </span>

    <p>Use this link if button don&apos;t work</p>
    <p className="mt-2">{inviteLink}</p>
  </div>
);
