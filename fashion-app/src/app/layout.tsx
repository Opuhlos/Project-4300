import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from './contexts/UserContext';

export const metadata: Metadata = {
  title: "Fashion App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
    <html lang="en">
      <body className="bg-background">
        {children}
      </body>
    </html>
    </UserProvider>
  );
}
