# Security Measures

## Admin Panel Protection

The admin panel at `/admin` now includes multiple layers of security:

### 1. **Rate Limiting**
- **5 failed login attempts per 15-minute window per IP**
- Tracked in-memory with automatic reset
- IP detection via `x-forwarded-for` and `x-real-ip` headers
- Security alerts logged when limits exceeded

### 2. **CSRF Protection**
- **CSRF tokens** required on all state-changing operations
- Token generated on `/api/admin/login` GET request
- Stored in **HttpOnly cookie** (`cscp_csrf`)
- Validated on `/api/admin/login` POST and `/api/admin/stats` GET requests
- **SameSite=strict** cookie policy

### 3. **Session Security**
- **HMAC-SHA256** token verification
- Sessions expire after **8 hours**
- HttpOnly cookies (XSS protection)
- Timing-safe comparisons (prevent timing attacks)
- Strict SameSite policy (CSRF protection)

### 4. **Password Security**
- **Timing-safe comparison** prevents timing attacks
- Configurable via `ADMIN_PASSWORD` environment variable
- Minimum 16 characters for `ADMIN_SECRET`

### 5. **Request Validation**
- CSRF token validation on all protected endpoints
- Date range validation on stats queries
- Type-safe parameter parsing

## Environment Variables

Required in `.env.local`:

```
ADMIN_SECRET=<at-least-16-random-characters>
ADMIN_PASSWORD=<your-secure-password>
```

## Monitoring

Security events are logged with `[SECURITY]` prefix:

```
[SECURITY] Potential brute force attack from IP: ...
[SECURITY] Rate limit exceeded for IP: ...
[SECURITY] Missing CSRF token from IP: ...
[SECURITY] Invalid CSRF token for stats request
```

Monitor these in your application logs.

## Future Improvements

- [ ] 2FA/TOTP support
- [ ] Login attempt database tracking
- [ ] Email alerts on suspicious activity
- [ ] Session invalidation management
- [ ] Redis-based distributed rate limiting
