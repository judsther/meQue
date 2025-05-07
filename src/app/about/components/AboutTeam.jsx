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
    imagen: "samples/smile",
    nombre: "Eugenia Barahona",
    rol: "Diseñadora Gráfica - Productora Audiovisual",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid!",
  },
  {
    imagen: "samples/two-ladies",
    nombre: "Judith Arévalo",
    rol: "Desarrolladora Web",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid! Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, aliquid!",
  },
];

export default function AboutTeam() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center mb-26">
      <div className="h-full w-full flex flex-row items-center justify-center">
        <p className="flex flex-row text-center text-5xl md:text-6xl font-bold text-zinc-900 my-12">
          Nuestro e
          <span className="-me-5 -ms-1 md:mt-4 mt-2">
            <CldImage
              src="q-4_rbaobb"
              alt="q logo"
              height={55}
              width={55}
              className="w-auto h-auto "
            />
          </span>
          uipo
        </p>
      </div>
      <div className="flex flex-wrap justify-around gap-y-8 md:mx-40">
        {team.map((team, i) => (
          <div
            key={i}
            className="flex flex-col items-center  bg-zinc-900 p-4 w-auto md:w-1/3 h-auto mx-4 gap-y-4 text-white rounded-t-full rounded-b-2xl"
          >
            <div className="rounded-full w-full h-[400px] overflow-hidden">
              <CldImage
                src={team.imagen}
                alt="profesionales agencia creativa meque"
                height={400}
                width={400}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <p className="font-black">{team.nombre}</p>
            <p className="font-bold text-[#F1B000]">{team.rol}</p>
            <p>{team.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
