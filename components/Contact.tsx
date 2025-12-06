/* components/Contact.tsx */

"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "amelianautari@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
      <section id="contact" className="w-full flex justify-center mt-32 px-4 mb-32">
       <div className="w-[1200px] flex flex-col items-center text-center">

        {/* SMALL LABEL */}
        <span className="text-xs bg-[#D0E4F5] text- [#4B5563] px-4 py-1 rounded-full">
          Get in touch
        </span>

        {/* BIG TEXT */}
        <p className="text-gray-700 max-w-[700px] leading-relaxed mt-10 ">
          What’s next? Feel free to reach out to me if you're looking for 
          a collab, have a query, or simply want to connect.
        </p>

        {/* EMAIL BOX */}
        <div className="flex items-center gap-4 border border-[#D9D9D9] rounded-xl px-6 py-4 w-fit bg-[#fff] shadow-sm mt-10">
          <Image src="/Mail.svg" width={20} height={20} alt="mail" />

          <span className="text-lg text-gray-800 font-medium">
            {email}
          </span>

          <button
            onClick={handleCopy}
            className="text-[#92A8D1] hover:underline text-sm"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* FOOTER LINE */}
        <p className="text-gray-500 text-sm mt-10">
          You may also find me on these platforms!
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-5">

          <a href="https://linkedin.com/in/amelianahardiantiutari" target="_blank">
           <img src="/Linkedin.svg" width="22" height="22" alt="LinkedIn" />
          </a>

          <a href="https://github.com/Amelianahardianti" target="_blank">
            <Image src="/Githubb.svg" width={22} height={22} alt="GitHub" />
          </a>

          <a href="https://instagram.com/amelianahar_" target="_blank">
            <Image src="/Instagram.svg" width={22} height={22} alt="Instagram" />
          </a>

        </div>

      </div>
    </section>
  );
}
