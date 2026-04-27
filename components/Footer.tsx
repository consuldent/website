import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

import { FaLinkedin, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

const menus = [
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "Blog", path: "/blog" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Privacy", path: "/privacy" },
  { id: 5, name: "Terms", path: "/terms" },
];

const Footer = () => {
  return (
    <div className="relative container mx-auto md:h-[60vh] py-5 md:py-0 md:pb-10">
      {/* CTA section */}
      <div className="flex flex-col items-center justify-end w-full h-full py-10 space-y-5">
        <h2 className="md:text-7xl font-bold">Ready to Grow Your Practice?</h2>
        {/* buttons  */}
        <div className="flex items-center gap-4">
          <Link href="mailto:hello@consuldent.com.au" className="flex items-center gap-2 border border-gray-500 rounded-lg px-4 py-2 text-sm font-medium cursor-pointer bg-white">
            Email us
            <span className="bg-[#0A3D91] text-white rounded p-1">
              <Mail className="w-4 h-4" />
            </span>
          </Link>
          <Link href="/contact" className="bg-[#10B981] flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium cursor-pointer text-white">
            Book a Free Call
            <div className="bg-white p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 20 24"
                fill="none"
                className="icon-18px w-4 h-4 text-[#10B981]"
              >
                <path
                  d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* bottom  */}
      <div
        className="md:flex space-y-5 md:space-y-0 w-full
  items-end justify-between gap-2
  bg-[#EAE4D8] p-4 rounded-tl-md rounded-tr-md h-full md:h-64
  md:[clip-path:polygon(0_70%,100%_0%,100%_100%,0%_100%)]
 "
      >
        {/* logo    */}
        <div className="w-36 mx-auto md:mx-0">
          <Link href="/">
            <Image src="/logo.png" alt="Consuldent" width={144} height={40} className="w-full h-auto" />
          </Link>
        </div>
        {/* right side  */}
        <div className="md:flex flex-wrap items-center justify-between gap-10">
          <div className="space-y-3">
            {/* menu  */}
            <div className="flex items-center justify-center gap-3">
              {menus.map((menu) => (
                <Link
                  key={menu.id}
                  href={menu.path}
                  className="bg-white text-black rounded-md font-medium text-sm p-1.5 px-2"
                >
                  {menu.name}
                </Link>
              ))}
            </div>

            {/* follow us - unlinked as requested */}
            <div className="flex items-center justify-start gap-3">
              <h2 className="text-sm">Follow us</h2>
              <span className="bg-white text-sm rounded-full p-1.5">
                <FaLinkedin className="w-4 h-4" />
              </span>
              <span className="bg-white text-sm rounded-full p-1.5">
                <FaTiktok className="w-4 h-4" />
              </span>
              <span className="bg-white text-sm rounded-full p-1.5">
                <FaInstagram className="w-4 h-4" />
              </span>
              <span className="bg-white text-sm rounded-full p-1.5">
                <FaYoutube className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* contact  */}
          <div>
            <div>
              <h2 className="text-sm font-semibold">Contact</h2>
              <Link href="mailto:hello@consuldent.com.au" className="text-xs block">hello@consuldent.com.au</Link>
            </div>
            {/* address  */}
            <div>
              <h2 className="text-sm font-semibold mt-2 block">Location</h2>
              <span className="text-xs block">Melbourne, VIC</span>
              <span className="text-xs block">Australia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;