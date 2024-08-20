"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import useSWR from "swr";

export default function SWRAPIResponsePage() {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR("http://localhost:3000/api/ping");

  if (error) return <div>failed to load</div>;

  if (isLoading) return <div>loading...</div>;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height={"100vh"}
    >
      <Typography variant="h4" my={4}>
        REST API response using SWR
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
