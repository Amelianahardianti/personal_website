"use client";

import ServiceCard from "./ServiceCard";
import Image from "next/image";
import { useRef } from "react";

export default function WhatIDo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    const el = scrollRef.current;
    if (!el) return;

    const isAtEnd =
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

    if (isAtEnd) {
      el.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      el.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about-me" className="w-full flex justify-center mt-52 px-4">
      <div className="flex w-[1256px] items-start justify-between">

        {/* LEFT SIDE */}
        <div className="max-w-xs">
          <h2 className="text-2xl font-semibold text-[#92A8D1]">What I do</h2>
          <p className="text-gray-700 mt-2 leading-relaxed">
            I build Android apps, web platforms, and desktop systems with a focus on
            performance and great user experience.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8">

          {/* LOOPING CARDS */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto hide-scrollbar pb-4 items-center h-[220px]"
          >
            <ServiceCard
              title="Android Development"
              desc="I build Android applications with clean UI, intuitive user experience, and scalable architecture using Kotlin and modern Android development practices."
            />

              <ServiceCard
                title="Web Development"
                desc="I develop responsive and user-friendly web applications using modern frameworks like Next.js and Tailwind, focusing on accessibility and performance."
              />

                <ServiceCard
                title="Desktop App Development"
                desc="I create feature-rich desktop applications using C# and WPF, focusing on performance and clean architecture."
              />

          </div>

          {/* ARROW */}
          <button
            onClick={handleScrollRight}
            className="w-12 h-12 bg-[#F7CAC9] rounded-full flex items-center justify-center shadow-md hover:opacity-80 transition"
          >
            <Image src="/arrow-right.svg" width={20} height={20} alt="arrow" />
          </button>

        </div>
      </div>
    </section>
  );
}
