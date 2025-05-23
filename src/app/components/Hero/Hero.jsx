

"use client";
import { CldImage } from "next-cloudinary";

export default function Hero() {
  const images = [
    {
      img: "DSC_7614_ttepce",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "OTI_5856_rvzwn4",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "DSC_2921_rtu8tv",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "OTI_2154_ubjnb8",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "OTI_4907_fa8jn0",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "OTI_5690_f8x45e",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "OTI_5753_zilqdk",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "OTI_6825_ybhmoj",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "DSC_8907_onqbgf",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "DSC_2921_rtu8tv",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "OTI_6825_ybhmoj",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "DSC_0995_etxhxz",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "DSC_7558_tby0xw",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "DSC_4885_iydpeu",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "OTI_4907_fa8jn0",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "DSC_4527_b9r0du",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "DSC_4522_ny8eu3",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "DSC_4879_vnelqt",
      cls: "slide-up-loop",
      alt: "imagen",
    },
  ];

  return (
    <section className="relative w-full h-[700px] md:h-screen">
      <div className="absolute inset-0 overflow-hidden z-0 ">
        {/* Grid de imágenes */}
        <div className="grid grid-cols-3 grid-rows-4 gap-2">
          {images.map((image, idx) => (
            <CldImage
              key={idx}
              src={image.img}
              alt={image.alt}
              width={600}
              height={600}
              crop="fill"
              gravity="auto"
              quality="auto"
              format="auto"
              loading="eager"
              priority
              className={`w-full h-full object-cover ${image.cls || ""}`}
            />
          ))}
        </div>

        {/* Capa de transparencia */}
        <div className="absolute inset-0 bg-black/65 z-5" />
      </div>

      {/* Texto */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-4 text-[#F1B000] text-shadow-xs text-shadow-zinc-950/10">
          Nos involucramos...
        </h1>
        <p className="text-lg md:text-2xl max-w-xl text-white text-shadow-xs text-shadow-zinc-950/20">
          con tu marca como si fuera la nuestra 😉
        </p>
      </div>
    </section>
  );
}

