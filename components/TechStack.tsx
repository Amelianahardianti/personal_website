"use client";

import Image from "next/image";
import { useRef } from "react";

export default function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null);

const handleScrollRight = () => {
  const el = scrollRef.current;
  if (!el) return;

  // apakah sudah mentok kanan?
  const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

  if (isAtEnd) {
    // kalau mentok → balik ke awal
    el.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    // kalau belum → geser 200px ke kanan
    el.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  }
};

  return (
    <section className="w-full flex justify-center mt-32 px-4">
      <div className="w-[1200px] border border-[#D9D9D9] rounded-2xl p-8 relative">

        {/* TITLE */}
        <h2 className="text-xl font-semibold text-[#92A8D1] mb-6">
          Software & Language
        </h2>

        {/* ICON LIST (scrollable) */}
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto hide-scrollbar items-center pb-4"
        >
          <Image src="/Firebase.svg" width={80} height={80} alt="Firebase" />
          <Image src="/C++.png" width={80} height={80} alt="C++" />
          <Image src="/Python.png" width={80} height={80} alt="Python" />
          <Image src="/Php.png" width={80} height={80} alt="PHP" />
          <Image src="/ssarp.png" width={80} height={80} alt="C#" />
          <Image src="/Figma.png" width={80} height={80} alt="Figma" />
          <Image src="/NodeJs.png" width={80} height={80} alt="NodeJs" />
          <Image src="/JavaScript.png" width={80} height={80} alt="JS" />
          <Image src="/mysql.png" width={80} height={80} alt="MySQL" />
          <Image src="/github.svg" width={80} height={80} alt="GitHub" />
          <Image src="/AndroidStudio.png" width={80} height={80} alt="Android Studio" />
          <Image src="/Kotlin.png" width={80} height={80} alt="Kotlin" />
          <Image src="/MongoDB.png" width={80} height={80} alt="MongoDB" />
          <Image src="/PostgreSQL.png" width={80} height={80} alt="PostgreSQL" />
          <Image src="/vs.png" width={80} height={80} alt="VS" />
          <Image src="/WPF.png" width={80} height={80} alt="WPF" />
        </div>

        {/* ARROW BUTTON */}
        <button
          onClick={handleScrollRight}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#F7CAC9] flex items-center justify-center shadow-md hover:opacity-80 transition"
        >
          <Image src="/arrow-right.svg" width={24} height={24} alt="arrow" />
        </button>

      </div>
    </section>
  );
}
