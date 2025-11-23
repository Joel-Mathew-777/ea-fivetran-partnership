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
    <html lang="en" className="overflow-x-hidden max-w-full min-h-screen">
      <body className="bg-white dark:bg-primary-dark-gray max-w-full overflow-x-hidden">
        <Navbar />
        <main className="mt-[40px]">{children}</main>
      </body>
    </html>
  );
}
