// import { Work_Sans } from "next/font/google";

import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReduxProvider from './_components/redux/ReduxProvider';
import QueryProvider from './providers/QueryProvider';

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
      <body>
        <QueryProvider>
          <ReduxProvider>{children}</ReduxProvider>
          <ToastContainer position="top-right" autoClose={3000} />
        </QueryProvider>
      </body>
    </html>
  );
}
