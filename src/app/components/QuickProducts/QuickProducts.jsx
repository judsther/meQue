'use client';
import { CldImage } from "next-cloudinary";

const productos = [
  {
    img: "" || null,
    title: "Fotografía",
    description:
      "Calidad profesional, trabajado por expertos con más de 8 años de experiencia en la industria local.",
  },
  {
    img: "" || null,
    title: "Desarrollo Web",
    description:
      "Calidad profesional, trabajado por expertos con más de 8 años de experiencia en la industria local.",
  },
  {
    img: "" || null,
    title: "Diseño Gráfico",
    description:
      "Calidad profesional, trabajado por expertos con más de 8 años de experiencia en la industria local.",
  },
  {
    img: "" || null,
    title: "Branding",
    description:
      "Calidad profesional, trabajado por expertos con más de 8 años de experiencia en la industria local.",
  },
  {
    img: "" || null,
    title: "Creación de Imagen",
    description:
      "Calidad profesional, trabajado por expertos con más de 8 años de experiencia en la industria local.",
  },
  {
    img: "" || null,
    title: "Contenido Redes Sociales",
    description:
      "Calidad profesional, trabajado por expertos con más de 8 años de experiencia en la industria local.",
  },
];

export default function QuickProducts() {
  return (
    <section className="relative w-full flex justify-center mt-0">
      <div className="absolute flex w-[2000px] h-35 bg-zinc-800 -rotate-4 -mx-1 px-2 justify-center"></div>
      <div className=" bg-zinc-800 px-2 lg:px-40 flex flex-wrap  gap-1 gap-y-14 justify-between z-2 mt-20 pt-18 pb-10">
        {productos.map((productos, idx) => (
          <div key={idx} className="md:w-1/3 lg:w-1/4 bg-white p-3 rounded-xs">
            <CldImage
              alt="imagen"
              width={400}
              height={400}
              src={productos.img || "cld-sample-5"}
              className=""
            />
            <p className="font-bold uppercase my-2">{productos.title}</p>
            <p>{productos.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
