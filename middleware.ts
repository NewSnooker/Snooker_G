import { NextRequest, NextResponse } from "next/server";

import { auth0 } from "@/lib/auth0";

export async function middleware(request: NextRequest) {
  const authRes = await auth0.middleware(request);

  if (request.nextUrl.pathname.startsWith("/auth")) {
    return authRes;
  }

  const session = await auth0.getSession(request);

  if (!session) {
    // user is not authenticated, redirect to login page
    return NextResponse.redirect(
      new URL("/auth/login", request.nextUrl.origin)
    );
  }

  // the headers from the auth middleware should always be returned
  return authRes;
}
// import { jwtDecode, JwtPayload } from "jwt-decode";
// interface CustomJwtPayload extends JwtPayload {
//   permissions?: string[];
// }

// export default withMiddlewareAuthRequired(async (req) => {
//   const res = NextResponse.next();

//   const user = await getSession(req, res);

//   if (!user) {
//     return NextResponse.redirect("/api/auth/login");
//   }
//   const accessTokenData = user.accessToken
//     ? jwtDecode<CustomJwtPayload>(user.accessToken)
//     : null;

//   const permissions = accessTokenData?.permissions || [];
//   console.log("permissions", permissions);

//   return res;
// });

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//      */
//     "/profile",
//     "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };
