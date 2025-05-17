"use client";
import { CldImage } from "next-cloudinary";

const fotografia = [
  {
    img: "DSC_4879_vnelqt",
    alt: "fotografia profesional meque estudio creativo",
    cls: "ml-6 ",
  },
  {
    img: "OTI_5856_rvzwn4",
    alt: "fotografia profesional meque estudio creativo",
    cls: "ml-58 ",
  },
  {
    img: "OTI_5690_f8x45e",
    alt: "fotografia profesional meque estudio creativo",
    cls: "ml-24 ",
  },
];

const redes = [
  {
    img: "",
    alt: "",
  },
  {
    img: "",
    alt: "",
  },
  {
    img: "",
    alt: "",
  },
];

const web = [
  {
    img: "",
    alt: "",
  },
  {
    img: "",
    alt: "",
  },
  {
    img: "",
    alt: "",
  },
];

export default function AboutWorks() {
  return (
    <section className="h-auto w-full  md:px-40">
      <div className="h-full w-full flex flex-col">
        <section className="flex justify-center items-center my-18">
          <p className="w-1/2 flex flex-col">
            <span className="mb-6 font-bold text-2xl">Fotografía</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro a
            dicta asperiores impedit repellendus, ad amet doloremque non.
            Nemo!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            vel sunt iste laborum suscipit. Reprehenderit mollitia quod eos odio
            repellat, laborum aperiam voluptate dolores minus nisi illo ipsa
            temporibus vel, a perferendis sapiente, vero dicta. Sunt excepturi
            unde ab placeat, ex accusantium aliquam mollitia officiis earum
            quaerat maxime explicabo repellendus architecto minima officia,
            inventore perspiciatis labore beatae debitis qui repellat!
          </p>
          <div className="m-5 flex flex-col ">
            {fotografia.map((fotografia, i) => (
              <div key={i} className=" h-full w-full -my-14">
                <CldImage
                  alt="imagen"
                  width={400}
                  height={400}
                  src={fotografia.img || "cld-sample-5"}
                  className={`${fotografia.cls} h-[300px] w-[300px] object-cover`}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="flex m-10">
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro a
            dicta asperiores impedit repellendus, ad amet doloremque non. Nemo!
          </p>

          {fotografia.map((fotografia, i) => (
            <div key={i}>
              <CldImage
                alt="imagen"
                width={400}
                height={400}
                src={fotografia.img || "cld-sample-5"}
                className=" h-[300px] w-[300px] object-cover"
              />
            </div>
          ))}
        </section>
        <section className="flex">
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro a
            dicta asperiores impedit repellendus, ad amet doloremque non. Nemo!
          </p>

          {fotografia.map((fotografia, i) => (
            <div key={i}>
              <CldImage
                alt="imagen"
                width={400}
                height={400}
                src={fotografia.img || "cld-sample-5"}
                className=" h-[300px] w-[300px] object-cover"
              />
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
