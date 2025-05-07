"use client";
import { CldImage } from "next-cloudinary";

export default function AboutHero() {
  return (
    <section className="w-full min-h-screen">
      <div className="absolute z-10 flex items-center justify-center flex-col w-full h-full">
        <p className="font-black text-[#F1B000] px-5 text-4xl md:text-6xl w-2/3 text-center text-shadow-xs text-shadow-zinc-950/10 flex items-center justify-center mb-4">
          Somos meQue
        </p>
        <p className="text-lg md:text-2xl max-w-xl text-white text-shadow-xs text-shadow-zinc-950/20">
          estudio creativo
        </p>
      </div>
      <div className="absolute bg-black/65 w-full min-h-screen"></div>
      <div>
        <CldImage
          src="cld-sample-4"
          alt="Baner Fotografía profesonal en El Salvador"
          width={1500}
          height={880}
          sizes="100vw"
          loading="eager"
          priority
          className="object-cover w-full min-h-screen lg:h-[872px]"
        />
      </div>
    </section>
  );
}
