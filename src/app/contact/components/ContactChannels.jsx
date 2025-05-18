'use client';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Background from "./Background";

export default function ContactChannels() {
  return (
    <section className="md:min-h-screen h-auto w-full ">
      <div className="flex lg:flex-row-reverse flex-col-reverse md:mt-0 mt-26 md:mb-0 mb-4 md:gap-24 gap-8 justify-center items-center w-full h-full z-10 absolute rounded-xs">
        <div className="flex-col flex items-center justify-center w-full px-6 md:px-0 md:w-1/3 rounded-xs">
          <p className="font-black text-2xl px-1.5 -mb-4 bg-zinc-900 text-white rotate-1">
            o envía correo directo ;)
          </p>
          <form
            method="POST"
            encType="text/plain"
            action="mailto:j.arevaloguardado@gmail.com"
            className="bg-[#F1B000] p-4 flex flex-col w-full h-full gap-3 pt-12 rounded-xs border-2 border-zinc-100 shadow-gray-950 shadow-md"
          >
            <input
              className="bg-white"
              type="text"
              name="nombre"
              placeholder="tu nombre"
              required
            />
            <input
              className="bg-white"
              type="text"
              name="email"
              placeholder="tuemail@dominio.com"
              required
            />
            <input
              className="bg-white"
              type="text"
              name="WhatsApp"
              placeholder="WhatsApp (opcional) "
              required
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              className="bg-white h-22"
              required
            ></textarea>
            <button className="bg-amber-100 " type="submit">
              enviar
            </button>
          </form>
        </div>
        {/** redes sociales */}
        <div className="flex flex-col items-center md:w-1/3 ">
          <p className="font-black text-2xl px-1 -mb-6 bg-[#F1B000] -rotate-3">
            ¡búscanos en redes!
          </p>
          <div className="flex flex-col gap-4 text-zinc-100 bg-zinc-900 py-22 px-10 pe-28 rounded-xs h-full border-2 border-zinc-100 shadow-gray-950 shadow-md">
            <a
              className="flex items-center gap-2 hover:text-[#F1B000] "
              href="https://facebook.com"
              target="_blank"
            >
              <FaFacebook className="text-2xl" /> <p>Facebook</p>
            </a>
            <a
              className="flex items-center gap-2 hover:text-[#F1B000]"
              href="https://instagram.com"
              target="_blank"
            >
              <FaInstagram className="text-2xl" /> <p>Instagram</p>
            </a>
            <a
              className="flex items-center gap-2 hover:text-[#F1B000]"
              href="https://linkedin.com"
              target="_blank"
            >
              <FaWhatsapp className="text-2xl" /> <p>WhastApp</p>
            </a>
          </div>
        </div>
      </div>
      <Background />
    </section>
  );
}
