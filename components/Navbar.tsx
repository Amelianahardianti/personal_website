import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-[67px] flex items-center justify-between px-10 shadow-sm bg-white fixed top-0 left-0 z-50">
      
      {/* LOGO AREA */}
      <div className="flex items-center gap-3">
        <Image 
          src="/logo.png"   
          alt="logo"
          width={45}
          height={45}
        />
        <div>
          <h1 className="text-lg font-semibold text-[#E19C9B]">Ameliana</h1>
          <p className="text-xs text-gray-600 -mt-1">Personal Website</p>
        </div>
      </div>

      {/* MENU ITEMS */}
      <div className="flex items-center gap-8 text-gray-700 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/#about-me">About Me</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
      </div>

      {/* DOWNLOAD CV BUTTON */}
      <a
        href="/Ameliana_cv.pdf"
        download
        className="bg-[#E19C9B] text-white px-5 py-2 rounded-lg text-sm hover:opacity-90 transition"
      >
        Download CV
      </a>

    </nav>
  );
}
