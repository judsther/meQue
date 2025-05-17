'use client';
import { CldImage } from "next-cloudinary";


export default function Background() {
  return (
    <section>
      <div className="absolute bg-black/65 w-full min-h-screen z-0"></div>
      <div>
        <CldImage
          src="DSC_2921_rtu8tv"
          alt="Baner Fotografía profesonal en El Salvador"
          width={1080}
          height={720}
          sizes="100vw"
          loading="eager"
          quality="auto"
          format="auto"
          className="object-cover w-full min-h-screen lg:h-[872px]"
        />
      </div>
    </section>
  );
}
