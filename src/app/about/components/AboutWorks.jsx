"use client";
import { useInView } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useRef } from "react";

export default function AboutWorks() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);


  const isInview1 = useInView(ref1, { once: true });
  const isInview2 = useInView(ref2, { once: true });
  const isInview3 = useInView(ref3, { once: true });

 
  const animation1 = isInview1
      ? "animate__animated animate__fadeInUp opacity-100"
      : "opacity-0";

  const animation2 = isInview2
      ? "animate__animated animate__fadeInUp opacity-100"
      : "opacity-0";

  const animation3 = isInview3
        ? "animate__animated animate__fadeInUp opacity-100"
        : "opacity-0";

  const trabajos = {
    fotografia: {
      categoria: "Fotografía y Vídeo",

      description:
        "Capturamos la esencia de tu marca a través de imágenes cuidadosamente planeadas. Nos enfocamos en la creación de contenido visual auténtico y de alta calidad que conecte con tu audiencia, alineado con tu identidad y objetivos estratégicos.",

      imagenes: [
        {
          img: "DSC_4879_vnelqt",
          alt: "fotografia profesional meque estudio creativo",
          cls: `md:ml-6 ${animation1} animate__faster`,
          ref: ref1,
        },
        {
          img: "OTI_5856_rvzwn4",
          alt: "fotografia profesional meque estudio creativo",
          cls: `md:ml-58 ${animation1} animate__fast`,
          ref: ref1,
        },
        {
          img: "OTI_5690_f8x45e",
          alt: "fotografia profesional meque estudio creativo",
          cls: `md:ml-24 ${animation1} animate__slow`,
          ref: ref1,
        },
      ],
    },
    diseno: {
      categoria: "Diseño Gráfico",

      description:
        "Creamos identidades visuales sólidas y coherentes que representan lo mejor de tu marca. Desde logotipos hasta piezas gráficas personalizadas, nuestro enfoque combina creatividad y estrategia para lograr una comunicación visual efectiva y profesional.",

      imagenes: [
        {
          img: "menu_l3tdha",
          alt: "diseño grafico estudio creativo",
          cls: `md:ml-6 ${animation2} animate__faster`,
          ref: ref2,
        },
        {
          img: "dona_kd2l3g",
          alt: "diseño grafico estudio creativo",
          cls: `md:ml-58 ${animation2} animate__fast`,
          ref: ref2,
        },
        {
          img: "burritos_lpdaqe",
          alt: "diseño grafico estudio creativo",
          cls: `md:ml-24 ${animation2} animate__slow`,
          ref: ref2,
        },
      ],
    },

    web: {
      categoria: "Desarrollo Web",

      description:
        "Diseñamos y desarrollamos sitios web funcionales y atractivos que se adaptan a tus necesidades. Cada proyecto es personalizado, priorizando la experiencia del usuario, el diseño moderno y el cumplimiento de tus objetivos comerciales.",

      imagenes: [
        {
          img: "mtgymchat_xavulb",
          alt: "",
          cls: `md:ml-6 ${animation3} animate__faster`,
          ref: ref3,
        },
        {
          img: "edgeline_hmah0r",
          alt: "",
          cls: `md:ml-58 ${animation3} animate__fast`,
          ref: ref3,
        },
        {
          img: "church_vrzhxf",
          alt: "",
          cls: `md:ml-24 ${animation3} animate__slow`,
          ref: ref3,
        },
      ],
    },
  };

  return (
    <section className="h-auto w-full">
      <div className="h-full w-full flex flex-col">
        {Object.entries(trabajos).map(([categoria, contenido]) => (
          <section
            key={categoria}
            className={`flex md:px-40 px-3 justify-center items-center py-18 ${
              contenido.categoria === "Diseño Gráfico"
                ? "flex-col md:flex-row-reverse"
                : "flex-col md:flex-row bg-neutral-100"
            }`}
          >
            <p className="md:w-1/2 flex flex-col mb-6 md:mb-0">
              <span className="mb-6 font-bold text-2xl">
                {contenido.categoria}
              </span>
              {contenido.description}
            </p>
            <div className="md:m-5 flex flex-col ">
              {contenido.imagenes.map((imagen, i) => (
                <div
                  key={i}
                  className="h-full w-full md:-my-14 md:m-0 m-2 rounded-sm"
                >
                  <CldImage
                    ref={imagen.ref}
                    alt={imagen.alt}
                    width={400}
                    height={400}
                    quality="auto"
                    format="auto"
                    src={imagen.img || "cld-sample-5"}
                    className={`md:h-[300px] md:w-[300px] h-62 w-62 rounded-sm object-cover md:ml-6 ${imagen.cls}`}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
