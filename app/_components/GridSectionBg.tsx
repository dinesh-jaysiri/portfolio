import React, { PropsWithChildren } from "react";
import { Container } from "@radix-ui/themes";

function GridSectionBg({ children }: PropsWithChildren) {
  return (
    <section className="py-20 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.2] overflow-hidden relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div className="px-5 mx-auto max-w-5xl w-full ">{children}</div>
    </section>
  );
}

export default GridSectionBg;
