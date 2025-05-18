'use client';
import { CldImage } from "next-cloudinary";

const productos = [
  {
    img: "DSC_7614_ttepce" || null,
    title: "Fotografía",
    description:
      "Capturamos momentos con enfoque artístico y precisión técnica. Nuestro equipo cuenta con años de experiencia en fotografía comercial, de producto y lifestyle, logrando imágenes que cuentan historias y elevan tu marca.",
  },
  {
    img: "mtgymchat_xavulb" || null,
    title: "Desarrollo Web",
    description:
      "Diseñamos y desarrollamos sitios web funcionales, atractivos y personalizados. Nos enfocamos en la experiencia del usuario, adaptabilidad y rendimiento para ayudarte a destacar en el entorno digital actual.",
  },
  {
    img: "menu2_r6r8n7" || null,
    title: "Diseño Gráfico",
    description:
      "Transformamos ideas en piezas visuales impactantes. Creamos desde flyers hasta campañas gráficas completas, alineadas a tu identidad de marca y con enfoque estratégico.",
  },
  {
    img: "brand_przirj" || null,
    title: "Branding",
    description:
      "Construimos marcas con propósito. Te ayudamos a definir y diseñar una identidad coherente, memorable y competitiva que conecte con tu público y potencie tu negocio desde sus cimientos.",
  },
  {
    img: "logos_fjripe" || null,
    title: "Creación de Imagen",
    description:
      "Damos forma a la esencia de tu marca mediante conceptos visuales únicos y pensados para destacar. Desde el logotipo hasta su aplicación en distintos formatos, tu imagen será sólida y profesional.",
  },
  {
    img: "socials_l9fl3s" || null,
    title: "Contenido Redes Sociales",
    description:
      "Diseñamos contenido visual dinámico y estratégico que engancha, comunica y convierte. Ya sea para historias, reels, carruseles o campañas, creamos material que fortalece tu presencia online.",
  },
];

export default function QuickProducts() {
  return (
    <section className="relative w-full flex justify-center mt-0">
      <div className="absolute flex w-[2000px] h-35 bg-zinc-800 -rotate-4 -mx-1 px-2 justify-center"></div>
      <div className=" bg-zinc-800 px-2 lg:px-40 flex flex-wrap  gap-1 gap-y-14 justify-between z-2 mt-20 pt-18 pb-10">
        {productos.map((productos, idx) => (
          <div key={idx} className=" md:w-1/3 lg:w-1/4 bg-white p-3 rounded-xs">
            <CldImage
              alt="servicios agencia de marketing"
              width={400}
              height={400}
              quality="auto"
              format="auto"
              src={productos.img || "cld-sample-5"}
              className=" h-[300px] md:w-[300px] w-[600px] object-cover object-center"
            />
            <p className="font-bold uppercase my-2">{productos.title}</p>
            <p>{productos.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
