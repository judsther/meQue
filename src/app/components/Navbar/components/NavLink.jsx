import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label }){
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="relative">
      {isActive && (
        <div className="absolute flex justify-center items-center px-2 py-1 -bottom-0.5 md:-bottom-1 animate__animated animate__slideInDown animate__faster bg-[#F1B000] rounded-2xl uppercase md:text-[13pt] text-xs text-zinc-900 font-black ">
          {label}
        </div>
      )}
      <Link
        href={href}
        className={`relative lg:text-[11pt] text-xs uppercase mx-2 md:mx-0 font-extrabold transition-all duration-300 ${
          isActive
            ? "text-white/0 font-extrabold"
            : "text-zinc-200 hover:bg-amber-100/70 hover:text-zinc-800 py-1 px-2 rounded-2xl"
        }`}
      >
        {label}
      </Link>
    </div>
  );
};



