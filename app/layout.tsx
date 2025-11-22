import "./globals.css";
import Navbar from "./components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ea-fivetran-partnership",
  icons: {
    icon: "/ea-logo.png",

  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen dark:bg-primary-dark-gray">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
