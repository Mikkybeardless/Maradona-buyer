// import { Work_Sans } from "next/font/google";
import './globals.css';

export const metadata = {
  title: 'Buyers',
  description: 'Distress Sale Buyer Application',
};

interface LayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
