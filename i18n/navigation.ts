import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware navigation. usePathname() returns the path WITHOUT the locale
// prefix; <Link locale="en" /> switches locale while keeping the same path.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
