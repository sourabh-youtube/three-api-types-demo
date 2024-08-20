import { useMutation } from "@tanstack/react-query";

export function usePostPing() {
  return useMutation({
    mutationKey: ["post-ping"],
    mutationFn: async (data: ICreateUser): Promise<APIResponse> => {
      "use server";
      // Run some backend logic here
      console.log(data);

      // Simulate a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return { status: "success", message: "pong using mutation" };
    },
  });
}
