// proxy.ts  (đặt ở project root hoặc src/proxy.ts)
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function proxy(request: NextRequest) {
  const basicAuth = request.headers.get("authorization")

  if (basicAuth?.startsWith("Basic ")) {
    const authValue = basicAuth.split(" ")[1]
    const [user, pwd] = atob(authValue).split(":")

    const validUser = process.env.BASIC_AUTH_USER
    const validPass = process.env.BASIC_AUTH_PASSWORD

    if (user === validUser && pwd === validPass) {
      return NextResponse.next()
    }
  }

  return new NextResponse("認証が必要です / Authentication Required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
