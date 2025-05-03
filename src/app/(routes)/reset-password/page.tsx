'use client';

import dynamic from 'next/dynamic';

// Load the component on the client only
const ResetPassword = dynamic(
  () => import('@/app/_components/auths/ResetPassword'),
  {
    ssr: false,
  }
);

export default function Page() {
  return <ResetPassword />;
}
