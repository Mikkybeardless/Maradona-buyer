import { Work_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Buyer",
  description: "Distress Sale Buyer Application",
};

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
