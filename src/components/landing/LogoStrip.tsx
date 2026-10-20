import Image from "next/image";

export function LogoStrip() {
  const logos = [
    { name: "Oxford Residence Hall", src: "/placeholder/logos/campus-1.svg" },
    { name: "Metro Dormitories", src: "/placeholder/logos/campus-2.svg" },
    { name: "Global Student Housing", src: "/placeholder/logos/campus-3.svg" },
    { name: "Polytechnic Residences", src: "/placeholder/logos/campus-4.svg" },
    { name: "Nordic Student Living", src: "/placeholder/logos/campus-5.svg" },
    { name: "Pacific Community Halls", src: "/placeholder/logos/campus-6.svg" },
  ];

  return (
    <section
      aria-label="Trusted Institutions"
      className="py-12 md:py-16 bg-[#08090b] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8">
          Trusted by modern universities and student housing directors worldwide
        </p>

        {/* Grayscale Placeholder Logos at Reduced Opacity */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center opacity-60 hover:opacity-90 transition-opacity duration-300">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-200 py-2 px-3"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo placeholder`}
                width={140}
                height={32}
                className="h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

