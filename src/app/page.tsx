"use client";

import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Skill } from "@/components/skill";

export default function Home() {

  return (<main className="flex flex-col">
    <About />
    <Education />
    <Skill />
  </main>);
}
