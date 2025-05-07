

"use client";
import { CldImage } from "next-cloudinary";

export default function Hero() {
  const images = [
    {
      img: "cld-sample-2",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-4",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-5",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-3",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "samples/dessert-on-a-plate",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-2",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-4",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-5",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-3",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "samples/dessert-on-a-plate",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-2",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-4",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-5",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample-3",
      cls: "slide-up-loop",
      alt: "imagen",
    },
    {
      img: "cld-sample",
      cls: "slide-down-loop",
      alt: "imagen",
    },
    {
      img: "samples/dessert-on-a-plate",
      cls: "slide-up-loop",
      alt: "imagen",
    }

    // Añade más public IDs de Cloudinary aquí
  ];

  return (
    <section className="relative w-full h-[800px] md:h-screen">
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

