"use client";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useRef, useState } from "react";

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
          <Image src="/logo.png" alt="Consuldent" width={144} height={40} className="w-36 h-auto" priority />
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

        <Link
          href="/contact"
          ref={getResultRef}
          onMouseEnter={handleGetResultsEnter}
          onMouseLeave={handleGetResultLeave}
          className="bg-[#F2B7FA] hidden md:flex items-center justify-center gap-2 py-1.5 px-2 rounded-xl"
        >
          <h2 className="text-sm font-semibold">Get Results</h2>
          <div className="w-6 text-[#F45528] bg-white p-1 rounded-md px-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 24" fill="none" className="icon-18px">
              <path d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z" fill="currentColor" />
            </svg>
          </div>
        </Link>

        <div onClick={() => setOpenMobileBar(!openMobileBar)} className="md:hidden space-y-1 bg-[#F2B7FA] p-3 rounded-md absolute right-5 top-6 z-50 cursor-pointer">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

        {openMobileBar && (
          <div className="mx-10 md:hidden z-30">
            <div className="absolute left-0 top-0 bg-[#F2B7FA] flex items-center justify-center flex-col gap-5 w-full h-screen mx-auto z-30 p-10">
              {menus.map((menu) => (
                <Link
                  key={menu.id}
                  href={menu.path}
                  className="bg-white px-5 rounded-md py-1"
                  onClick={() => setOpenMobileBar(false)}
                >
                  {menu.name}
                </Link>
              ))}
              <Link href="/contact" className="bg-[#F2B7FA] px-5 rounded-md py-1" onClick={() => setOpenMobileBar(false)}>
                Get Results
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;