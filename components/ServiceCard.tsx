"use client";

import Image from "next/image";

interface ServiceCardProps {
  title: string;
  desc: string;
}

export default function ServiceCard({ title, desc }: ServiceCardProps) {
  return (
    <div className="bg-[#92A8D1] w-[260px] h-[160px] rounded-xl p-5 relative shadow-md flex flex-col justify-center">
      
      {/* Circle Icon */}
      <div className="w-10 h-10 bg-[#2C3A47] rounded-full flex items-center justify-center absolute -top-5 left-1/2 -translate-x-1/2">
        <Image src="/icon-service.svg" width={20} height={20} alt="icon" />
      </div>

      <h3 className="text-white font-semibold text-sm mt-4">{title}</h3>

      <p className="text-white text-xs mt-2">
        {desc}
      </p>

    </div>
  );
}