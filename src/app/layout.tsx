// import { Work_Sans } from "next/font/google";
import './globals.css';

export const metadata = {
  title: 'Buyer',
  description: 'Distress Sale Buyer Application',
};

// const work_sans = Work_Sans({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-work-sans",
// });

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
