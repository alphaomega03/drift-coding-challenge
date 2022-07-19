import { withIronSession } from "next-iron-session"

export const withSession = (handler) => {
  return withIronSession(handler, {
    password: process.env.cookieSecret,
    cookieName: 'session',
    // ttl: 1,
    ttl: 15 * 24 * 3600,
    cookieOptions: {
      // secure: true,
      sameSite: true
    }
  })
}