"use client";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useRef, useState } from "react";
import MagneticButton from "./MagneticButton";

const menus = [
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 4, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const getResultRef = useRef<HTMLAnchorElement>(null);
  const [openMobileBar, setOpenMobileBar] = useState(false);

  const handleEnter = (e: any) => {
    const wrapper = e.currentTarget.querySelector(".wrapper");
    const first = wrapper.querySelector(".firstSpan");
    const last = wrapper.querySelector(".lastSpan");

    gsap.to(first, { y: "-100%", x: 1, duration: 0.2, yoyo: true });
    gsap.to(last, { y: "-100%", x: 0, duration: 0.2, yoyo: true });
  };

  const handleLeave = (e: any) => {
    const wrapper = e.currentTarget.querySelector(".wrapper");
    const first = wrapper.querySelector(".firstSpan");
    const last = wrapper.querySelector(".lastSpan");

    gsap.to(first, { y: "0%", x: 3, duration: 0.2, ease: "power1.inOut", yoyo: true });
    gsap.to(last, { y: "0%", x: 0, duration: 0.2, ease: "power1.inOut", yoyo: true });
  };

  const handleGetResultsEnter = () => {
    if (!getResultRef.current) return;
    gsap.to(getResultRef.current, { rotation: -5, scale: 1.1, duration: 0.3, yoyo: true });
  };

  const handleGetResultLeave = () => {
    if (!getResultRef.current) return;
    gsap.to(getResultRef.current, { rotation: 0, scale: 1 });
  };

  return (
    <div className="relative container mx-auto px-2 md:px-0">
      <div className="flex items-center justify-between gap-2 py-3 w-full">
        <Link href="/" className="z-50 flex items-center">
          <Image src="/logo.png" alt="Consuldent" width={144} height={40} className="w-36" style={{ height: 'auto' }} priority />
        </Link>

        <div className="hidden md:flex gap-3 p-2 px-1 rounded-2xl bg-white">
          {menus.map((menu) => (
            <Link
              key={menu.id}
              href={menu.path}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="relative text-xs font-semibold px-2"
            >
              <div className="wrapper relative overflow-hidden p-2">
                <span className="firstSpan block">{menu.name}</span>
                <span className="lastSpan block absolute left-0 top-full bg-black p-2 text-white rounded-md">
                  {menu.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <MagneticButton>
          <Link
            href="/contact"
            ref={getResultRef}
            onMouseEnter={handleGetResultsEnter}
            onMouseLeave={handleGetResultLeave}
            className="bg-[#0A3D91] hidden md:flex items-center justify-center gap-2 py-2 px-4 rounded-xl hover:bg-[#0A3D91]/90 transition-colors"
          >
            <h2 className="text-sm font-semibold text-white">Book Free Call</h2>
          </Link>
        </MagneticButton>

        <div onClick={() => setOpenMobileBar(!openMobileBar)} className="md:hidden space-y-1 bg-[#0A3D91] p-3 rounded-md absolute right-5 top-6 z-50 cursor-pointer">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

        {openMobileBar && (
          <div className="mx-10 md:hidden z-30">
            <div className="absolute left-0 top-0 bg-[#0A3D91] flex items-center justify-center flex-col gap-5 w-full h-screen mx-auto z-30 p-10">
              {menus.map((menu) => (
                <Link
                  key={menu.id}
                  href={menu.path}
                  className="text-white border border-white/30 px-5 rounded-md py-2 hover:bg-white/10 transition-colors"
                  onClick={() => setOpenMobileBar(false)}
                >
                  {menu.name}
                </Link>
              ))}
              <Link href="/contact" className="bg-[#00C4CC] text-black px-5 rounded-md py-2 font-semibold hover:bg-[#00C4CC]/90 transition-colors" onClick={() => setOpenMobileBar(false)}>
                Book Free Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;