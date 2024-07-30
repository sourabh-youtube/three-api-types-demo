"use client";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { postPing } from "./actions/mutation/_ping";
import { getPing, IGetPing } from "./actions/query/_ping";

export default function Home() {
  const { data: pingData } = useQuery({
    queryKey: ["get-ping"],
    queryFn: async (): Promise<IGetPing> => getPing(),
    refetchOnMount: false,
  });

  const {
    data: pingPostData,
    isPending: pingPostIsPending,
    isSuccess: pingPostIsSuccess,
    mutate: pingPostMutate,
  } = useMutation({
    mutationKey: ["post-ping"],
    mutationFn: postPing,
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
      <Box>
        <Typography variant="h5">
          POST <code>/api/ping</code>
        </Typography>
        <Button
          variant="contained"
          onClick={() => pingPostMutate("post data sent")}
        >
          save
        </Button>
        <Typography>
          isPending: {String(pingPostIsPending)}, isSuccess:{" "}
          {String(pingPostIsSuccess)}
        </Typography>
        <Typography variant="body1">
          {pingPostIsPending && <CircularProgress size={20} />}{" "}
          {JSON.stringify(pingPostData)}
        </Typography>
      </Box>
    </main>
  );
}
