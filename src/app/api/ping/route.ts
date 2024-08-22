import { NextResponse } from "next/server";

async function getHelloHandler(request: Request) {
  // run some backend logic
  console.log("Hello from server");

  // return a response
  return NextResponse.json({ message: "Hello from server get" } as APIResponse);
}

async function postHelloHandler(request: Request) {
  // run some backend logic
  console.log("Hello from server");
  const body = await request.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(body);

  // return a response
  return NextResponse.json({
    message: "Hello from server post",
  } as APIResponse);
}
export { getHelloHandler as GET, postHelloHandler as POST };
