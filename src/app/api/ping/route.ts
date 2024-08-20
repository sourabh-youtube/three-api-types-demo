import { NextResponse } from "next/server";

async function helloHandler(request: Request) {
  // run some backend logic
  console.log("Hello from server");

  // return a response
  return NextResponse.json({ message: "Hello from server" });
}

export { helloHandler as GET };
