"use server";

export const postPing = async (data: ICreateUser): Promise<APIResponse> => {
  // Run some backend logic here
  console.log(data);

  // Simulate a delay of 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { status: "success", message: "pong using mutation" };
};
