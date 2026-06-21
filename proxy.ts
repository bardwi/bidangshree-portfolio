import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Run on all paths except API routes, Next internals, and files with an
  // extension (e.g. /logo.png, /portrait.jpg, favicon).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
