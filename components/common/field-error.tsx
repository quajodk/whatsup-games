import { FormState } from "@/lib/definitions";

type FieldErrorProps = {
  formState: FormState;
  name: string;
};

const FieldError = ({ formState, name }: FieldErrorProps) => {
  return (
    <span className="text-xs text-red-500">
      {formState.fieldErrors[name]?.[0]}
    </span>
  );
};

export { FieldError };
