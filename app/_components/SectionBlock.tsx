import React, { PropsWithChildren } from "react";
import { Container } from "@radix-ui/themes";

function SectionBlock({ children }: PropsWithChildren) {
  return (
    <section className="py-20 w-full dark:bg-black bg-white   overflow-hidden relative flex items-center justify-center">
      <div className="px-5 mx-auto max-w-5xl w-full ">{children}</div>
    </section>
  );
}

export default SectionBlock;
