import React from "react";
// import Link from "next/link";

export default function HeroButton() {
  return (
    <div className="rounded-l-full p-3 inline-flex bg-gradient-to-r from-[#023B37]/25 to-[#023B37]/0 -ml-3 mb-7 translate-x--4 group">
      <div className="rounded-l-full px-4 py-2.5 sm:px-6 sm:py-3.5 inline-flex items-center gap-4 bg-gradient-to-r from-[#023B37] to-[#023B37]/0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <span className="shrink-0 rounded-full block size-2 bg-green-300 shadow-[0_0_5px_rgba(34,197,94,0.4),0_0_10px_rgba(34,197,94,0.3)] animate-pulse" />

        <p className="b1 txt-secondary b2 sm:b1 flex gap-1.5 flex-wrap items-center">
          <span className="shrink-0 text-gray-300">
            Building Scalable SaaS & Blockchain Solutions
          </span>
          {/* <Link
            className="inline-block underline text-emerald-400 transition-all decoration-emerald-400/30 hover:decoration-emerald-400 bg-gradient-to-r from-emerald-400/0 to-emerald-400/0 bg-[length:0_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500"
            href="/about#dimension"
          >
            // link
          </Link> */}
        </p>
      </div>
    </div>
  );
}
