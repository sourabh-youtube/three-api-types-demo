"use client";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { postPing } from "./actions/mutation/_ping";
import { getPing } from "./actions/query/_ping";

export default function Home() {
  const { data: pingData } = useQuery({
    queryKey: ["get-ping"],
    queryFn: async (): Promise<APIResponse | undefined> => getPing(),
    refetchOnMount: false,
  });

  const {
    data: pingPostData,
    isPending: pingPostIsPending,
    isSuccess: pingPostIsSuccess,
    isError: pingPostIsError,
    error: pingPostError,
    mutate: pingPostMutate,
  } = useMutation({
    mutationKey: ["post-ping"],
    mutationFn: postPing,
  });

  return (
    <main>
      <Box
        display="flex"
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography variant="h5">
            GET from <code>useQuery</code>
          </Typography>
          <Typography
            mb={2}
            variant="body2"
            color="success"
            sx={{
              backgroundColor: "beige",
              borderRadius: 2,
              width: 300,
              padding: 2,
            }}
          >
            <pre>
              <code>{JSON.stringify(pingData, null, 2)}</code>
            </pre>
          </Typography>
        </Box>
        <br />
        <Box>
          <Typography variant="h5">
            POST to <code>useMutation</code>
          </Typography>
          <Typography
            mb={2}
            variant="body2"
            color="success"
            sx={{
              backgroundColor: "beige",
              borderRadius: 2,
              width: 300,
              padding: 2,
            }}
          >
            {pingPostIsPending ? (
              <CircularProgress />
            ) : pingPostIsSuccess ? (
              <pre>
                <code>{JSON.stringify(pingPostData, null, 2)}</code>
              </pre>
            ) : pingPostIsError ? (
              <pre>
                <code>{JSON.stringify(pingPostError, null, 2)}</code>
              </pre>
            ) : (
              "No data"
            )}
          </Typography>
          <Button
            variant="contained"
            onClick={() => pingPostMutate({ name: "John Doe", role: "ADMIN" })}
          >
            Send POST request
          </Button>
        </Box>
      </Box>
    </main>
  );
}
