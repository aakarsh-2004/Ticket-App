import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import Navbar from "../../components/Navbar/Navbar";
import Navbar from "./(components)/Nav";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticketing App",
  description: "Ticketing App, used to create tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        <div className="flex flex-col h-screen max-h-screen">
          <div className="flex-grow overflow-y-auto bg-page text-default-text">{children}</div>
        </div>
      </body>
    </html>
  );
}
