"use client";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

async function sendRequest<T>(url: string, { arg }: { arg: T }) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export default function SWRAPIResponsePage() {
  const {
    trigger,
    isMutating,
    error: postPingError,
    data: postPingData,
  } = useSWRMutation("/api/ping", sendRequest<ICreateUser>);

  const {
    data: getResponse,
    error: getErorr,
    isLoading: getIsLoading,
  } = useSWR("/api/ping");

  const handlePostPing = async () => {
    const postData: ICreateUser = { name: "John Doe", role: "ADMIN" };
    await trigger(postData);
  };

  return (
    <Box
      display="flex"
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Typography variant="h5">
          GET from <code>/api/ping</code>
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
          {getResponse ? (
            <pre>
              <code>{JSON.stringify(getResponse, null, 2)}</code>
            </pre>
          ) : getErorr ? (
            <pre>
              <code>{JSON.stringify(getErorr, null, 2)}</code>
            </pre>
          ) : getIsLoading ? (
            <CircularProgress />
          ) : (
            "No data"
          )}
        </Typography>
      </Box>
      <br />
      <Box>
        <Typography variant="h5">
          POST <code>/api/ping</code>
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
          {postPingData ? (
            <pre>
              <code>{JSON.stringify(postPingData, null, 2)}</code>
            </pre>
          ) : isMutating ? (
            <CircularProgress />
          ) : postPingError ? (
            <pre>
              <code>{JSON.stringify(postPingError, null, 2)}</code>
            </pre>
          ) : (
            "No data"
          )}
        </Typography>
        <Button variant="contained" onClick={() => handlePostPing()}>
          Send POST request
        </Button>
      </Box>
    </Box>
  );
}
