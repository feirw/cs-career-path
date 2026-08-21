import crypto from "node:crypto";
import { cookies } from "next/headers";
import { recordLoginAttempt as dbRecordLoginAttempt, isRateLimited as dbIsRateLimited } from "./db";

export const ADMIN_COOKIE = "cscp_admin";
export const CSRF_COOKIE = "cscp_csrf";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 ώρες / 8 hours

function secret(): string {
  const value = process.env.ADMIN_SECRET;
  if (!value || value.length < 16) {
    throw new Error(
      "Λείπει το ADMIN_SECRET (τουλάχιστον 16 χαρακτήρες) στο .env.local — δες το .env.example.",
    );
  }
  if (value === "replace-with-a-long-random-string") {
    throw new Error(
      "ADMIN_SECRET is still set to default placeholder! Please change it to a random 16+ character string.",
    );
  }
  return value;
}

function password(): string {
  const value = process.env.ADMIN_PASSWORD;
  if (!value) {
    throw new Error("Λείπει το ADMIN_PASSWORD στο .env.local — δες το .env.example.");
  }
  if (value === "change-me-please") {
    throw new Error(
      "ADMIN_PASSWORD is still set to default placeholder! Please change it to a secure password.",
    );
  }
  return value;
}

export function isRateLimited(ip: string): boolean {
  return dbIsRateLimited(ip);
}

export function recordLoginAttempt(ip: string, success: boolean): void {
  dbRecordLoginAttempt(ip, success);
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

export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export async function verifyCSRFToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const store = await cookies();
  const storedToken = store.get(CSRF_COOKIE)?.value;
  if (!storedToken) return false;

  const a = Buffer.from(token);
  const b = Buffer.from(storedToken);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function checkPassword(submitted: string): boolean {
  const expected = password();
  const a = Buffer.from(submitted);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export const cookieOptions = {
  httpOnly: true,
  sameSite: "strict" as const, // Changed from "lax" to "strict"
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: MAX_AGE_SECONDS,
};

export const csrfCookieOptions = {
  httpOnly: false, // CSRF token needs to be readable by JS
  sameSite: "strict" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60, // 1 hour
};

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return verifyToken(store.get(ADMIN_COOKIE)?.value);
}
