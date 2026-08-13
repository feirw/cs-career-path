import crypto from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "cscp_admin";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 ώρες / 8 hours

function secret(): string {
  const value = process.env.ADMIN_SECRET;
  if (!value || value.length < 16) {
    throw new Error(
      "Λείπει το ADMIN_SECRET (τουλάχιστον 16 χαρακτήρες) στο .env.local — δες το .env.example.",
    );
  }
  return value;
}

/** token = "<expiry>.<hmac>" */
export function createToken(): string {
  const expiry = Date.now() + MAX_AGE_SECONDS * 1000;
  const mac = crypto.createHmac("sha256", secret()).update(String(expiry)).digest("hex");
  return `${expiry}.${mac}`;
}

export function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  const [expiryPart, mac] = token.split(".");
  if (!expiryPart || !mac) return false;

  const expiry = Number(expiryPart);
  if (!Number.isFinite(expiry) || expiry < Date.now()) return false;

  const expected = crypto.createHmac("sha256", secret()).update(expiryPart).digest("hex");
  const a = Buffer.from(mac, "hex");
  const b = Buffer.from(expected, "hex");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function checkPassword(submitted: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    throw new Error("Λείπει το ADMIN_PASSWORD στο .env.local — δες το .env.example.");
  }
  const a = Buffer.from(submitted);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: MAX_AGE_SECONDS,
};

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return verifyToken(store.get(ADMIN_COOKIE)?.value);
}
