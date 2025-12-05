/* components/Contact.tsx */

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full flex justify-center mt-32 px-4 mb-32"
    >
      <div className="w-[1200px] bg-white border border-[#D9D9D9] rounded-2xl p-12 shadow-sm">
        
        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-[#92A8D1]">
          Contact Me
        </h2>

        <p className="text-gray-600 mt-2 mb-8 max-w-lg">
          I'm open to collaboration, internship opportunities, or just a friendly chat. 
          Feel free to reach out anytime! 😊
        </p>

        {/* CONTACT BUTTONS */}
        <div className="flex flex-wrap gap-6 mt-8">
          
          <Link
            href="mailto:amelianahardianti@gmail.com"
            className="flex items-center gap-3 px-6 py-3 border rounded-xl bg-[#F7CAC9] text-white hover:bg-[#e7b2b1] transition"
          >
            <Mail size={20} /> Email Me
          </Link>

          <Link
            href="https://linkedin.com/in/amelianahardianti"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border rounded-xl bg-[#92A8D1] text-white hover:bg-[#7b93bb] transition"
          >
            <Linkedin size={20} /> LinkedIn
          </Link>

          <Link
            href="https://github.com/Amelianahardianti"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border rounded-xl bg-black text-white hover:bg-gray-800 transition"
          >
            <Github size={20} /> GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
