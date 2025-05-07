'use client'

import { CldImage } from "next-cloudinary"

export default function AboutTeam() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="h-full w-full flex flex-row items-center justify-center">
        <p className="flex flex-row text-center text-4xl font-bold text-zinc-900">
          Nuestro e
          <span className="-me-3 -ms-1 mt-3">
            <CldImage
              src="q-4_rbaobb"
              alt="q logo"
              height={35}
              width={35}
              className=""
            />
          </span>
          uipo
        </p>
      </div>
      <div className=" bg-zinc-300">
        <div className="bg-zinc-400 ">

        </div>
      </div>
    </section>
  );
}
