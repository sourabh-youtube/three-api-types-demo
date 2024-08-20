"use server";

export const getPing = async (
  id: number = 0
): Promise<APIResponse | undefined> => {
  // run some backend logic here
  console.log(id);

  return { status: "success", message: "pong using query" };
};
