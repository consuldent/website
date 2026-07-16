import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
// import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Social links re-enabled later

const menus = [
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Privacy", path: "/privacy" },
  { id: 6, name: "Terms", path: "/terms" },
];

const Footer = () => {
  return (
    <footer className="bg-ink text-bone">
      <div className="container mx-auto px-4 md:px-0">
        {/* CTA band */}
        <div className="py-20 md:py-28 text-center max-w-3xl mx-auto">
          <p className="eyebrow !text-accent-soft mb-5">Start the conversation</p>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05]">
            Ready to grow your practice?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Book a Free Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:support@consuldent.com.au"
              className="inline-flex items-center gap-2 border border-bone/25 px-7 py-3.5 rounded-full font-medium hover:bg-bone hover:text-ink transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@consuldent.com.au
            </Link>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-bone/15 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="max-w-xs">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="Consuldent"
                  width={144}
                  height={40}
                  className="w-32 h-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-bone/55 mt-4 leading-relaxed">
                Where dental practices grow. Melbourne-based consulting for
                practices across VIC, NSW &amp; QLD.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-8">
              <nav className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.14em] text-bone/40 mb-1">
                  Explore
                </p>
                {menus.map((menu) => (
                  <Link
                    key={menu.id}
                    href={menu.path}
                    className="luxury-link text-sm text-bone/75 hover:text-bone w-fit"
                  >
                    {menu.name}
                  </Link>
                ))}
              </nav>

              {/* Social links re-enabled later */}
              {/* <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.14em] text-bone/40 mb-1">
                  Connect
                </p>
                <a
                  href="https://www.linkedin.com/company/consuldent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-link inline-flex items-center gap-2 text-sm text-bone/75 hover:text-bone w-fit"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/consuldent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-link inline-flex items-center gap-2 text-sm text-bone/75 hover:text-bone w-fit"
                >
                  <FaInstagram className="w-4 h-4" />
                  Instagram
                </a>
              </div> */}

              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.14em] text-bone/40 mb-1">
                  Contact
                </p>
                <Link
                  href="mailto:support@consuldent.com.au"
                  className="luxury-link text-sm text-bone/75 hover:text-bone w-fit"
                >
                  support@consuldent.com.au
                </Link>
                <Link
                  href="mailto:vrinda@consuldent.com.au"
                  className="luxury-link text-sm text-bone/75 hover:text-bone w-fit"
                >
                  vrinda@consuldent.com.au
                </Link>
                <span className="text-sm text-bone/55">Melbourne, VIC</span>
                <span className="text-sm text-bone/55">Australia</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-bone/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-bone/40">
              © {new Date().getFullYear()} Consuldent. All rights reserved.
            </p>
            <p className="text-xs text-bone/40">Where Practices Grow.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
