'use client'

import { CldImage } from "next-cloudinary"

const team = [
  {
    imagen: "samples/two-ladies",
    nombre: "Karla Gómez",
    rol: "Diseñadora Gráfica - Fotógrafa",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid!",
  },
  {
    imagen: "samples/man-portrait",
    nombre: "Alex ",
    rol: "Fotógrafo",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid!",
  },
  {
    imagen: "eugenia-mequestudio_dfdd2r_c_crop_ar_9_16_g4ddnp",
    nombre: "Eugenia Barahona",
    rol: "Diseñadora Gráfica - Productora Audiovisual",
    descripcion:
      "Soy Diseñadora gráfica, con especialidad en E-Marketing, actualmente estoy trabajando en Shelter Helps, soy parte del Departamento de Comunicaciones como Especialista en Producción audiovisual, por 5 años.   Además trabajo como Productora Audiovisual Freelance, desde hace 3 años, con mi propia marca Productora de Shortfilm, y Wedding Videos.",
  },
  {
    imagen: "pict250130_0258330000_ksx2wk",
    nombre: "Judith Arévalo",
    rol: "Desarrolladora Web",
    descripcion:
      "Soy desarrolladora web y me encanta crear sitios que no solo se vean bien, sino que también funcionen súper bien. He trabajado en landing pages, webs empresariales y apps usando herramientas modernas como JavaScript, TypeScript, PHP y tecnologías como Vite y Next.js con React. Disfruto encontrar el balance entre diseño y funcionalidad para que cada proyecto tenga su propia personalidad.",
  },
];

export default function AboutTeam() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center mb-26">
      <div className="h-full w-full flex flex-row items-center justify-center">
        <p className="flex flex-row text-center text-5xl md:text-6xl font-bold text-zinc-900 my-12">
          Nuestro e<span className="text-[#F1B000]">q</span>
          uipo
        </p>
      </div>
      <div className="flex flex-wrap h-full w-auto justify-around gap-y-8 gap-x-2 mx-2 md:mx-10 lg:mx-40">
        {team.map((team, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center bg-zinc-900 md:w-1/2 lg:w-1/3 w-84 text-white rounded-b-xs rounded-t-full"
          >
            <div className="rounded-full relative md:h-auto h-82 overflow-hidden m-2">
              <CldImage
                src={team.imagen}
                alt="profesionales agencia creativa meque"
                height={400}
                width={400}
                quality="auto"
                format="auto"
                className="object-cover object-top w-[400px] h-[400px]"
              />
            </div>
            <div className=" p-3 gap-y-3 flex flex-col">
              <p className="font-black">{team.nombre}</p>
              <p className="font-bold text-[#F1B000]">{team.rol}</p>
              <p>{team.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
