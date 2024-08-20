interface APIResponse {
  status: "success" | "error" | "warning";
  message: string;
}

interface ICreateUser {
  name: string;
  role: "ADMIN" | "STUDENT";
}
