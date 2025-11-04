import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  // Public paths (accessible without login)
  const publicPaths = ["/login", "/signup", "/"];
  if (publicPaths.includes(pathname)) return NextResponse.next();

  // No token → redirect to login
  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Admin-only routes
    if (pathname.startsWith("/admindashboard") && decoded.role !== "admin") {
      return NextResponse.redirect(new URL("/userdashboard", req.url));
    }

    // User-only routes
    if (pathname.startsWith("/userdashboard") && decoded.role !== "user") {
      return NextResponse.redirect(new URL("/admindashboard", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admindashboard/:path*", "/userdashboard/:path*"],
};
