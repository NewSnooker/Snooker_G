import { NextRequest, NextResponse } from "next/server";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { auth0 } from "@/lib/auth0";

interface CustomJwtPayload extends JwtPayload {
  permissions?: string[];
}

export async function middleware(request: NextRequest) {
  const authRes = await auth0.middleware(request);
  const publicPaths = ["/"];

  // ข้ามการตรวจสอบสำหรับ path พิเศษ เช่น /auth
  if (request.nextUrl.pathname.startsWith("/auth")) {
    return authRes;
  }

  // อนุญาตให้เข้าถึง public paths โดยไม่ต้องล็อกอิน
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return authRes;
  }

  // ตรวจสอบ session
  const session = await auth0.getSession(request);
  if (!session) {
    console.log("No session found, redirecting to login");
    return NextResponse.redirect(
      new URL("/auth/login", request.nextUrl.origin)
    );
  }

  // // ถอดรหัส accessToken
  let accessTokenData: CustomJwtPayload | null = null;
  try {
    accessTokenData = jwtDecode<CustomJwtPayload>(session.tokenSet.accessToken);
  } catch (error) {
    console.error("Failed to decode accessToken:", error);
  }
  console.log("accessTokenData", accessTokenData);

  const permissions = accessTokenData?.permissions || [];

  console.log("permissions:", permissions);

  return authRes;
}

export const config = {
  matcher: [
    "/profile",
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|/).*)",
  ],
};
