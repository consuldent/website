"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const menus = [
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 4, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMobileBar, setOpenMobileBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = openMobileBar ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobileBar]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-0">
        <div className="flex items-center justify-between py-2.5">
          <Link href="/" className="flex items-center" aria-label="Consuldent home">
            <Image
              src="/logo.png"
              alt="Consuldent"
              width={144}
              height={40}
              className="w-28 md:w-32 h-auto"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {menus.map((menu) => (
              <Link
                key={menu.id}
                href={menu.path}
                className="luxury-link text-sm font-medium text-ink/80 hover:text-ink transition-colors"
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-accent/90 transition-colors"
          >
            Book a Free Call
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpenMobileBar((v) => !v)}
            aria-label={openMobileBar ? "Close menu" : "Open menu"}
            aria-expanded={openMobileBar}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
          >
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                openMobileBar ? "w-6 translate-y-[7px] rotate-45" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                openMobileBar ? "opacity-0" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                openMobileBar ? "w-6 -translate-y-[7px] -rotate-45" : "w-6"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {openMobileBar && (
        <div className="md:hidden fixed inset-0 top-0 z-40 bg-bone flex flex-col">
          <div className="flex flex-col gap-2 p-8 pt-28">
            {menus.map((menu) => (
              <Link
                key={menu.id}
                href={menu.path}
                onClick={() => setOpenMobileBar(false)}
                className="font-display text-3xl text-ink border-b border-line py-4"
              >
                {menu.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpenMobileBar(false)}
              className="mt-6 inline-flex items-center justify-center bg-accent text-white px-6 py-4 rounded-full font-medium"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
