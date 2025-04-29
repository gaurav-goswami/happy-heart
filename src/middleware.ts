import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// This middleware will check for "auth" cookie and will redirect accordingly
export async function middleware(request: Request) {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("auth");
    const { pathname } = new URL(request.url);

    if (pathname === "/login" && authCookie) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (pathname.startsWith("/dashboard") && !authCookie) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/login"],
};
