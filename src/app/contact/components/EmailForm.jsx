'use client';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Fondo from "./Fondo";

export default function EmailForm() {
  return (
    <section className="min-h-screen w-full">
      <div className="flex flex-row gap-10 justify-center items-center lg:mx-40 w-full h-full z-10 absolute">
        <div className=" flex items-center justify-center w-1/2 bg-gray-400">
          <form
            method="POST"
            encType="text/plain"
            action="mailto:j.arevaloguardado@gmail.com"
            className="bg-[#F1B000] p-4 flex flex-col w-full h-full gap-3 rounded-xs"
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
              className="bg-white"
              required
            ></textarea>
            <button type="submit">enviar</button>
          </form>
        </div>
        <div className="flex items-center w-1/2">
          <div className="flex flex-col gap-4 text-zinc-100">
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
      <Fondo />
    </section>
  );
}
