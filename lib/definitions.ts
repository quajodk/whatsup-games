import { z } from "zod";

export type FormState = {
  status: "UNSET" | "SUCCESS" | "ERROR";
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const LoginFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
});

export const GameInviteFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  gameId: z.string().min(2, { message: "Game id cant be null" }).trim(),
});

export type SessionPayload = {
  id: string;
  name: string;
  expiresAt?: Date;
};

export type Game = {
  id: string;
  name: string;
  rating: number;
  playCount: number;
  imageUrl: string;
  description: string;
};
