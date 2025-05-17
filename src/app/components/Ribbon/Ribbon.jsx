
const palabras = [
  "FOTOGRAFÍA",
  "DESARROLLO WEB",
  "DISEÑO GRÁFICO",
  "CREACIÓN DE CONTENIDO",
];

export default function Ribon() {
  return (
    <section className="mt-20 -mx-3">
      <div className="flex bg-[#F1B000]  py-4 items-center -rotate-4 justify-center ">
        <div className=" flex items-center justify-center text-zinc-900 font-black text-md lg:text-3xl gap-5 lg:gap-20">
          {palabras.map((idx) => (
            <p className=" whitespace-nowrap" key={idx}>
              {/*<span className="bg-zinc-800 px-3.5 rounded-full mx-10"></span>*/}
              {idx}
            </p>
          ))}
        </div>
      </div>
      {/*<div className="flex bg-amber-300 -mt-7 text-zinc-800 py-4 rotate-6 font-black text-3xl gap-20 justify-center">
        {palabras.map((idx) => (
          <p key={idx}>
            {idx}
          </p>
        ))}
      </div> */}
    </section>
  );
}
