"use client";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface RestApiResponse {
  message: string;
}
export default function RestApiDemoPage() {
  const [getResponse, setGetResponse] = useState<RestApiResponse | null>(null);
  const [postResponse, setPostResponse] = useState<RestApiResponse | null>(
    null
  );
  const [getIsLoading, setGetIsLoading] = useState(false);
  const [postIsLoading, setPostIsLoading] = useState(false);

  // Make a GET request to the server on page load
  useEffect(() => {
    setGetIsLoading(true);
    const controller = new AbortController();

    fetch("/api/ping", { signal: controller.signal })
      .then((res) => res.json())
      .then((data: RestApiResponse) => setGetResponse(data))
      .catch((err) => {
        console.error(err);
      });
    setGetIsLoading(false);
    return () => {
      controller.abort();
    };
  }, []);

  // Make a POST request to the server
  const handlePostPing = (data: any) => {
    setPostIsLoading(true);

    console.log("Sending POST request with data: ", data);
    fetch("/api/ping", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) =>
        res.ok ? res.json() : console.log(res.status, res.statusText)
      )
      .then((data: RestApiResponse) => setPostResponse(data))
      .catch((err) => {
        console.error(err);
      });

    setPostIsLoading(false);
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
          {postResponse ? (
            <pre>
              <code>{JSON.stringify(postResponse, null, 2)}</code>
            </pre>
          ) : postIsLoading ? (
            <CircularProgress />
          ) : (
            "No data"
          )}
        </Typography>
        <Button
          variant="contained"
          onClick={() => handlePostPing({ name: "John Doe", role: "ADMIN" })}
        >
          Send POST request
        </Button>
      </Box>
    </Box>
  );
}
