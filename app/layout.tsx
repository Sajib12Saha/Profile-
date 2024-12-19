import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Poppins({ subsets: ["latin"],
  weight:[
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "800",
    "900",

  ]
 });

export const metadata: Metadata = {
  title: "Sajib Chandra Saha",
  description: "This is my portflio website",
  icons: [{
    url: "/images/s.png",
    href:"/images/s.png",
    sizes:"200x200",

  }],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="xl:mx-auto max-w-screen-2xl">
        <Navbar/>
        {children} 
        </div>
        
        </body>
    </html>
  );
}
