import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full flex justify-center mt-28 px-4">

      {/* Background grid */}
      <img 
        src="/grid.png"
        alt="grid"
        className="absolute bottom-[-80px] right-[50px] w-[850px] opacity-40 pointer-events-none"
      />

      <div className="bg-white w-[1350px] h-[560px] rounded-3xl border border-[#F7CAC9] shadow-md flex items-center justify-between px-20 relative z-10">
        
        {/* TEXT SECTION */}
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold text-black mb-3">Hi I am</h2>
          <h1 className="text-5xl font-bold text-[#92A8D1]">Ameliana</h1>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Undergraduate Student of Informatic Engineering at<br />
            Universitas Gadjah Mada
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="w-[420px] h-[420px] rounded-full border-[4px] border-[#F7CAC9] shadow-md overflow-hidden">
            <Image
              src="/amel.png"
              alt="Amel"
              width={420}
              height={420}
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
