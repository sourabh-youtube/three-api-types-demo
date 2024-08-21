import { useQuery } from "@tanstack/react-query";
import { getPing } from "../actions";

export function useGetPing(id: number = 0) {
  return useQuery({
    queryKey: ["get-ping"],
    queryFn: () => getPing(id),
    refetchOnMount: false,
  });
}
