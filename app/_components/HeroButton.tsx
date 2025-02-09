import Image from "next/image";
import React from "react";
import Link from "next/link";

function HeroButton() {
  return (
    <div
      className="rounded-l-full p-3 inline-flex bg-gradient-to-r from-[#023B37]/25 to-[#023B37]/0 -ml-3 mb-7 translate-x--4"
      data-fade="0"
    >
      <div className="rounded-l-full px-4 py-2.5 sm:px-6 sm:py-3.5 inline-flex items-center gap-4 bg-gradient-to-r from-[#023B37] to-[#023B37]/0">
        {/* Accent Circle */}
        <span className="shrink-0 rounded-full block size-2 bg-green-300 shadow-[0_0_5px_rgba(34,197,94,0.4),0_0_10px_rgba(34,197,94,0.3)]"></span>

        {/* Text and Link Section */}
        <p className="b1 txt-secondary b2 sm:b1 flex gap-1.5 flex-wrap items-center">
          <span className="shrink-0">Crafting Experiences at</span>
          <Link
            className="inline-block underline text-neutral-300 transition-colors decoration-[color-mix(in_srgb,_currentColor_30%,_#171717)] hover:decoration-current focus:decoration-current active:decoration-[color-mix(in_srgb,_currentColor_65%,_#171717)] default-ring"
            href="/about#dimension"
          >
            Dimension
          </Link>
        </p>
      </div>
    </div>
  );
}

export default HeroButton;
