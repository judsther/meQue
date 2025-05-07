import React from 'react'

export default function Footer() {
  return (
    <section>
      <div className="bg-zinc-900 h-auto w-full flex justify-center flex-col gap-4 py-8">
        <div className=" flex gap-4 justify-center text-white text-center">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>MeQue</p>
        </div>
        <div className="text-zinc-200 text-center">
          <p>
            © 2025 MeQue Estudio Creativo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
