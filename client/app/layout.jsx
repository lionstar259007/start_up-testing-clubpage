// 'use client'
import { Inter } from 'next/font/google';
import './styles/main.scss';
import Header from '@/app/components/Header';
import {UserContextProvider} from "../app/context/user_context";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Start up',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
