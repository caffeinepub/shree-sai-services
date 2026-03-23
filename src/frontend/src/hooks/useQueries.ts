import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitForm() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      message: string;
      formType: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitForm(
        data.name,
        data.phone,
        data.message,
        data.formType,
      );
    },
  });
}
