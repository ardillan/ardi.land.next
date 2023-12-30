import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/uses")) {
    return NextResponse.rewrite(new URL("/como-trabajo", request.url));
  }
}
