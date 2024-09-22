import { FormState } from "@/lib/definitions";
import { useRef, useEffect } from "react";

const useFormReset = (formState: FormState, callback?: Function) => {
  const init = useRef({ callback });
  const formRef = useRef<HTMLFormElement>(null);
  const prevTimestamp = useRef(formState.timestamp);

  useEffect(() => {
    const { callback } = init.current;
    if (!formRef.current) return;
    if (
      formState.status === "SUCCESS" &&
      formState.timestamp !== prevTimestamp.current
    ) {
      formRef.current.reset();
      prevTimestamp.current = formState.timestamp;
      callback && callback();
    }
  }, [formState.status, formState.timestamp]);

  return formRef;
};

export { useFormReset };
