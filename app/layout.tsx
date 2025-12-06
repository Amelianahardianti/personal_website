import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
         <body className={poppins.className}>
        <Navbar />
        <div className="pt-[67px]">
          {children}
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Ameliana Portfolio",
  icons: {
    icon: "/iconn.png", // atau png kamu
  },
};

