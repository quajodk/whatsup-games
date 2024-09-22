"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/app/actions/auth";
import { useFormState, useFormStatus } from "react-dom";
import { EMPTY_FORM_STATE } from "@/lib/to-form-state";
import { FieldError } from "@/components/common/field-error";
import { SubmitButton } from "@/components/common/submit-button";
import { useToastMessage } from "@/hooks/use-toast-message";
import { useFormReset } from "@/hooks/use-form-reset";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, EMPTY_FORM_STATE);
  const noScriptFallback = useToastMessage(state);
  const formRef = useFormReset(state);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Play Game</CardTitle>
          <CardDescription>Enter your name below to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Joe Doe"
                  required
                />
                <FieldError formState={state} name="name" />
              </div>

              <SubmitButton label="Continue" loading="Loading..." />
            </div>
          </form>
        </CardContent>
      </Card>

      {noScriptFallback}
    </div>
  );
}
