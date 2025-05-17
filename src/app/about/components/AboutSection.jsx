'use client';

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-[#F1B000]">
      <div className="flex h-full w-full">
        <div className="flex justify-center flex-col items-center md:mx-40">
          <p className="font-extrabold text-center text-5xl mb-8 text-white lowercase">
            Story Time
          </p>
          
          <p className="text-center text-2xl ">
            Somos un equipo completo de profesionales con experiencia en la
            industria de la fotografía, diseño grafico, producción audiovisual y
            desarrollo web. El equipo meQue es una unión de talento diverso,
            complementando nuestras habilidades para entregar contenido de
            calidad y conceptos originales; desde branding y diseño gráfico
            hasta desarrollo de estrategias visuales.
            <br />
            <br />
            Nos especializamos en convertir conceptos en diseños cautivadores
            que cuentan historias y dejan huella. Trabajamos contigo para
            asegurarnos de que cada detalle refleje tu esencia y visión. Nuestro
            objetivo es llevar tus proyectos al siguiente nivel.
          </p>
        </div>
      </div>
    </section>
  );
}
