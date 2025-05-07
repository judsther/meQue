
"use client";
import Link from "next/link";
import NavLink from "./components/NavLink"
import { CldImage } from "next-cloudinary";


export default function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="absolute m-5  flex w-auto items-center justify-center z-50">
        <div className=" flex gap-10 items-center border-2 border-[#F1B000] bg-black/60 md:bg-black/20 backdrop-blur-xs rounded-xs px-2 md:px-6 py-3 md:py-1 ">
          <Link className="hidden sm:block" href={"/"}>
            <CldImage
              alt="meque estudio creativo el salvador logo"
              src="yellow-white_xcfqwj"
              width="60"
              height="60"
              crop={{
                type: "auto",
              }}
            />
          </Link>
          <div className="flex justify-end md:justify-center h-full w-full md:gap-26 whitespace-nowrap ">
            <NavLink href="/" label="¡Hola!" />
            <NavLink href="/about" label="Así Somos" />
            <NavLink href="/contact" label="¿Segunda Cita?" />
          </div>
        </div>
      </nav>
    </div>
  );
};
