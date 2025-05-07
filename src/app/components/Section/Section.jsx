'use client'
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import Ribon from "../Ribbon/Ribon";

export default function Section() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, {once: true});
  const isInView2 = useInView(ref2, {once: true});

  return (
    <div className="w-full min-h-auto pt-12">
      <section
        ref={ref1}
        className={`flex justify-center ${
          isInView1
            ? "animate__animated animate__rotateIn animate__slow opacity-100"
            : "opacity-0"
        }`}
      >
        <div className="m-6 flex items-center justify-center bg-[#F1B000] rounded-full w-[250px] h-[250px]">
          <CldImage
            className="object-cover mt-4"
            alt="meque estudio creativo el salvador logo"
            src="Mask_group-6_n5tmrf"
            width={200}
            height={200}
            crop="fill"
          />
        </div>
      </section>

      <section
        ref={ref2}
        className={`transition-opacity duration-1000 pb-10 lg:px-40 px-2 ${
          isInView2
            ? "animate__animated animate__fadeInUp animate__slow opacity-100"
            : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-7xl font-extrabold  text-[#F1B000]">
          Somos el estudio creativo más accesible del mercado.
        </h1>
        <p className="text-zinc-800 md:text-3xl">
          Porque todos merecen la oportunidad de anunciar sus productos y
          servicios con calidad visual, creativa y profesional.
        </p>
      </section>

      <Ribon />
    </div>
  );
}
