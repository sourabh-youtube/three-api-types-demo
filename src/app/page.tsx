"use client";
import { IUser } from "@/server/model/users";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getPing } from "./actions/query/_ping";

export default function Home() {
  const { data: pingData } = useQuery({
    queryKey: ["get-ping"],
    queryFn: async (): Promise<IUser | undefined> => getPing(),
    refetchOnMount: false,
  });

  return (
    <main>
      <Box>
        <Typography variant="h5">
          GET <code>/api/ping</code>
        </Typography>
        <Typography variant="body1">{JSON.stringify(pingData)}</Typography>
      </Box>
      <br />
    </main>
  );
}
