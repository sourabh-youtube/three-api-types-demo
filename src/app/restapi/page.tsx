"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface RestApiResponse {
  message: string;
}
export default function RestApiDemoPage() {
  const [response, setResponse] = useState<RestApiResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/ping", { signal: controller.signal })
      .then((res) => res.json())
      .then((data: RestApiResponse) => setResponse(data))
      .catch((err) => {
        console.error(err);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={"100vh"}
    >
      <Typography variant="h4" my={4}>
        REST API response using fetch
      </Typography>
      {response ? (
        <Typography
          variant="body1"
          sx={{ backgroundColor: "beige", p: 4, borderRadius: 4 }}
        >
          <pre>
            <code>{JSON.stringify(response, null, 2)}</code>
          </pre>
        </Typography>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
