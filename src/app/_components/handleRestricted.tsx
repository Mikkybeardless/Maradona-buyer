'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export function handleRestrictedAction(
  actionData?: Record<string, string | boolean | number> & {
    name: string;
  }
) {
  const router = useRouter();
  // Save extra info about the action (optional)
  if (actionData) {
    Cookies.set(`${actionData.name}`, JSON.stringify(actionData));
  }
  // Save where they were going
  const currentPath = window.location.pathname + window.location.search;
  router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
}
