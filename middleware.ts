import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/uses")) {
    return NextResponse.rewrite(new URL("/como-trabajo", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/uses",
};
