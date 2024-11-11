import localFont from "next/font/local";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home - Building quality results you can be proud of.",
  description: "Home - Building quality results you can be proud of.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideNavigation />
        {children}
      </body>
    </html>
  );
}
