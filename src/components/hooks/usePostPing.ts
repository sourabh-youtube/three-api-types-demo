import { useMutation } from "@tanstack/react-query";
import { postPing } from "../actions";
export function usePostPing() {
  return useMutation({
    mutationKey: ["post-ping"],
    mutationFn: postPing,
  });
}
