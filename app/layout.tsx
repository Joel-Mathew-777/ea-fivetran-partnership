import "./globals.css";
import Navbar from "./components/Navbar"; // Adjust path based on your structure

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white min-h-screen dark:bg-primary-dark-gray">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}