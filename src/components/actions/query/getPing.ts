"use server";

export const getPing = async (id: number) => {
  // run some backend logic here
  console.log(id);
  return { status: "success", message: "pong using query" };
};
