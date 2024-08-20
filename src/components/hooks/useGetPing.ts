import { useQuery } from "@tanstack/react-query";

export function useGetPing(id: number = 0) {
  return useQuery({
    queryKey: ["get-ping"],
    queryFn: async () => {
      "use server";
      // run some backend logic here
      console.log(id);
      return { status: "success", message: "pong using query" };
    },
    refetchOnMount: false,
  });
}
